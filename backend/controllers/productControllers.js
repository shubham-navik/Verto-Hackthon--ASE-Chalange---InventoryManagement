const Product = require('../models/Product');

// create product
exports.createProducts = async (req, res)=>{
    
    try {
        const { productId, name, description, stockQuantity } = req.body;
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
            stockQuantity
        });
        await newProduct.save();    
        res.status(201).json({message: "Product created successfully", product: newProduct
        })
    } catch (error) {
        res.status(500).json({message: "error in creating product"});
    }
}

// delete product
exports.deleteProduct = async (req, res) => {
    
    try {
        const { productId } = req.params;
        let found = await Product.findOne({ productId });
        if (!found) {
            return res.status(400).json({
                message: "Product not found"
            })
        }
        await Product.findOneAndDelete({ productId });
        res.status(200).json({
            message:"Products deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({message: "error in deleting product"});
    }
}

//update product
exports.updateProduct = async (req, res) => {
    
    try {
        const { productId } = req.params;
        const { name, description, stockQuantity } = req.body;
        let found = await Product.findOne({ productId });
        if (!found) {
            return res.status(400).json({
                message: "Product not found"
            })
        }

        found.name = name || found.name;
        found.description = description || found.description;
        found.stockQuantity = stockQuantity || found.stockQuantity;

        await found.save();
        res.status(200).json({
            message:"Products updated successfully", product: found
        })
        
    } catch (error) {
        res.status(500).json({message: "error in updating product"});
    }
}

// get single product
exports.getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        let found = await Product.findOne({ productId });
        if (!found) {
            return res.status(400).json({
                message: "Product not found"
            })
        }
        res.status(200).json({
            message:"Product fetched successfully",
            product: found
        })  
        
    } catch (error) {
        res.status(500).json({message: "error in fetching product by id"});
    }
}

// get all Products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            message: "All Products fetched successfully",
            products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error in fetching all products",
            error: error.message
        });
    }
};


// get products with low stocks
exports.getLowStockProducts = async (req, res) => {
    try {
        console.log("low-stock endpoint hit");
        const productsWithLowStock = await Product.find({ $expr: { $lt: ["$stockQuantity", "$threshold"] } })

        res.status(200).json({
            message: "Products with low stock fetched successfully",
            products: productsWithLowStock
        });
    } catch (error) {
        res.status(500).json({
            message: "Error in fetching low stock products",
            error: error.message
        });
    }
};
