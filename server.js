const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // mongoose is a singleton
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

var session;
dotenv.config();
main();

async function main() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Successfully connected to db!');
    } catch (err) {
        console.error('Couldn\'t connect to db\n', err);
        return;
    }
    server();
}
function server() {
    console.log('Initializing app...');
    const app = express();
    const port = process.env.PORT || 8080;
    const routes_path = path.join(__dirname, '/backend/routes/');

    app.use(bodyParser.urlencoded({extended: true}));

    // setup session management
    console.log('Setting up session management...');
    const cookie_timeout = 1000 * 60 * 60 * 24;
    app.use(sessions({
        secret: process.env.SESSION_KEY,
        saveUninitialized: true,
        cookie: {
            maxAge: cookie_timeout
        },
        resave: false
    }));

    // setup cookie parser
    app.use(cookieParser());

    // serve static files
    app.use(express.static(path.join(__dirname, '/frontend')));

    // routes
    console.log('Setting up routes');
    const pageRoutes = require(routes_path + 'pageRoutes');
    const userRoutes = require(routes_path + 'userRoutes');
    app.use('/', pageRoutes);
    app.use('/', userRoutes);

    console.log('-- Successfulllessness --');
    console.log('App listens on port:', port);
    app.listen(port);
}
