const mongoose = require('mongoose');

const { Schema } = mongoose;

const influencerSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'UserDetails',
  },
  about: {
    type: Schema.Types.String,
    required: true,
  },
  followerRange: {
    type: Schema.Types.String,
    required: true,
  },
  earnedPoints: {
    type: Schema.Types.Number,
    required: true,
  },
  contactNumber: {
    type: Schema.Types.Number,
    required: true,
  },
  emailAddress: {
    type: Schema.Types.String,
    required: true,
  },
});

module.exports = mongoose.model('InfluencerProfile', influencerSchema);
