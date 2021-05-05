let otcm = require('../pages/otcmPage');

describe('verify OTCM quote, company name, price and market capital', function() {
    
    beforeAll(() => {
        browser.get('https://www.otcmarkets.com/');
        
    })
    
    it('enter OTCM quote', async() => {
        // inserting OTCM quote to capture it
        otcm.clickQuote();
        otcm.enterQuote("otcm");
        otcm.click();
    });
        
    it('verify OTCM symbol and company name', async() => {
        // extracting OTCM company name
        otcm.getQuoteName().toEqual('OTCM');
        console.log("Quote Name is: " + getQuoteName());

        otcm.getQuoteCompanyName().toEqual('OTCM - OTC Market Group inc.');
        console.log("Company Name is: " + getQuoteCompanyName());

    });

    it('verify OTCM open price and market capital', async() => {
        // extracting open price and market capital
        otcm.clickQuoteTab();
        otcm.getPrice().toEqual('38');
        console.log("Open Price is: " + getPrice());

        otcm.getMarketCap().toEqual('482,455,651');
        console.log("Market Capital is: " + getMarketCap());
    });
    
    it('verify OTCM market capital and date', async() => {
        // navigating to security details
        otcm.navigateSecurityDetail();

        // validate market cap
        otcm.varifyMarketCap().toEqual('473630243');
        console.log("Market Cap oof OTCM is : " + marketCap())

        // validate date
        otcm.varifyDate().toEqual(currentDt);
        let sdf = new SimpleDateFormat("MM/DD/YYYY");
        let dt = new Date();
        let currentDt = sdf.format(dt);
        console.log("Market Cap of OTCM as on: " + currentDt);
       
    });

  });