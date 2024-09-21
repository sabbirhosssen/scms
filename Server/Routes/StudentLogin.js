const express = require('express');
const { studentLogin, studentRegister } = require('../controllers/StudentControlersLogin');


const router = express.Router();

router.post('/login', studentLogin);
router.post('/register', studentRegister);

module.exports = router;
