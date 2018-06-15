#!/bin/bash

source ./env.sh

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
GRAY='\033[0;37m'
NC='\033[0m'

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
  if [ ! `echo $fn | grep -q "_es5.js"` ] &&
     [ -f ${fn:0:-3}_es5.js ]
  then
    fn=${fn:0:-3}
    $RUNTEST 1 $fn"_es5.js" > /dev/null
    runtry=$fn"_es5.js, "`cat $TEMPFILE`"\n"
    $RUNTEST 1 $fn".js" > /dev/null
    runtry=$runtry$fn".js, "`cat $TEMPFILE`
    if [[ `echo $runtry | grep -F "n/a" ` ]]
    then
      echo -e $GRAY$runtry$NC
    else
      time=0
      let db=1
      while [ ${time:0:1} == 0 ]
      do
        db=$( expr $db \* 10 )
        $RUNMEDIAN $db $fn"_es5.js" > /dev/null
        time=`cat $TEMPFILE`
      done
      tort=`echo $time | grep -b -o "\."`
      tort=`expr ${tort:0:1} + 1`
      tort=${time:$tort}
      while [ ${#tort} -lt 3 ]
      do
        tort=$tort"0"
      done
      while [ `echo $time | grep "\." ` ]
      do
        time=${time:0:-1}
      done
      time=$time$tort
      db=`expr $db \* 10000`
      db=`expr $db / $time`
      db=`expr $db + 1`
      $RUNMEDIAN $db $fn"_es5.js" > /dev/null
      es5time=`cat $TEMPFILE`
      $RUNMEDIAN $db $fn".js" > /dev/null
      es6time=`cat $TEMPFILE`
      if [ `./gt.sh $es5time $es6time` == 1 ]
      then
        echo -e -n $BLUE$fn"_es5.js, "$NC
        echo -e ${RED}${es5time}${NC}
        echo -e -n $BLUE$fn".js, "$NC
        echo -e ${GREEN}${es6time}${NC}
      else
        echo -e -n $BLUE$fn"_es5.js, "$NC
        echo -e ${GREEN}${es5time}${NC}
        echo -e -n $BLUE$fn".js, "$NC
        echo -e ${RED}${es6time}${NC}
      fi

    fi
  fi
done
