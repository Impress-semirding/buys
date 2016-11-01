var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  existingTimes : {type: Number},
  status : {type: Number},
  goods : {
    desc : {type: String},
    priceBase : {type: Number},
    gpic : {type: Array},
    totalTimes : {type: Number},
    tag : {type: String},
    gname : {type: String},
    priceType : {type: Number},
    addAttributes : {type: Number},
    property : {type: Number},
    priceUnit : {type: Number},
    regularBuyMax : {type: Number},
    showVideos : {type: Array},
    price : {type: Number},
    buyUnit : {type: Number},
    gid : {type: Number},
    buyable : {type: Boolean},
    flagList :{type: Array},
    brand : {type: Number},
    wishSetable : {type: Number},
    typeId : {type: Number},
    goodsType : {type: Number}
  },
  limitTime : {type: Number},
  isLimit : {type: Number},
  period : {type: Number},
  totalPeriod : {type: Number},
  isJoined : {type: Number},
  lastPeriod : {type: Number}
});

// ProductSchema.methods.speak = function () {
//   var greeting = this.username
//     ? Meow name is  + this.username
//     : "I don't have a name"
//   console.log(greeting);
// }

module.exports = mongoose.model('ebuy',ProductSchema);
