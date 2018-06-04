#!/bin/bash

#../tools/build.py --clean --jerry-profile=es2015-subset

for fn in `ls test_*.js`; do
	$RUNTEST $fn
done

for fn in `ls test-promise_*.js`; do
	echo $fn
	$IOTJS $fn
done
