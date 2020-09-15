const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  userName: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  firstName: {
    type: Schema.Types.String,
    required: true,
  },
  middleName: {
    type: Schema.Types.String,
    required: false,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
  },
  role: {
    type: Schema.Types.Array,
    required: true,
  },
});

module.exports = mongoose.model('UserDetails', userSchema);
