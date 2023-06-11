const express = require('express');
const path = require('path');

var app = express();

const port = process.env.PORT || 8080;
const routes_path = path.join(__dirname, "/backend/routes/");

// serve static files
app.use(express.static(path.join(__dirname, "/frontend")));


// routes
const mainRoute = require(routes_path + "main");
app.use("/", mainRoute);

app.listen(port);
