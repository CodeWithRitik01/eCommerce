const Product = require('../models/product');


//function to get all the products
module.exports.base = async function(req, res){
    try{
      const product = await Product.find({});
      res.send(product);

    }catch(err){
        res.send(err.message);
    }
}


//function to create new product
module.exports.create = async function(req, res){
    try {
        const product = new Product({
            name: req.body.name,
            quantity: req.body.quantity
        });

        await product.save();
        res.send('New product added successfully.');
    } catch (err) {
        res.send(err.message);
    }
    
}


//function to delete product
module.exports.destroy = async function(req, res){
    try{
       const product = await Product.deleteOne({_id : req.params.id});
       res.send('deleted');
    }catch(err){
       res.send(err);
    }
}



//function to update the product's quantity
module.exports.update = async function(req, res){
    try{
       const ID = req.params.id;

       const exist = await Product.findById(ID);
       const updatedQuantity =  parseInt(req.query.quantity);

       

           const updatedProduct = await Product.findByIdAndUpdate(ID, {quantity: updatedQuantity}, { new: true });
         
           res.send({
            updatedProduct: updatedProduct,
            message: 'successfull'
           })
     
    }catch(err){
        res.send(err);
    }
}