#!/bin/bash

set -ex

TABLES=$(mdb-tables -1 $1)

MUSER="mlb"
MPASS=$(cat pw.txt | awk '{$1=$1};1')
MHOST=${3:-127.0.0.1}
MDB="$2"

MYSQL=$(which mysql)

for t in $TABLES
do
    $MYSQL -s -h $MHOST -u $MUSER -p$MPASS $MDB -e "DROP TABLE IF EXISTS $t"
done

mdb-schema $1 mysql | $MYSQL -s -h $MHOST -u $MUSER -p$MPASS $MDB

for t in $TABLES
do
    echo "Processing $t"
    mdb-export -D '%Y-%m-%d %H:%M:%S' -I mysql $1 $t | $MYSQL -s -h $MHOST -u $MUSER -p$MPASS $MDB
done