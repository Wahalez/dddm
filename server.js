const express = require('express');
const path = require('path');

var app = express();

const port = process.env.PORT || 8080;

const views_dir = path.join(__dirname, '/src/views/');

app.get('/', (req, res) => {
    res.sendFile(path.join(views_dir, "index.html"));
});

app.listen(port);
