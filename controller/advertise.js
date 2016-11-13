const Promise = require("bluebird");
var Advertise = require("./../models/advertise.js");

/**
 * 插入
 */

function insert() {
 
  var advertise = new Advertise({
    skema: 'action/list',
    image: 'http://img2.imgtn.bdimg.com/it/u=936633969,931785785&fm=21&gp=0.jpg',
    isActive: true,
  });
  advertise.save(function (err, res) {

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
    const query = Advertise.find({isActive: true});
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

module.exports = {
  insert,
  getList,
}
