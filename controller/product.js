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

function insert() {
  const date1 = new Date('Sat Nov 12 2016 18:53:28 GMT+0800 (CST)');
  const date2 = new Date('Sat Nov 12 2016 20:00:28 GMT+0800 (CST)');
  // const startTime = inittime(date1);
  // const endTime = inittime(date2);
 
  var product = new Product({
    "desc": "iPhone7 如7而至！颜色随机。",
    "priceBase": 0,
    "gpic": [
        "https://onegoods.nosdn.127.net/goods/2491/d793d89e0766115f58c0d979a488e64a.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/c150e93a173c9f4f00d624b83e3d3275.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/5a6b9071b4eefb2ce3df38625a5cac4f.jpg"
    ],
    "detailImages": [ 
        "https://onegoods.nosdn.127.net/goods/2491/d793d89e0766115f58c0d979a488e64a.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/c150e93a173c9f4f00d624b83e3d3275.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/5a6b9071b4eefb2ce3df38625a5cac4f.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/d793d89e0766115f58c0d979a488e64a.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/c150e93a173c9f4f00d624b83e3d3275.jpg",
        "https://onegoods.nosdn.127.net/goods/2491/5a6b9071b4eefb2ce3df38625a5cac4f.jpg"
    ],
    "totalTimes": 6088,
    "tag": "",
    "gname": "iPhone7 128GB",
    "priceType": 1,
    "addAttributes": "00",
    "property": "0",
    "priceUnit": 1,
    "regularBuyMax": 1,
    "showVideos": [],
    "price": 6088,
    "buyUnit": 1,
    "gid": 2491,
    "buyable": true,
    "flagList": [],
    "brand": 1,
    "wishSetable": 0,
    "typeId": 1,
    "goodsType": 2
  });

  // user.speak();

  product.save(function (err, res) {

    if (err) {
      //console.log("Error:" + err);
    }
    else {
      //console.log("Res:" + res);
    }

  });
}



module.exports = {
  insert
}
