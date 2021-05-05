let rhhbyPage = function(){

    let quoteTextBox = element(by.xpath('//input[@placeholder="quote"]'));
    let rhhbySymbol = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[1]'))
    let rhhbyCompanyName = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[1]/div/div/div[1]/h1[2]'));
    let quoteTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[3]/a'));
    let openPx = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[1]/p'));
    let rhhbyMarketCap = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[1]/div[11]/p'))
    let securityDetailsTab = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div/div[5]/a'));
    let rhhbyMarketCapital = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[2]'));
    let date = element(by.xpath('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[3]'));

    this.clickQuoteAdbcf = function(){
        quoteTextBox.click();
    };

    this.enterQuoteRhhby = function(quoteSymbol){
        quote.clear().then(function(){
            quoteTextBox.sendKeys(quoteSymbol);
        })   
    };

    this.getQuoteNameRhhby = function(QuoteName){
        expect(rhhbySymbol.getText(QuoteName));
    };

    this.getQuoteCompanyNameRhhby = function(QuoteCompanyName){
        expect(rhhbyCompanyName.getText(QuoteCompanyName));
    };

    this.clickQuoteTabRhhby = function(){
        quoteTab.click();
    };

    this.getPriceRhhby = function(price){
        openPx.getText(price);
    };

    this.getMarketCapRhhby = function(amount){
        rhhbyMarketCap.getText(amount);
    };

    this.navigateSecurityDetailRhhby = function(){
        securityDetailsTab.click();
    };

    this.varifyMarketCapRhhby = function(companyName){
        expect(rhhbyMarketCapital.getText(companyName));
    };

    this.varifyDateRhhby = function(dt){
        expect(date.getText(dt));
        
    };

};

module.exports = new rhhbyPage();