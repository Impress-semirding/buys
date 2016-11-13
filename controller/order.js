const Promise = require("bluebird");
var Order = require("./../models/order.js");

/**
 * 插入
 */
 //createTime : { type: Date },
// w_id: { type: String },
// indiana_id : { type: String },
// acount: { type: Number },
function confirm(feed) {
 
  var order = new Order(feed);
  return new Promise((resolve, reject) => {
    order.save(function (err, res) {
      if (err) {
        reject(err);
      }
      else {
        resolve(res);
      }
    });
  })
}

function myOrder(userId) {
  return new Promise((resolve, reject) => {
    const query = Order.find({ w_id: userId });
    query.exec((err, doc) => {
      if (err) {
        reject('haha1');
      }
      else {
        resolve(doc);
      }
    })
  });
}


module.exports = {
  confirm,
  myOrder
}
