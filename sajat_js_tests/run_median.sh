#!/bin/bash

source ./env.sh

n=$1
shift

list=()
echo -n "$1, "
for i in {0..10}; do
  $RUNTEST $n $1 > /dev/null
  list+=(`cat $TEMPFILE`)
done
IFS=$'\n' sorted=($(sort <<<"${list[*]}"))
unset IFS
echo ${sorted[5]} > $TEMPFILE
cat $TEMPFILE
