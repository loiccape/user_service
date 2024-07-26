const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', auth, userController.getUser);
router.put('/:id', auth, userController.updateUser);
router.put('/admin/:id', userController.giveAdmin);
router.delete('/:id', auth, userController.deleteUser);
router.get('/', auth, userController.getAllUsers); // Accessible uniquement pour les administrateurs

module.exports = router;
