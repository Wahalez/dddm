const express = require('express');
const router = express.Router()

const views_dir = path.join(__dirname, '/frontend/views/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});