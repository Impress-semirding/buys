const Promise = require("bluebird");
var User = require("./../models/indiana.js");

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
  const date2 = new Date('Sat Nov 14 2016 20:00:28 GMT+0800 (CST)');
  // const startTime = inittime(date1);
  // const endTime = inittime(date2);
 
  var user = new User({
    "totalPeopleNum": 1500,
    "presentPeopleNum": 0,
    "shortPeopleNum": 1500,
    "startTime": new Date(date1),
    "endTime": new Date(date2),
    "isActive": true,
    "goodsId": "58286d690af1e82cd4f8142c"
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

var formatDateTime = function (date) {  
  var y = date.getFullYear();  
  var m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  var d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  var h = date.getHours();  
  var minute = date.getMinutes();  
  minute = minute < 10 ? ('0' + minute) : minute;  
  return y + '-' + m + '-' + d+' '+h+':'+minute;  
};    

function getList() {
  return new Promise((resolve, reject) => {
    const query = User.find({}).populate('goodsId');
    query.exec((err, doc) => {
      if (err) {
        reject(err);
      }
      else {
        for(var index in doc) {
          const nowDate = new Date().getTime();
          doc[index].startSec = doc[index].startTime.getTime() - nowDate;
          doc[index].endSec = doc[index].endTime.getTime() - nowDate;
          doc[index].startStr = formatDateTime(doc[index].endTime);
          doc[index].endStr = formatDateTime(doc[index].startTime);
        }
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
