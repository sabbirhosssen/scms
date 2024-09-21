const express = require('express');
const { getstudents, getstudentsid, createStudent } = require('../controllers/StudentControllers');


//Routes Object
   
const router = express.Router();

//Get all object ditails 
router.get("/getall", getstudents);
//Get student By id
router.get("/get/:id", getstudentsid);
//Get student post
router.post("/create", createStudent);


module.exports = router;