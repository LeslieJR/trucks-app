const {Router} = require('express');
const router = Router();
const controllers = require('../controllers')

router.post('/create', controllers.camionController.create)

module.exports = router;