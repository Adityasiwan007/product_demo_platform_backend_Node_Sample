const mongoose = require('mongoose');

const { Schema } = mongoose;
const adminSchema = Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'UserDetails',
  },
  designation: {
    type: Schema.Types.String,
    required: true,
  },
});

module.exports = mongoose.model('AdminProfile', adminSchema);
