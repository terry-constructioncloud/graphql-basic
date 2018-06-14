const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  }
});

module.exports = mongoose.model('Product', ProductSchema);
