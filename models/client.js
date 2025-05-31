const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  origin: String,
  destination: String,
  serviceDate: Date,
  serviceTime: String,
  paymentStatus: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Client', clientSchema);
