const {Builder , By, Key, until} = require("selenium-webdriver");
const { titleIs } = require("selenium-webdriver/lib/until");

async function checkHomepage(){
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("http://localhost:4200");
        await driver.wait(until.titleIs("Sudharshan"), 10000);
    }finally{
        await driver.quit();
    }
}
if(titleIs != "sudharshan"){
    console.log("error");
}

checkHomepage();