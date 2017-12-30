const homePage= function()
{

       this.signInBtn= element(by.xpath("//a[@class='login']"));

       this.clickOnSignInBtn= function()
       {
         this.signInBtn.click();
       }

}

module.exports = new homePage();
// hi learning