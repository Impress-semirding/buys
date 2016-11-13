var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({          
  createTime : { type: Date },
  w_id: { type: String },
  indiana_id : { type: String },
  acount: { type: Number },
});


module.exports = mongoose.model('order',OrderSchema);
