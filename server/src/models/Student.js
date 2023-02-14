const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  _studentId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },

  applicants: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date
  }
});

module.exports = mongoose.model('Students', StudentSchema);
