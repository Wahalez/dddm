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
    console.log(req.query);
    authenticated = db_user.authenticateUser(req.query.username, req.query.password);
    if (authenticated !== null) {
        session = req.session;
        session.user = authenticated;
    }
    res.send(authenticated !== null);
});

router.get('/test1', (req, res) => {
    session = req.session;
    session.chupapi = 'hello sir :3'; // this actually saves it ! when we call test2 we see this entry, so we can use this to authenticate the user
    console.log(session);
    res.send('muniyaniyo :D')
});

router.get('/test2', (req, res) => {
    session = req.session;
    console.log("test2: ", session);
    res.send('muniyaniyo!!!! :D :D :D')
});

module.exports = router;
