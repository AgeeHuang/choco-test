const mongoose = require('mongoose');

const DramaSchema = new mongoose.Schema({
  year: Number,
  name: String,
  total_views: Number,
  total_eps: Number,
  vertical_poster: String,
},{
  collection: 'drama',
});

module.exports = mongoose.model('drama', DramaSchema);
