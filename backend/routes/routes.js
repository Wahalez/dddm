const express = require('express');
const path = require('path');
const db_funcs = require('../db/db_funcs');

const router = express.Router()

const views_dir = path.join(__dirname, '../../frontend/view/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});

router.post("/new_user", (req, res) => {
    console.log(req.body);
})

router.get("/test", (req, res) => {
    db_funcs.getAllUsers().then(query => {
        res.send(query);
    });
});

module.exports = router;

router.get("/test", async (req,) => {
    const { username, password, email, fname, lname, phone, birthday, address } = req.query;
    try {
        const savedUser = await db_funcs.addUser(username, password, email, fname, lname, phone, birthday, address);
        res.send(savedUser);
      } catch (error) {
        res.status(500).send('Error registering user.');
      }
    });

    module.exports = {
        addUser: db_funcs.addUser
      };
