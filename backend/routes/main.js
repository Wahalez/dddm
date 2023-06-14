const express = require('express');
const path = require('path');

const router = express.Router()

const views_dir = path.join(__dirname, '../../frontend/view/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});


module.exports = router;