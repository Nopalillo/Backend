const fs = require('fs');

class ProductManager {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getAllProducts(limit) {
    const rawData = fs.readFileSync(this.fileName);
    const products = JSON.parse(rawData);

    if (limit) {
      return products.slice(0, limit);
    } else {
      return products;
    }
  }

  getProductById(id) {
    const rawData = fs.readFileSync(this.fileName);
    const products = JSON.parse(rawData);
  }}