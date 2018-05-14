while [ ! -z ${1+x} ]
do
  echo $1
  cat all_begin.js > temp_test.js
  cat $1 >> temp_test.js
  cat all_end.js >> temp_test.js
  eval "../build/x86_64-linux/debug/bin/iotjs ./temp_test.js"
  shift
done
