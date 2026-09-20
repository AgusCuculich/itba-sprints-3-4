const express = require('express');
const router = express.Router();
const products = require('../data/products');

// GET / - Listado completo de productos
router.get('/', async (req, res, next) => {
  try {
    // Simulando asincronismo para cumplir con la regla de usar promesas y async/await
    const getProducts = () => Promise.resolve(products);
    const data = await getProducts();

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    next(error);
  }
});

// GET /:id - Producto por ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Simulando asincronismo para cumplir con la regla de usar promesas y async/await
    const getProductById = (productId) => {
      const product = products.find(p => p.id === productId);
      return Promise.resolve(product);
    };

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Producto no encontrado"
      });
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
