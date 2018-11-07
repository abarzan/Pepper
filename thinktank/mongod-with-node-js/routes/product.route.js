// import express from express;
const express = require('express');

const router = express.Router();
const prodController = require('../controllers/product.controller');

router.get('/test', prodController.test);
router.post('/create', prodController.product_create);
router.get('/:id', prodController.product_details);
router.put('/:id/update', prodController.product_update);
router.delete('/:id/delete', prodController.product_delete);

module.exports = router;