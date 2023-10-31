const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
app.get('/api', ProductController.index);
app.get('/api/products', ProductController.getAllProducts);
app.get('/api/products/:id', ProductController.getProduct);
app.post('/api/products', ProductController.createProduct);

//route to update a product
app.patch('/api/products/:id', ProductController.updateProduct);

//route to delete a product
app.delete('/api/products/:id', ProductController.deleteProduct);

}