#!/bin/bash
git config user.name  "Late Lee"
git config user.email "li@latelee.org"
# add commit timestamp
git add .
git commit -m "update"
git push "https://558e52d0ab4bbe7673e0ac7737acfffd59ee4cac@github.com/latelee/ci.git" master:master
