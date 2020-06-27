function locators1(){
    this.firstinput= element(by.model("first"));
    this.secondinput=element(by.model("second"));
    this.gobutton=element(by.id("gobutton"));
    this.result=element(by.css("h2[class='ng-binding']"));
    this.repeatresult=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
}
module.exports = new locators1();