const mongoose = require('mongoose');

const volcanoSchema = new mongoose.Schema({
  volcano_name: String,
  country: String,
  elevation: Number
});

module.exports = mongoose.model('Volcano', volcanoSchema);