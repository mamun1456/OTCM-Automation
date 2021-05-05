let rhhby = require('../pages/rhhbyPage');

describe('verify RHHBY quote, company name, price and market capital', function() {
    
    beforeAll(() => {
        browser.get('https://www.otcmarkets.com/');
        
    })
    
    it('enter RHHBY quote', async() => {
        // inserting RHHBY quote to capture it
        rhhby.clickQuote();
        rhhby.enterQuoteRhhby("rhhby");
        rhhby.click();
    });    
    
    it('verify RHHBY symbol and company name', async() => {   
        // extracting RHHBY company name
        rhhby.getQuoteNameRhhby().toEqual('RHHBY');
        console.log("Quote Name is: " + getQuoteName());

        rhhby.getQuoteCompanyNameRhhby().toEqual('RHHBY - Roche Holding Ltd');
        console.log("Company Name is: " + getQuoteCompanyName());
    });
    
    it('verify RHHBY open price and market capital', async() => {
        // extracting open price and market capital
        rhhby.clickQuoteTab();
        rhhby.getPriceRhhby().toEqual('41.06');
        console.log("Open Price is: " + getPrice());

        rhhby.getMarketCapRhhby().toEqual('281,057,430,168');
        console.log("Market Capital is: " + getMarketCap());
    });

    it('verify RHHBY market capital and date', async() => {
        // navigating to security details
        rhhby.navigateSecurityDetail();

        // validate market cap and price 
        rhhby.varifyMarketCapRhhby().toEqual('281,057,430,168');
        console.log("Market Cap oof OTCM is : " + varifyMarketCap())

        // validate date
        rhhby.varifyDateRhhby().toEqual(currentDt);
        let sdf = new SimpleDateFormat("MM/DD/YYYY");
        let dt = new Date();
        let currentDt = sdf.format(dt);
        console.log("Market Cap of OTCM as on: " + currentDt);
       

    });

  });