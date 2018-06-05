#!/bin/bash

source ./env.sh

while [ "x$1" != "x" ]
do
  echo $1
  cat all_begin.js > $TMP
  cat $1 >> $TMP
  cat all_end.js >> $TMP
  $IOTJS $TMP > $TEMPFILE 2>&1
  val=`grep " " $TEMPFILE`
  if [ "x$val" != "x" ]
  then
    echo "n/a" > $TEMPFILE
  fi
  cat $TEMPFILE
  shift
done
