const Customer = require('../../models/customer');

//when customer add new item in cart
exports.addToCart = async (req, res) => {
    const {
        userID, productID, quantity, influencerID
    } = req.body;

    Customer.findOne({ 'userID': userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'no customer found. Check with login',code:404}) 
        } 
        else {
            customer.cart.push({productID,quantity,influencerID})
            await customer.save()
            return res.json({
                success:true,
                message: "item ID:"+productID+" added successfully",
                object:customer.cart
            })
        }
    });
  };

  //when customer removes the item from the cart
  exports.remomveItem = async (req, res) => {
    const {
        userID, productID
    } = req.body;

    Customer.findOne({ 'userID': userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'no customer found. Check with login',code:404}) 
        } 
        else {
            customer.cart = customer.cart.filter(cart=>cart.productID != productID)
            await customer.save()
            return res.json({
                success:true,
                message: "item ID:"+productID+" removed successfully",
                object:customer.cart    
            })
        }
    });
  };

  //when customer click on cart to see the items in the cart
  exports.showCart = async (req, res) => {

    Customer.findOne({ 'userID': req.params.userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false,
                message: 'Something bad happend, please try again'
            });
            return;
        }
        else {
            return res.json({
                success:true,
                message: "Cart Details retrieved successfully",
                object:customer.cart
            })
        }
    });
  };

  //if customer changes the quantity of item in cart - +
  exports.updateItem = async (req, res) => {
    const {
        userID, productID, quantity, influencerID
    } = req.body;

    Customer.findOne({ 'userID': userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'no customer found. Check with login',code:404}) 
        } 
        else {
              let cart_arry= customer.cart,i

              for(i=0;i<cart_arry.length;i++)
              {
                  if(cart_arry[i].productID==productID)
                  {
                      cart_arry[i].quantity=quantity
                  }
              }

            await customer.save()
            return res.json({
                success:true,
                message: "item ID:"+productID+" updated successfully",
                object:customer.cart    
            })
        }
    });
  };

