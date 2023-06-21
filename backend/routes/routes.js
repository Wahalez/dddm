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
        res.status(200).send();
    } catch (error) {
        res.status(500).send('Error registering user.');
    }

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
})

module.exports = router;
