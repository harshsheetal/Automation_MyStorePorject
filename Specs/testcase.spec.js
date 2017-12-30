var homePage= require('../PageObjectModel/homePage.js');
var loginPage= require('../PageObjectModel/loginPage.js');
var baseTest= require('../Specs/baseTest.spec.js');
var myAccount= require('../PageObjectModel/myAccount.js');
var data= require('../Global_Data/data.json');
var womenDressSelectionPage= require('../PageObjectModel/womenDressSelectionPage.js');
var addCartPage= require('../PageObjectModel/addCartPage.js');
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

it ('WomenDressTwo', function(done){
womenDressSelectionPage.clickOnWomenTab();
womenDressSelectionPage.clickOnWomenDressTwo(10,10);
this.timeout(100000);
addCartPage.selectQuantity.clear();
addCartPage.selectQuantity.sendKeys('2');
//element(by.xpath("//select[@id='group_1']")).clear();
addCartPage.selectSize.sendKeys('M');
addCartPage.clickOnAddCartBtn();
browser.sleep(3000);
browser.executeScript('window.scrollTo(0,300);').then(function () {
element(by.xpath("//span[contains(.,'Proceed to checkout')]")).click();
})
element(by.xpath(".//*[@id='center_column']/p[2]/a[1]/span")).click();
element(by.xpath("//button[@class='button btn btn-default button-medium']")).click();
element(by.id("cgv")).click();
element(by.xpath("//button[@class='button btn btn-default standard-checkout button-medium']")).click();
element(by.xpath(".//*[@id='HOOK_PAYMENT']/div[1]/div/p/a/span")).click();
element(by.xpath("//button[@class='button btn btn-default button-medium']")).click();
//browser.switchTo().frame(element(by.id("fancybox-frame1514361105106")));
//browser.getAllWindowHandles().then(function (handles) {
//browser.switchTo().frame(1);
//browser.switchTo().frame('fancybox-frame1514361105106');
//console.log("switched");
//browser.driver.switchTo().frame(element(by.id("fancybox-frame1514361105106")));
//element(by.xpath("//input[@id='quantity_wanted']")).sendKeys('2');
//});
//element(by.xpath("//input[@id='quantity_wanted']")).sendKeys('2');
done();
});
it('Check_Order_History', function(done){
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
