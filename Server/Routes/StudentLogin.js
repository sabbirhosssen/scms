const express = require('express');
const { studentLogin, studentRegister, getstudentsid } = require('../controllers/StudentControlersLogin');


const router = express.Router();

router.post('/login', studentLogin);
router.post('/register', studentRegister);
router.get("/get/:id",getstudentsid)

module.exports = router;
