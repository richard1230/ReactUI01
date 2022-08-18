#!/usr/bin/env bash

rm -rf doc/ &&
yarn doc &&
cd doc &&
git init &&
git add . &&
git commit -m "first commit" &&
git branch -M main
git remote add origin git@github.com:richard1230/RUI-Deploy.git &&
#或者:
git push -u origin main -f &&
cd ..