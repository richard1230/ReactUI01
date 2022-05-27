#!/usr/bin/env bash

npm version $1 &&
git push -u set-url main

#$1: patch;major;minor
