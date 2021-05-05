let otcmPage = function(){

    let quoteTextBox = element(by.xpath('//input[@placeholder="quote"]'));
    let otcmSymbol = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[1]'))
    let CompanyName = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[2]'));
    let quoteTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[3]/a'));
    let openPx = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[1]/p'));
    let marketCap = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[11]/p'))
    let securityDetailsTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[5]/a'));
    let marketCapital = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[2]'));
    let date = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[3]'));

    this.clickQuote = function(){
        quoteTextBox.click();
    };

    this.enterQuote = function(quoteSymbol){
        quote.clear().then(function(){
            quoteTextBox.sendKeys(quoteSymbol);
        })   
    };

    this.getQuoteName = function(QuoteName){
        expect(otcmSymbol.getText(QuoteName));
    };

    this.getQuoteCompanyName = function(QuoteCompanyName){
        expect(CompanyName.getText(QuoteCompanyName));
    };

    this.clickQuoteTab = function(){
        quoteTab.click();
    };

    this.getPrice = function(price){
        openPx.getText(price);
    };

    this.getMarketCap = function(amount){
        marketCap.getText(amount);
    };

    this.navigateSecurityDetail = function(){
        securityDetailsTab.click();
    };

    this.varifyMarketCap = function(companyName){
        expect(marketCapital.getText(companyName));
    };

    this.varifyDate = function(dt){
        expect(date.getText(dt));
        
    };

};

module.exports = new otcmPage();