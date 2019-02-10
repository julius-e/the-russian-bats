#!/bin/bash

mysql -u root -p$(cat pw.txt | awk '{$1=$1};1') -e "create database mlb"
mysql -u root -p$(cat pw.txt | awk '{$1=$1};1') -e "create user mlb identified by 'brain-heavenly-nail-seat'"
mysql -u root -p$(cat pw.txt | awk '{$1=$1};1') -e "grant all privileges on mlb.* to mlb"
