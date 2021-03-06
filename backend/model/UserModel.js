let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userModelSchema = new Schema({
  id:Number,
  name:String,
  avatar: String,
  gender: String,
  phone_number: String,
  email: String,
  password: String,
  position: Array,
  idDrone: Number,
  package: Array,
  distance: String,
},{
  collection: 'users'
})
module.exports = mongoose.model('user', userModelSchema);
