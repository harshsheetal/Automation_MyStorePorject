const loginPage= function()
{
  this.email= element(by.id('email'));
  this.password= element(by.id('passwd'));

  this.loginBtn= element(by.id('SubmitLogin'));

  this.clickOnLoginBtn= function(){

   this.loginBtn.click();

  }
}

module.exports= new loginPage();
