const express = require('express');
const path = require('path');
const db_funcs = require('../db/db_funcs');

const router = express.Router()

const views_dir = path.join(__dirname, '../../frontend/view/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});

router.get("/test", (req, res) => {
    db_funcs.getAllUsers().then(query => {
        console.log(query);
        res.send(query);
    });
});


module.exports = router;
