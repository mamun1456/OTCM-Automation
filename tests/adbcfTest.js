let adbcf = require('../pages/adbcfPage');

describe('verify ADBCF quote, company name, price and market capital', function() {
    
    beforeAll(() => {
        browser.get('https://www.otcmarkets.com/');
        
    })
    
    it('enter ADBCF quote', async() => {
        // inserting ADBCF quote to capture it
        adbcf.clickQuote();
        adbcf.enterQuoteAdbcf("adbcf");
        adbcf.click();
    });
    
    it('verify ADBCF symbol and company name', async() => {
        // extracting ADBCF company name
        adbcf.getQuoteNameAdbcf().toEqual('ADBCF');
        console.log("Quote Name is: " + getQuoteName());

        adbcf.getQuoteCompanyNameAdbcf().toEqual('ADBCF - ADBRI Limited');
        console.log("Company Name is: " + getQuoteCompanyName());
    });

    it('verify ADBCF open price and market capital', async() => {
        // extracting open price and market capital
        adbcf.clickQuoteTab();
        adbcf.getPriceAdbcf().toEqual('0.00');
        console.log("Open Price is: " + getPrice());

        adbcf.getMarketCapAdbcf().toEqual('1,648,169,678');
        console.log("Market Capital is: " + getMarketCap());
    });

    it('verify ADBCF market capital and date', async() => {
        // navigating to security details
        adbcf.navigateSecurityDetail();

        // validate market cap
        adbcf.varifyMarketCapAdbcf().toEqual('1,648,169,678');
        console.log("Market Cap oof OTCM is : " + varifyMarketCap())

        // validate date
        adbcf.varifyDateAdbcf().toEqual(currentDt);
        let sdf = new SimpleDateFormat("MM/DD/YYYY");
        let dt = new Date();
        let currentDt = sdf.format(dt);
        console.log("Market Cap of OTCM as on: " + currentDt);
       
    });

  });