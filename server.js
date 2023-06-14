const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // mongoose is a singleton
const dotenv = require('dotenv');

dotenv.config();
main();

async function main() {

    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Successfully connected to db');
        server();
    } catch (err) {
        console.error('Couldn\'t connect to db\n', err);
    }
}
function server() {
    var app = express();

    const port = process.env.PORT || 8080;
    const routes_path = path.join(__dirname, '/backend/routes/');

    // serve static files
    app.use(express.static(path.join(__dirname, '/frontend')));

    // routes
    const mainRoute = require(routes_path + 'main');
    app.use('/', mainRoute);

    console.log('App listens on port:', port);
    app.listen(port);
}
