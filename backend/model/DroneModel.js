let mongoose = require('mongoose');
const drone = require('../data/drone');
let Schema = mongoose.Schema;

let droneModelSchema = new Schema({
  id:Number,
  name:String,
  status: String,
  position: Array,
  idUser: Number,
  package: Array,
},{
  collection: 'drones'
})
module.exports = mongoose.model('drone', droneModelSchema);


// {
//   id: id của drone  => là 1 số
//   name: tên của drone => là string
//   status: trạng thái của drone => free, đang giao
//   position: vị trí của drone => là 1 array
//   package: bưu kiện cần gửi => 
// }