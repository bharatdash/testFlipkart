var page = require('./page.js');

describe("Verify product from flipkart",function(){
	browser.ignoreSynchronization = true;

	it("login to the application",function(){
        page.logintoFlipkart();
    });

    it("Search for Mobiles",function(){
        page.searchProduct('mobile');
    });

    it("Select brand and RAM",function(){
        page.selectFilter();
    });

    it("validate filtered result",function(){
        page.validateFirstPhone();
    });

    it("Clear the filter",function(){
        page.cancelAllFiltersFromPage();
    });
});