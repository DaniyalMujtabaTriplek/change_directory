const express = require("express");
const router = express.Router();


const HomeController = require('../controllers/home');

router.get("/hello" , HomeController.sayHello);
    
// router.post("/hello" , HomeController.getHello);

module.exports = router;
