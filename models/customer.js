const mongoose = require('mongoose');

const { Schema } = mongoose;
const customerSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'UserDetails',
  },
  addressLine1: {
    type: Schema.Types.String,
    required: true,
  },
  addressLine2: {
    type: Schema.Types.String,
    required: false,
  },
  city: {
    type: Schema.Types.String,
    required: false,
  },
  state: {
    type: Schema.Types.String,
    required: false,
  },
  zip: {
    type: Schema.Types.String,
    required: false,
  },
  contactNumber: {
    type: Schema.Types.Number,
    required: true,
  },
  emailAddress: {
    type: Schema.Types.String,
    required: true,
  },


  //Aditya Code
  cart:[{
    productID:{
      type: Schema.Types.String,
      required: true,
    },
    quantity:{
      type: Schema.Types.Number,
      required: true,
    },
    influencerID:{
      type: Schema.Types.String,
      required: true,
    }
  }],
  
  orderHistory:[{
    orderID:String,// will be used as pos transaction id as well
    product:[{
      productID:{
        type: Schema.Types.String,
        required: true,
      },
      quantity:{
        type: Schema.Types.Number,
        required: true,
      },
      influencerID:{
        type: Schema.Types.String,
        required: true,
      }
    }], //to bechange
    purchasedOn:Schema.Types.Date,
    paymentMode:Schema.Types.String,
    paymentStatus:Schema.Types.String
  }],

});

module.exports = mongoose.model('CustomerProfile', customerSchema);
