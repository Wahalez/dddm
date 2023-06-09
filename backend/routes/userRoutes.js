const express = require('express');
const path = require('path');
const db_user = require('../db/db_user');

const router = express.Router();

router.use(express.json());

router.get("/get_users", (req, res) => {
    db_user.getAllUsers().then(query => {
        res.send(query);
    });
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
        const savedUser = await db_user.addUser(username, password, fname, lname, email, phone, birthday, address);
        res.status(200).send();
    } catch (error) {
        res.status(500).send('Error registering user.');
    }
});

router.get('/authenticate', (req, res) => {
    db_user.authenticateUser(req.query.username, req.query.password).then(authenticated => {
        if (authenticated !== null) {
            session = req.session;
            session.user = authenticated;
        }
        res.send(authenticated !== null);
    });
});

module.exports = router;
