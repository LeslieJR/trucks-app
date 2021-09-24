const {Router} = require('express');
const router = Router();
const controllers = require('../controllers')

router.post('/create', controllers.paqueteController.create)
router.get('/all/:camioneroId', controllers.paqueteController.all)

module.exports = router;