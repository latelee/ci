#!/bin/bash
git config user.name  "Late Lee"
git config user.email "li@latelee.org"
# add commit timestamp
git add .
git commit -m "update"
git push --force --quiet "https://c1522a7c467cf9b1a694e63fc82e1d877d87129a@github.com/latelee/ci.git" master:master