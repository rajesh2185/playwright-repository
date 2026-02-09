/* Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, 
and `runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript  */

let browserName = "chrome";
let testtype = "smoke";

function launchBrowser(browserName) {
if (browserName === "chrome") {
    console.log("Chrome Browser"); }
else if (browserName === "edge"){
    console.log("MS Edge Browser"); }
else if (browserName === "webkit"){
    console.log("Webkit Browser"); }
    else{
    console.log("Default Browser"); }
    }

function runTests(testtype){
switch(testtype) {
case "sanity":
console.log("Sanity testing");
break;
case "regression":
console.log("Regression testing");
break;
default:
console.log("Smoke testing");
break;
}
}

launchBrowser(browserName);
runTests(testtype);