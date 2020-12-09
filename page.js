var url = "https://www.flipkart.com/";
var userId = "8339995611";
var userPassword = "09122020";
var username = $(".IiD88i._351hSN>[type='text']");
var password = $('.IiD88i._351hSN>[type="password"]')
var loginButton = $("._2KpZ6l._2HKlqd._3AWRsL");
var EC =  protractor.ExpectedConditions;
var searchBar = $("._3704LK");
var searchButton = $('.L0Z3Pu');
var brandSearchBar = $("._34uFYj");
var threegb = $("._2d0we9>[title='3 GB']");
var twogb = $("._2d0we9>[title='2 GB']");
var gionee = $("._2d0we9>[title='Gionee']")
var loader = $("._2XJHnB");
var searchResultGionee = $('._4rR01T');
var cancelAllFilters = $('._2id1nE>span');
var allFilters = element.all(by.xpath(".//*[@class = '_3ztiZO']"));

var page = function () {
    "use strict";
    
    this.logintoFlipkart = function(){

        //Open URL
        browser.get(url);
        //browser.sleep(10000);

        var isClickable = EC.elementToBeClickable(loginButton);
        browser.wait(isClickable, 60000);

        //provide login
        username.sendKeys(userId);

        //Provide password
        password.click().then(function(){
            console.log("Clicked on the password section");
            password.sendKeys(userPassword);
        });
        
        //Click on the Login button
        loginButton.click().then(function(){
            console.log("Clicked on the login button");
        });
        
        browser.sleep(5000);
        element(by.xpath("(.//*[@class='exehdJ'])[1]")).getText().then(function(name){
            expect(name).toEqual("Bharat Bhusan");
        });

    };

    this.searchProduct = function(text){
        
        searchBar.click().then(function(){
            console.log("Clicked on the Search Bar");
        });

        searchBar.sendKeys(text);

        browser.sleep(5000);

        searchButton.click().then(function(){
            console.log("Searching product...."+text);
        });
        
        browser.wait(EC.invisibilityOf(loader), 10000);

        console.log("Search is successful");

    };

    this.selectFilter = function(){
        browser.sleep(5000);
        brandSearchBar.click().then(function(){
            console.log("Clicked on the branch search bar");
        });

        brandSearchBar.sendKeys("Gionee");

        gionee.click().then(function(){
            browser.wait(EC.invisibilityOf(loader), 10000);
        });

        twogb.click().then(function(){
            browser.wait(EC.invisibilityOf(loader), 10000);
        });

        threegb.click().then(function(){
            browser.wait(EC.invisibilityOf(loader), 10000);
        });

        //verify Filters 
        allFilters.getText().then(function(text){
            expect(text[0]).toContain("Gionee");
            expect(text[1]).toContain("2 GB");
            expect(text[2]).toContain("3 GB");
        })

    }

    this.validateFirstPhone = function(){
        searchResultGionee.getText().then(function(result){
            expect(result).toContain("Gionee");
        });

        element(by.xpath("(//ul[@class='_1xgFaf'])[1]/li[1]")).getText().then(function(result){
            expect(result).toContain("2 GB");
        });
    }

    this.cancelAllFiltersFromPage = function(){
        browser.sleep(3000);
        cancelAllFilters.click().then(function(){
            browser.wait(EC.invisibilityOf(loader), 10000);
        });

        allFilters.then(function(items) {
            expect(items.length).toBe(0);
        });
    }

};
module.exports = new page();