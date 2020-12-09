exports.config = {
    directConnect:true,

    framework: 'jasmine',
    specs: ['spec.js'],
    jasmineNodeOpts: {defaultTimeoutInterval: 600000},
    onPrepare: function(){
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.manage().window().maximize();

        global.isAngularSite = function (flag) {
            browser.ignoreSynchronization = !flag;
        };
    } 
};