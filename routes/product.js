const express = require('express')
const router = express.Router();

const homeController = require('../controllers/homeController');

router.post('/create', homeController.create);
router.delete('/:id', homeController.destroy);
router.get('/:id/update_quantity/', homeController.update);
module.exports = router;