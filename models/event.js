const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = Schema({
  eventId: {
    type: Schema.Types.ObjectId,
  },
  influencerId: {
    type: Schema.Types.String,
    required: true,
  },
  from: {
    type: Schema.Types.Date,
    required: true,
  },
  to: {
    type: Schema.Types.Date,
    required: true,
  },
  streamURL: {
    type: Schema.Types.String,
    required: true,
  },
  platform: {
    type: Schema.Types.String,
    required: false,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  participants: {
    type: Schema.Types.Array,
    required: false,
  },
});

module.exports = mongoose.model('Event', eventSchema);
