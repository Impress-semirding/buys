var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var DetailImagesSchema = new Schema({
  skema: {type: String},
  image: {type: String},
  isActive: {type: Boolean},
  createTime: {type: Date, default: Date.now}
});


module.exports = mongoose.model('DetailImage',DetailImagesSchema);
