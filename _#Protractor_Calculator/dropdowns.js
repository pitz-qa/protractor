describe('dropdowns',function() 
{  
    function Calc(a,b,c)
    {
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element.all(by.tagName("option")).each(function(item)
        {
        item.getAttribute("value").then(function(values)
            {
            if(values==c)
            {
                item.click();
            }
         })
    })
    element(by.id("gobutton")).click();
}
    
    it('Locators',function() 
    {
    /*browser.waitForAngularEnabled(false);
    browser.get("http://google.com");//non angular apps*/
    browser.get('http://juliemr.github.io/protractor-demo/');
    
    Calc(10,2,"ADDITION");
    Calc(10,2,"DIVISION");
    Calc(10,2,"MODULO");
    Calc(10,2,"MULTIPLICATION");
    Calc(10,2,"SUBTRACTION");
    element.all(by.repeater("result in memory")).each(function(item)
        {
        item.element(by.css("td:nth-child(3)")).getText().then(function(text)
            {
            console.log(text);
            }) 
        })
    })
})