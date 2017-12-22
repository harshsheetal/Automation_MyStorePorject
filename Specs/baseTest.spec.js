var data= require('../Global_Data/data.json')
var baseTest = function()
{
   this.commonFunction = function(){

    browser.get(data.baseURL);
  //  done();
};

}
module.exports= new baseTest();
