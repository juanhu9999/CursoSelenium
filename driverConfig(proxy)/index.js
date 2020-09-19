const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const proxy = require("selenium-webdriver/proxy");
const options = new firefox.Options();
options.setProfile("./SeleniumTutorial");
const proxyServer="51.81.82.175:80";

const driver = new Builder()
.forBrowser("firefox")
.setFirefoxOptions(options)
.setProxy(proxy.manual({
    http: proxyServer,
    https: proxyServer,
}))
.build();

driver.get("https://whatismyipaddress.com/es/mi-ip");