const mongoose = require('mongoose');

const { ADMIN } = require('../constants/roles');

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
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
    default: ADMIN
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Admins', AdminSchema);
