const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.route('/authenticate')
    .post(usersController.authenticate)

router.route('/register')
    .post(usersController.register)

router.route('/delete')
    .delete(usersController.delete)

router.route('/getcurrent')
    .get(usersController.getCurrent)

module.exports = router