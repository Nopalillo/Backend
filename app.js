const express = require('express');
const app = express();

const ProductManager = require('./product-manager.js');
const productManager = new ProductManager('./products.json');

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
  const limit = req.query.limit;
  const products = productManager.getAllProducts(limit);
  res.json(products);
});

// Endpoint para obtener un producto por id
app.get('/products/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = productManager.getProductById(productId);
  res.json(product);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});