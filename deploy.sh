#!/bin/bash

echo "Initiating deployment processes..."
tsc
touch dist/package.json
node dev_scripts/manageBuildPackageJson.js
cat dist/package.json
git add .
git commit -m "$1"
git push heroku master
cd ..
rm dist/package.json
echo "Tak Completed."
