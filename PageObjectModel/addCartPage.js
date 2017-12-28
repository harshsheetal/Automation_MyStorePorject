const addCartPage= function()
{
  this.selectQuantity= element(by.xpath("//input[@id='quantity_wanted']"));
  this.selectSize= element(by.xpath("//select[@id='group_1']"));
  this.addCartBtn= element(by.xpath("//button[@name='Submit']"));

  this.clickOnAddCartBtn=function()
  {
    this.addCartBtn.click();
  }
}
module.exports= new addCartPage();
