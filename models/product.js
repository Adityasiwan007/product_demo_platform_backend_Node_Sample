const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = Schema({
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  RQ: {
    type: Schema.Types.Number,
    required: true,
  },
  rating: {
    type: Schema.Types.Number,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  }, // shirt,top
  price: {
    value: {
      type: Schema.Types.Number,
      required: true,
    },
    currencyIsoCode: {
      type: Schema.Types.String,
      required: true,
    }
  },
  images: [
    {
      url: {
        type: Schema.Types.String,
        required: true,
      }
    }
  ],
  reason: [{
    type: Schema.Types.String,
    required: true
  }]
});


module.exports = mongoose.model("Products", productSchema);