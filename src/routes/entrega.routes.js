const {Router} = require('express');
const router = Router();
const controllers = require('../controllers')

router.post('/create', controllers.entregaController.create)

module.exports = router;