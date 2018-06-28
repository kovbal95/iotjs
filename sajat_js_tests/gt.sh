if [ "x$1" == "x" ]
then
  echo 0
  exit
fi
if [ "x$2" == "x" ]
then
  echo 0
  exit
fi
eleje1=""
vege1=$1
eleje2=""
vege2=$2
if [ ! `echo $vege1 | grep "\."` ]
then
  vege1=$vege1".0"
fi
if [ ! `echo $vege2 | grep "\."` ]
then
  vege2=$vege2".0"
fi
while [ `echo $vege1 | grep "\."` ]
do
  eleje1=$eleje1${vege1:0:1}
  vege1=${vege1:1}
done
if [ `echo $eleje1 | grep "\."` ]
then
  eleje1=${eleje1:0:-1}
fi
while [ `echo $vege2 | grep "\."` ]
do
  eleje2=$eleje2${vege2:0:1}
  vege2=${vege2:1}
done
if [ `echo $eleje2 | grep "\."` ]
then
  eleje2=${eleje2:0:-1}
fi
while [ ${#vege1} -lt ${#vege2} ]
do
  vege1=$vege1"0"
done
while [ ${#vege2} -lt ${#vege1} ]
do
  vege2=$vege2"0"
done
if [ $eleje1 -gt $eleje2 ]
then
  echo 1
  exit
fi
if [ $eleje2 -gt $eleje1 ]
then
  echo 0
  exit
fi
if [ $vege1"0" -gt $vege2"0" ]
then
  echo 1
  exit
fi
echo 0
