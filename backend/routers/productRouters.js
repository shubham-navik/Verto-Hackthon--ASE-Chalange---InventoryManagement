const router = require("express").Router();

const { createProducts, deleteProduct, updateProduct, getProductById, getLowStockProducts, getAllProducts } = require('../controllers/productControllers');


router.post('/create', createProducts);
router.delete('/delete/:productId', deleteProduct);
router.put('/update/:productId', updateProduct);
router.get('/lowstock', getLowStockProducts);
router.get('/products', getAllProducts);
router.get('/:productId', getProductById);//this is dynamic write it at last

module.exports = router;