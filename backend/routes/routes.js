const express = require('express');
const path = require('path');
const db_funcs = require('../db/db_funcs');

const router = express.Router();

const views_dir = path.join(__dirname, '../../frontend/view/');

router.use(express.json());

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});

router.get("/register", (req, res) => {
    res.sendFile(views_dir + "register.html");
});

router.post("/new_user", (req, res) => {
    console.log(req.body);
});

router.get("/test", (req, res) => {
    db_funcs.getAllUsers().then(query => {
        res.send(query);
    });
});

<<<<<<< HEAD
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); 

router.post("/upload", upload.single("image"), (req, res) => {

  const imageFile = req.file;
  
  res.sendStatus(200);
});


module.exports = router;
=======
router.post("/create_user", async (req, res) => {
    const {
        username,
        password,
        type,
        fname,
        lname,
        email,
        phone,
        birthday,
        address
    } = req.body;
    console.log(username, password, email, fname, lname, phone, birthday, address);
    try {
        const savedUser = await db_funcs.addUser(username, password, type, fname, lname, email, phone, birthday, address);
        console.log('User registered successfully:', savedUser);
        res.send(savedUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user.');
    }
});

const fileupload = require('express-fileupload')
app.use(fileupload(), app.post('/saveImage', (req, res) => {
    const fileName = req.files.myFile.name
    const path = __dirname + '/images/' + fileName

    image.mv(path, (error) => {
        if (error) {
            console.error(error)
            res.writeHead(500, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({status: 'error', message: error}))
            return
        }

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            status: 'success',
            path: '/img/houses/' + fileName
        }))
    })
}))

module.exports = router;
>>>>>>> 44e5fa1ec355b6fe2fd19ff189e55be279763164
