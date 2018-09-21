#!/bin/bash
git config user.name  "Late Lee"
git config user.email "li@latelee.org"
# add commit timestamp
git add .
git commit -m "update"
git push --force --quiet "https://abe0bc35021c1ab45f8672f6ed39f58c652eeada@github.com/latelee/ci.git" master:master
