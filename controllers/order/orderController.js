const Customer = require('../../models/customer');

//when customer add new item in cart
exports.addOrder = async (req, res) => {
    const {
        userID, product,paymentMode,paymentStatus
    } = req.body;
    let purchasedOn=new Date();
    let orderID

    Customer.findOne({ 'userID': userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ 
                success: false,
                message: 'Something bad happend, please try again' 
            });
            return;
        }
        else if (customer == null) {
            return res.json({success:false,message:'no customer found. Check with login',code:404}) 
        } 
        else {
            product.array.forEach(element => {
                customer.cart = customer.cart.filter(cart=>cart.productID != element.productID)   //removing all the ordered add to cart items
            });
            orderID=customer.orderHistory.length+1;  //have to find the way of autoincrement
            customer.orderHistory.push({orderID,product,purchasedOn,paymentMode,paymentStatus})
            await customer.save()
            return res.json({
                success:true,
                message: "item ID:"+productID+" ordered successfully",
                object:customer
            })
        }
    });
  };

  exports.showOrder = async (req, res) => {

    Customer.findOne({ 'userID': req.params.userID },async function (err, customer) {
        if (err) {
            winston.log('error', 'User Creation failed : ', err.toString());
            res.send({ 
                success: false,
                message: 'Something bad happend, please try again'
            });
            return;
        }
        else {
            return res.json({
                success:true,
                message: "Order Details retrieved successfully",
                object:customer.orderHistory
            })
        }
    });
  };