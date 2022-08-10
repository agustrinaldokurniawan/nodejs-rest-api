const router = require('express').Router();

const UserController = require('../../controller/UserController');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/signup', UserController.signup);
router.put('/:id', UserController.updateAccount);
router.delete('/:id', UserController.deleteAccount);

module.exports = router;
