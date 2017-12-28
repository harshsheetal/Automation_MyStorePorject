const womenDressSelectionPage= function()
{
  this.womenTab= element(by.xpath("//a[@title='Women']"));

  this.clickOnWomenTab= function()
  {
    this.womenTab.click();
  }

  this.womenDressOne= element(by.xpath("//img[@src='http://automationpractice.com/img/p/1/1-home_default.jpg']"));
  this.clickOnWomenDressOne= function()
  {
    this.womenDressOne.click();
  }

  this.womenDressTwo= element(by.xpath("//img[@src='http://automationpractice.com/img/p/7/7-home_default.jpg']"));
  this.clickOnWomenDressTwo= function(toRight, toBottom)
  {
    browser.actions()
      .mouseMove(this.womenDressTwo, {x: 10, y: 10})
      .click()
      .perform();
  }


}

module.exports= new womenDressSelectionPage();
