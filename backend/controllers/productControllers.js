const Product = require('../models/Product');

// create product
exports.createProducts = async (req, res)=>{
    
    try {
        const { productId, name, description, quantity } = req.body;
        let found = await Product.findOne({ productId });
        if (found) {
            return res.status(400).json({
                message:"Product already exist"
            })
        }
        const newProduct = new Product({
            productId,
            name,
            description,
            quantity
        });
        await newProduct.save();    
        res.status(201).json({message: "Product created successfully", product: newProduct
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}