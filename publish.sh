#!/bin/bash
git config user.name  "Late Lee"
git config user.email "li@latelee.org"
# add commit timestamp
git add .
git commit -m "update"
git push "https://895841413b01ab0a9b0ac3e5839c97393d244d56@github.com/latelee/ci.git" master:master
