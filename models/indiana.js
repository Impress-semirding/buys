var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var IndianaSchema = new Schema({
  totalPeopleNum: { type: Number},
  presentPeopleNum: { type : Number},
  shortPeopleNum: { type: Number},
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  startSec: { type: Number, default: 0},
  endSec: { type: Number, default: 0},
  startStr: { type: String, default: ''},
  endStr: { type: String, default: ''},
  isActive: {type: Boolean},
  goodsId: {
    type: mongoose.Schema.ObjectId,
    ref: 'product'
  },
  limit : {type: Number},
});


module.exports = mongoose.model('indiana',IndianaSchema);
