const Promise = require("bluebird");
var User = require("./../models/indiana.js");

/**
 * 插入
 */
function insert() {
 
  var user = new User({
    "existingTimes": 15,
    "status": 1,
    "goods": {
      "desc": "iPhone7 如7而至！颜色随机。",
      "priceBase": 0,
      "gpic": [
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
    },
    "limitTime": 0,
    "isLimit": 0,
    "period": 310271421,
    "totalPeriod": 10881,
    "isJoined": 0,
    "lastPeriod": 1
    });

  // user.speak();

  user.save(function (err, res) {

    if (err) {
      //console.log("Error:" + err);
    }
    else {
      //console.log("Res:" + res);
    }

  });
}

function getList() {
  return new Promise((resolve, reject) => {
    const query = User.find({});
    query.exec((err, doc) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(doc);
      }
    })
  });

}

function getDetail(queryId, callback) {
  const query = User.findOne({_id: queryId});
  query.exec(function(err, doc) {
    if (err) {
      return false;
    }
    else {
      callback && callback(doc);
    }
  })
}

module.exports = {
  insert,
  getList,
  getDetail
}
