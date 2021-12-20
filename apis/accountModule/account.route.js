const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/auth');
const {
  registrationSchema,
  changePasswordSchema,
} = require('../../utils/validation-schemas/account');
const { account } = require('../../helpers/controller.repository');

router.post('/', registrationSchema, account.createAccount);
router.post('/login', account.loginUser);
router.get('/', verifyToken, account.getAllUsers);
router.post('/update/password', verifyToken, changePasswordSchema, account.changePassword);
router.get('/logout', account.logoutUser);

module.exports = router;
