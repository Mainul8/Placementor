const mongoose = require('mongoose');

const { INSTITUTE } = require('../constants/roles');

const InstituteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: INSTITUTE
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Institutes', InstituteSchema);
