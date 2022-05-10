const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
