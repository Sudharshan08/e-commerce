const {Builder, until, By} = require("selenium-webdriver");

async function testContent(){
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        await driver.get("http://localhost:4200/products")
        let dynamicElement = await driver.wait(until.elementLocated(By.id('selenium')),10000);
        let dynamicElement2 = await driver.wait(until.elementLocated(By.id('info')),10000);
        let dynamicElement3 = await driver.wait(until.elementLocated(By.id('info1')),10000);
        let dynamicElement4 = await driver.wait(until.elementLocated(By.id('info2')),10000);
        let dynamicElement5 = await driver.wait(until.elementLocated(By.id('info3')),10000);

        console.log(await dynamicElement.getText());
        console.log(await dynamicElement2.getText());
        console.log(await dynamicElement3.getText());
        console.log(await dynamicElement4.getText());
        console.log(await dynamicElement5.getText());
    }
    finally{
        await driver.quit();
    }
}

testContent();