const Promise = require("bluebird");
var Product = require("./../models/product.js");

/**
 * 插入
 */

 function inittime(date) {
  const localTime = date.getTime();
  const localOffset=date.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数
  const utc = localTime + localOffset; //utc即GMT时间
  const offset = 16; //以北京时间为例，东8区
  const beijingTime = utc + (3600000*offset);
  return beijingTime;
 }

function insert(item) {
  return new Promise((resolve, reject) => {
    const date1 = new Date('Sat Nov 12 2016 18:53:28 GMT+0800 (CST)');
    const date2 = new Date('Sat Nov 12 2016 20:00:28 GMT+0800 (CST)');
    // const startTime = inittime(date1);
    // const endTime = inittime(date2);
    var product = new Product(item);
    product.save(function (err, res) {
      if (err) {
        console.log(err)
        //console.log("Error:" + err);
        resolve(1)
      }
      else {
        console.log(11111)
        //console.log("Res:" + res);
        reject(0)
      }
    });
  })
}



module.exports = {
  insert
}
