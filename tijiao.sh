#！/bin/bash

git add . &&
git commit -m "$1" &&
git pull  &&
git push -u origin git@github.com:richard1230/ReactUI01.git
