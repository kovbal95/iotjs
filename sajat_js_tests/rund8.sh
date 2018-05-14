while [ ! -z ${1+x} ]
do
  echo "N=0;" > temp_test.js
  cat $1 >> temp_test.js
  sed -i -e 's/assert.equal/console.log/g' temp_test.js
  sed -i -e 's/break;\/\/needed/N=0;/g' temp_test.js
  /home/kovalcsik/V8/v8/v8/out.gn/x64.release/d8 temp_test.js
  shift
done
