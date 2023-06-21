const express = require('express');
const path = require('path');
const db_funcs = require('../db/db_funcs');

const router = express.Router();

const views_dir = path.join(__dirname, '../../frontend/view/');

router.use(express.json());

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});

router.get("/get_users", (req, res) => {
    db_funcs.getAllUsers().then(query => {
        res.send(query);
    });
});

router.get("/register", (req, res) => {
    res.sendFile(views_dir + "register.html");
});

router.post("/create_user", async (req, res) => {
    const {
        username,
        password,
        fname,
        lname,
        email,
        phone,
        birthday,
        address
    } = req.body;
    try {
        const savedUser = await db_funcs.addUser(username, password, fname, lname, email, phone, birthday, address);
        res.send(savedUser);
    } catch (error) {
        res.status(500).send('Error registering user.');
    }
});

module.exports = router;
