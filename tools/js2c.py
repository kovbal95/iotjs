#!/usr/bin/env python

# Copyright 2015-present Samsung Electronics Co., Ltd. and other contributors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#  This file converts src/js/*.js to a C-array in src/iotjs_js.[h|c] file.
# And this file also generates magic string list in src/iotjs_string_ext.inl.h
# file to reduce JerryScript heap usage.

import re
import subprocess
import struct

from common_py.system.filesystem import FileSystem as fs
from common_py import path


def regroup(l, n):
    return [l[i:i+n] for i in range(0, len(l), n)]


def remove_comments(code):
    pattern = r'(\".*?\"|\'.*?\')|(/\*.*?\*/|//[^\r\n]*$)'
    regex = re.compile(pattern, re.MULTILINE | re.DOTALL)

    def _replacer(match):
        if match.group(2) is not None:
            return ""
        else:
            return match.group(1)

    return regex.sub(_replacer, code)


def remove_whitespaces(code):
    return re.sub('\n+', '\n', re.sub('\n +', '\n', code))


def parse_literals(code):
    JERRY_SNAPSHOT_VERSION = 6

    literals = set()

    header = struct.unpack('IIII', code[0:16])
    if header[0] != JERRY_SNAPSHOT_VERSION :
        print ('Please check jerry snapshot version (Last confirmed: %d)'
               % JERRY_SNAPSHOT_VERSION)
        exit(1)

    code_ptr = header[1] + 8
    while code_ptr < len(code):
        length = struct.unpack('H', code[code_ptr : code_ptr + 2])[0]
        code_ptr = code_ptr + 2
        if length == 0:
            continue
        if length < 32:
            item = struct.unpack('%ds' % length,
                                 code[code_ptr : code_ptr + length])
            literals.add(item[0])
        code_ptr = code_ptr + length + (length % 2)

    return literals


LICENSE = '''
/* Copyright 2015-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is generated by tools/js2c.py
 * Do not modify this.
 */
'''

HEADER1 = '''#ifndef IOTJS_JS_H
#define IOTJS_JS_H
'''

FOOTER1 = '''
#endif
'''

HEADER2 = '''#include <stdio.h>
#include "iotjs_js.h"
'''

EMPTY_LINE = '\n'

MAGIC_STRINGS_HEADER = '#define JERRY_MAGIC_STRING_ITEMS \\\n'


MODULE_VARIABLES_H = '''
extern const char {NAME}_n[];
extern const char {NAME}_s[];
extern const int {NAME}_l;
'''

MODULE_VARIABLES_C = '''
#define SIZE_{NAME_UPPER} {SIZE}
const int {NAME}_l = SIZE_{NAME_UPPER};
const char {NAME}_n[] = "{NAME}";
const char {NAME}_s[] = {{
{CODE}
}};
'''

NATIVE_STRUCT_H = '''
typedef struct {
  const char* name;
  const void* code;
  const int length;
} iotjs_js_module;

extern const iotjs_js_module natives[];
'''

NATIVE_STRUCT_C = '''
const iotjs_js_module natives[] = {{
{MODULES}
}};
'''


def hex_format(ch):
    if isinstance(ch, str):
        ch = ord(ch)

    return "0x{:02x}".format(ch)


def format_code(code, indent):
    lines = []
    # convert all characters to hex format
    converted_code = map(hex_format, code)
    # 10 hex number per line
    for line in regroup(", ".join(converted_code), 10 * 6):
        lines.append(('  ' * indent) + line.strip())

    return "\n".join(lines)


def get_snapshot_contents(module_name, snapshot_generator):
    """ Convert the given module with the snapshot generator
        and return the resulting bytes.
    """
    js_path = fs.join(path.SRC_ROOT, 'js', module_name + '.js')
    wrapped_path = js_path + ".wrapped"
    snapshot_path = js_path + ".snapshot"

    with open(wrapped_path, 'w') as fwrapped, open(js_path, "r") as fmodule:
        if module_name != "iotjs":
            fwrapped.write("(function(exports, require, module) {\n")

        fwrapped.write(fmodule.read())

        if module_name != "iotjs":
            fwrapped.write("});\n")

    ret = subprocess.call([snapshot_generator,
                           "--save-snapshot-for-eval",
                           snapshot_path,
                           wrapped_path])
    if ret != 0:
        msg = "Failed to dump %s: - %d" % (js_path, ret)
        print("%s%s%s" % ("\033[1;31m", msg, "\033[0m"))
        exit(1)

    with open(snapshot_path, 'rb') as snapshot:
        code = snapshot.read()

    fs.remove(wrapped_path)
    fs.remove(snapshot_path)

    return code


def get_js_contents(name, is_debug_mode=False):
    """ Read the contents of the given js module. """
    js_path = fs.join(path.SRC_ROOT, 'js', name + '.js')
    with open(js_path, "r") as f:
         code = f.read()

    # minimize code when in release mode
    if not is_debug_mode:
        code = remove_comments(code)
        code = remove_whitespaces(code)
    return code


def js2c(buildtype, no_snapshot, js_modules, js_dumper):
    is_debug_mode = buildtype == "debug"
    magic_string_set = { b'process' }

    # generate the code for the modules
    with open(fs.join(path.SRC_ROOT, 'iotjs_js.h'), 'w') as fout_h, \
         open(fs.join(path.SRC_ROOT, 'iotjs_js.c'), 'w') as fout_c:

        fout_h.write(LICENSE)
        fout_h.write(HEADER1)
        fout_c.write(LICENSE)
        fout_c.write(HEADER2)

        for name in sorted(js_modules):
            if no_snapshot:
                code = get_js_contents(name, is_debug_mode)
            else:
                code = get_snapshot_contents(name, js_dumper)
                magic_string_set |= parse_literals(code)

            code_string = format_code(code, 1)

            fout_h.write(MODULE_VARIABLES_H.format(NAME=name))
            fout_c.write(MODULE_VARIABLES_C.format(NAME=name,
                                                   NAME_UPPER=name.upper(),
                                                   SIZE=len(code),
                                                   CODE=code_string))

        fout_h.write(NATIVE_STRUCT_H)
        fout_h.write(FOOTER1)

        modules_struct = [
            '  {{ {0}_n, {0}_s, SIZE_{1} }},'.format(name, name.upper())
            for name in sorted(js_modules)
        ]
        modules_struct.append('  { NULL, NULL, 0 }')

        fout_c.write(NATIVE_STRUCT_C.format(MODULES="\n".join(modules_struct)))
        fout_c.write(EMPTY_LINE)

    # Write out the external magic strings
    magic_str_path = fs.join(path.SRC_ROOT, 'iotjs_string_ext.inl.h')
    with open(magic_str_path, 'w') as fout_magic_str:
        fout_magic_str.write(LICENSE)
        fout_magic_str.write(MAGIC_STRINGS_HEADER)

        sorted_strings = sorted(magic_string_set, key=lambda x: (len(x), x))
        for idx, magic_string in enumerate(sorted_strings):
            if not isinstance(magic_string, str):
                magic = magic_string.decode('utf-8')
            else:
                magic = magic_string
            magic_text = repr(magic)[1:-1]

            fout_magic_str.write('  MAGICSTR_EX_DEF(MAGIC_STR_%d, "%s") \\\n'
                                 % (idx, magic_text))
        # an empty line is required to avoid compile warning
        fout_magic_str.write(EMPTY_LINE)
