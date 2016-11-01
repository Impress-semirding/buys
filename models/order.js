var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({          
  createTime : { type: Date },
  w_id: { type: String },
  product_id: { type: String }

});


module.exports = mongoose.model('order',OrderSchema);
