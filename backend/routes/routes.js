const express = require('express');
const path = require('path');
const db_funcs = require('../db/db_funcs');

const router = express.Router()

const views_dir = path.join(__dirname, '../../frontend/view/');

router.get("/", (req, res) => {
    res.sendFile(views_dir + "index.html");
});

router.get("/register", (req, res) => {
    res.sendFile(views_dir + "register.html");
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


const fileupload = require('express-fileupload')
app.use(
    fileupload(),

    app.post('/saveImage', (req, res) => {
        const fileName = req.files.myFile.name
        const path = __dirname + '/images/' + fileName
      
        image.mv(path, (error) => {
          if (error) {
            console.error(error)
            res.writeHead(500, {
              'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({ status: 'error', message: error }))
            return
          }
          res.writeHead(200, {
            'Content-Type': 'application/json'
          })
          res.end(JSON.stringify({ status: 'success', path: '/img/houses/' + fileName }))
        })
      }))