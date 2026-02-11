let browser = "chrome"; //initialize and declare variable and variable value
//function
function checkBrowserVersion(callback) {
    setTimeout(function ()  {
        callback(browser);
            }, 2000);
    }

//callback function
function logsBrowserVersion(browserName){
    console.log(`Broswer version: ${browserName}`);
}

checkBrowserVersion(logsBrowserVersion)

