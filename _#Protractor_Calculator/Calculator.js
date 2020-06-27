
describe('Calculator Basics', function() {

  function Add(a,b)
{
element(by.model("first")).sendKeys(a);
element(by.model("second")).sendKeys(b);
element(by.id("gobutton")).click();

}

  it('Calculators Entry', function() {
    // browser.waitForAngularEnabled(false);
    browser.get('https://juliemr.github.io/protractor-demo/');
    browser.driver.manage().window().maximize();

    Add(2,3);
    expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5") // *****
    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) // *** ***
    {
      expect(text).toBe("5")
    })
    Add(1,2);
    Add(6,4)
    element.all(by.repeater("result in memory")).count().then(function(text1)
    {
      console.log("Table count is: "+text1)
    })
    element.all(by.repeater("result in memory")).each(function(itmes)
    {
      itmes.element(by.css("td:nth-child(3)")).getText().then(function(text3)
      {
        console.log("table result values are: "+text3)
      })
    })
  });
});