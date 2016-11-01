var mongoose = require('./../config/mongo'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
  name : { type: String },                    //用户账号
  w_id: {type: String},                        //密码
  address :{type: Array},                     //年龄
  logindate : { type: Date},                //最近登录时间
  remaining: {type: Number},
  oder: {type: Array},
  baskOrder: {type: Array}	//晒单

});

UserSchema.methods.speak = function () {
  var greeting = this.username
    ? "Meow name is " + this.username
    : "I don't have a name"
  console.log(greeting);
}

module.exports = mongoose.model('Users',UserSchema);
