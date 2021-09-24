const {Router} = require('express');
const router = Router();
const controllers = require('../controllers')

router.post('/create', controllers.camioneroController.create)

module.exports = router;