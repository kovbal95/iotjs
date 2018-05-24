#!/bin/bash

#../tools/build.py --clean --jerry-profile=es2015-subset

for fn in `ls test_*.js`; do
	eval "./runtest.sh "$fn
done

for fn in `ls test-promise_*.js`; do
	echo $fn
	eval "../build/x86_64-linux/debug/bin/iotjs "$fn
done

date
