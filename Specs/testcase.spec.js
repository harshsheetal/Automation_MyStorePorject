var homePage= require('../PageObjectModel/homePage.js');
var loginPage= require('../PageObjectModel/loginPage.js');
var baseTest= require('../Specs/baseTest.spec.js');
var myAccount= require('../PageObjectModel/myAccount.js');
var data= require('../Global_Data/data.json');
var chai = require('chai');
var expect = chai.expect;
"use strict"

describe('My_Store_Project', function(){

beforeEach(function(){
  console.log('before each is working');
  baseTest.commonFunction();
  this.timeout(300000);
});

it('Sign_in', function(done){

homePage.clickOnSignInBtn();
this.timeout(100000);
browser.getTitle().then(function(title){
console.log(title);
expect(title).to.equal(data.LoginPageTitle);
});

loginPage.email.sendKeys(data.emailAddress);
loginPage.password.sendKeys(data.Password);

loginPage.clickOnLoginBtn();

browser.sleep(10000);

done();
});

it ('Check_Order_History', function(done){
browser.get(data.MyAccountURL);
myAccount.clickOnOrderHistoryBtn();
this.timeout(100000);
browser.getTitle().then(function(title){
console.log(title);
expect(title).to.equal(data.OrderHistoryPageTitle);

});
done();
});
});
