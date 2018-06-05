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
  list=()
  echo -n "$fn, "
  for i in {0..10}; do
    $RUNTEST $fn > /dev/null
    list+=(`cat $TEMPFILE`)
  done
  IFS=$'\n' sorted=($(sort <<<"${list[*]}"))
  unset IFS
  echo ${sorted[5]}
done

for fn in `ls test-promise_*.js`; do
  list=()
  echo -n "$fn, "
  for i in {0..10}; do
    list+=(`$IOTJS $fn`)
  done
  IFS=$'\n' sorted=($(sort <<<"${list[*]}"))
  unset IFS
  echo ${sorted[5]}
done
