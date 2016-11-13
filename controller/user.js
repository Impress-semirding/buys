const Promise = require("bluebird");
var User = require("./../models/users.js");

/**
 * 插入
 */
function insert(user) {
 
  var user = new User({
    name: user.username,
    w_id: user.userId
  });
  return new Promise((resolve, reject) => {
    user.save(function (err, res) {
      if (err) {
        reject(err);
      }
      else {
        resolve(res);
      }
    });
  })
}

function hasUser(userId) {
  return new Promise((resolve, reject) => {
    const query = User.find({ w_id: userId });
    query.exec((err, doc) => {
      if (err) {
        console.log(err);
        reject('haha1');
      }
      else {
        console.log(doc);
        resolve(doc);
      }
    })
  });
}

function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    const query = User.find({ w_id: userId });
    query.exec((err, doc) => {
      if (err) {
        console.log(err);
        reject('haha1');
      }
      else {
        console.log(doc);
        resolve(doc);
      }
    })
  });
}

function addAddress(userId, addAddress) {
  return new Promise((resolve, reject) => {
    const userInfo = User.findOne({ w_id: userId});
    userInfo.exec((err, doc) => {
      const newAddress = doc.address.concat(addAddress);
      const query = User.update({ w_id: userId, address: newAddress });
      query.exec((err, doc) => {
        if (err) {
          console.log(err);
          reject('haha1');
        }
        else {
          console.log(doc);
          resolve(doc);
        }
      })
    })
  });
}



module.exports = {
  insert,
  hasUser,
  getUserInfo,
  addAddress
}
