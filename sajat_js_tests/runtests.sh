#!/bin/bash


for fn in `ls test*.js`; do
	good=$(eval "cat ./"$fn" | grep \"//finisd\"")
	if [ ! -z "$good" ]
	then
		eval "./runtest.sh "$fn
	fi
done

date
