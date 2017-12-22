const myAccount= function()
{
   this.orderHistoryBtn= element(by.xpath(".//*[@id='center_column']/div/div[1]/ul/li[1]/a/span"));

   this.clickOnOrderHistoryBtn= function()
   {
     this.orderHistoryBtn.click();
   }
}

module.exports= new myAccount();
