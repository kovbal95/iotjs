#!/bin/bash

source ./env.sh

name=`basename $IOTJS`
echo -n $name", "
case "$name" in
  d8)
    echo `$IOTJS version_d8.js`
    ;;
  iotjs)
    echo "unknown"
    ;;
  *)
    echo `$IOTJS --version`
esac

for fn in `ls test_*.js`; do
  echo -n "$fn, "
	$RUNTEST $fn > /dev/null
	cat $TEMPFILE
done

for fn in `ls test-promise_*.js`; do
  echo -n "$fn, "
	$IOTJS $fn
done
