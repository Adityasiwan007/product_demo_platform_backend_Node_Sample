const Product = require('../../models/product');

//to display all the products
exports.getAllProducts = async (req, res) => {

    Product.find({},async function (err, product) {
        if (err) {
            winston.log('error', 'show product failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (product == null) {
            return res.json({success:false,message:'no product found. Check with database',code:404}) 
        } 
        else {
            return res.json({
                success:true,
                message: "All product displayed successfully",
                object:product
            })
        }
    });
  };

  exports.getProdctByid = async (req, res) => {
    let id = req.params['id']
    Product.findOne({id:id},async function (err, product) {
        if (err) {
            winston.log('error', 'show product failed : ', err.toString());
            res.send({ success: false, message: 'Something bad happend, please try again' });
            return;
        }
        else if (product == null) {
            return res.json({success:false,message:'no product found. Check with database',code:404}) 
        } 
        else {
            return res.json({
                success:true,
                message: "Product with id: "+product.id+" displayed successfully",
                object:product
            })
        }
    });
  };