const fs = require("fs");
const devPackage = require("../package.json");
const buildPackage = {
    "name": devPackage["name"],
    "version": devPackage["version"],
    "main": devPackage["main"],
    "repository": devPackage["repository"],
    "author": devPackage["author"],
    "license": devPackage["license"],
    "engines": {
        "node": "14.x.x",
        "yarn": "1.22.x"
    },
    "scripts": {
        "start": devPackage["scripts"]["start-of-deployed-build"]
    } ,
    "dependencies": devPackage["dependencies"]
}
let stringed = JSON.stringify(buildPackage);
fs.writeFile('dist/package.json', stringed, 'utf8', () => {
    console.log("package.json job finished...");
});
// new_file = fs.openSync("./dist/package.json", "w");
// fs.writeSync(new_file, stringed);
// fs.closeSync(new_file);
// fs.writeFileSync("/dist/package.json", stringed);
// console.log("package.json job finished...");


