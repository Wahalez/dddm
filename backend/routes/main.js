const express = require('express');
const path = require('path');

const router = express.Router()

const views_dir = path.join(__dirname, '../../frontend/view/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});
router.get("/register",(req,res)=>{
    res.sendFile(views_dir+ "Register.html");
});
router.get("/", (req, res) => {
    res.sendFile(views_dir + "login.html");
});
router.get("/register",(req,res)=>{
    res.sendFile(views_dir+ "games.html");
});
router.get("/", (req, res) => {
    res.sendFile(views_dir + "console.html");
});
router.get("/register",(req,res)=>{
    res.sendFile(views_dir+ "cart.html");
});
module.exports = router;