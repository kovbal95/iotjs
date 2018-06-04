while [ ! -z ${1+x} ]
do
  echo $1
  cat all_begin.js > $TMP
  cat $1 >> $TMP
  cat all_end.js >> $TMP
  $IOTJS $TMP
  shift
done
