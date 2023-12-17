const express = require('express')
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/', homeController.base);
router.use('/products', require('./product'));

module.exports = router;