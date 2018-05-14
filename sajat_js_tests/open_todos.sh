#!/bin/bash

#if [ -z ${1+x} ]

m=$#
((m++))
db=0
for fn in `ls test*.js`; do
	mehet="mehet"
	i=1
	while [ ! -z $mehet ] && [ $m -gt $i ]
	do
		search=$(eval "echo $"$i)
		if [ ${search:0:1} = "-" ]
		then
			search=${search:1}
			search="cat ./"$fn" | grep \"//"$search"\""
			search=$(eval $search)
			if [ ! -z "$search" ]
			then
				mehet=""
			fi
		else
			search="cat ./"$fn" | grep \"//"$search"\""
			search=$(eval $search)
			if [ -z "$search" ]
			then
				mehet=""
			fi
		fi
		((i++))
	done
	if [ ! -z $mehet ]
	then
		eval "gedit "$fn
		((db++))
	fi
done
echo $db
