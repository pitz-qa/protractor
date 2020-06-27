
describe('BasicCalculator', function() {
    var obj = require("./Locators_Object.js");
  
    it('POM', function() {
      // browser.waitForAngularEnabled(false);
      browser.get('https://juliemr.github.io/protractor-demo/');
      browser.driver.manage().window().maximize();
  
      obj.firstinput.sendKeys("3");
      obj.secondinput.sendKeys("2");
      obj.gobutton.click();

      expect(obj.result.getText()).toBe("5"); // *****
      obj.repeatresult.getText().then(function(text) // *** ***
      {
        expect(text).toBe("5")
      });
    });
  });