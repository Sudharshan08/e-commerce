const {Builder, until, By, WebElement, WebDriver, WebDriverWait,Select, size, Thread,} = require("selenium-webdriver");
const { alertIsPresent, elementLocated } = require("selenium-webdriver/lib/until");

async function testSubmission(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        
        await driver.get("http://localhost:4200/products");
        //let alert = await driver.wait(until.alertIsPresent(),10000);
        //console.log(await alert.getText("added to cart success"))
        //await alert.accept();
        //working for adding to cart
        let click1 = await driver.wait(until.elementLocated(By.xpath(xpath="//button[@id='click']")),10000);
        driver.manage().window().maximize();
        click1.click();
        let click2 = await driver.wait(until.elementLocated(By.xpath(xpath="//button[@id='click']")),10000);
        driver.manage().window().maximize();
        click2.click();

        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
 

        //working for removing item from cart
        remove_button1 = await driver.wait(until.elementLocated(By.xpath(xpath="//button[@id='remove']")),5000);
        remove_button1.click();
        //remove_button2 = await driver.wait(until.elementLocated(By.xpath(xpath="//button[@id='remove']")),5000);
        //remove_button2.click()
        let dynamic1 = await driver.wait(until.elementLocated(By.id('alert1')),10000);
        console.log(await dynamic1.getText());
        
        
          let alert = await driver.wait(until.alertIsPresent(),10000);
        console.log(await alert.getText());
        await alert.accept();
        
       
        //not working
        //let i=0;
        //let click = await driver.findElement(By.xpath(xpath="//button[@id='click']")).size();
        //driver.manage().window().maximize();
        //click.click();
    }
finally{
    await driver.quit();
}
}

testSubmission();