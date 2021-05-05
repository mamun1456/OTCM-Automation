let adbcfPage = function(){

    let quoteTextBox = element(by.xpath('//input[@placeholder="quote"]'));
    let adbcfSymbol = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[1]'))
    let adbcfCompanyName = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[2]'));
    let quoteTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[3]/a'));
    let openPx = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[1]/p'));
    let adbcMarketCap = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[11]/p'))
    let securityDetailsTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[5]/a'));
    let adbcfMarketCapital = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[2]'));
    let date = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[3]'));

    this.clickQuoteAdbcf = function(){
        quoteTextBox.click();
    };

    this.enterQuoteAdbcf = function(quoteSymbol){
        quote.clear().then(function(){
            quoteTextBox.sendKeys(quoteSymbol);
        })   
    };

    this.getQuoteNameAdbcf = function(QuoteName){
        expect(adbcfSymbol.getText(QuoteName));
    };

    this.getQuoteCompanyNameAdbcf = function(QuoteCompanyName){
        expect(adbcfCompanyName.getText(QuoteCompanyName));
    };

    this.clickQuoteTabAdbcf = function(){
        quoteTab.click();
    };

    this.getPriceAdbcf = function(price){
        openPx.getText(price);
    };

    this.getMarketCapAdbcf = function(amount){
        adbcMarketCap.getText(amount);
    };

    this.navigateSecurityDetailAdbcf = function(){
        securityDetailsTab.click();
    };

    this.varifyMarketCapAdbcf = function(companyName){
        expect(adbcfMarketCapital.getText(companyName));
    };

    this.varifyDateAdbcf = function(dt){
        expect(date.getText(dt));
        
    };

};

module.exports = new adbcfPage();