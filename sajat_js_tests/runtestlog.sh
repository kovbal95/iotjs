#!/bin/bash

source ./env.sh

while [ ! -z ${1+x} ]
do
  echo "N=0;" > $TMP
  cat $1 >> $TMP
  sed -i -e 's/assert.equal/console.log/g' $TMP
  sed -i -e 's/break;\/\/needed/N=0;/g' $TMP
  $IOTJS $TMP
  shift
done
