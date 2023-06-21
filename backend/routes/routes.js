const express = require("express");
const path = require("path");
const db_funcs = require("../db/db_funcs");
const fs = require("fs");

const router = express.Router();

const views_dir = path.join(__dirname, "../../frontend/view/");

router.get("/", (req, res) => {
  fs.readFile(views_dir + "header.html", "utf8", (err, headerContent) => {
    if (err) {
      console.error("Error reading header file:", err);
      res.sendStatus(500);
      return;
    }

    fs.readFile(views_dir + "index.html", "utf8", (err, indexContent) => {
      if (err) {
        console.error("Error reading index file:", err);
        res.sendStatus(500);
        return;
      }
      res.send(indexContent + headerContent);
    });
  });
});

router.get("/register", (req, res) => {
  fs.readFile(views_dir + "header.html", "utf8", (err, headerContent) => {
    if (err) {
      console.error("Error reading header file:", err);
      res.sendStatus(500);
      return;
    }

    fs.readFile(views_dir + "register.html", "utf8", (err, registerContent) => {
      if (err) {
        console.error("Error reading index file:", err);
        res.sendStatus(500);
        return;
      }
      res.send(registerContent + headerContent);
    });
  });
});

router.get("/login", (req, res) => {
  fs.readFile(views_dir + "header.html", "utf8", (err, headerContent) => {
    if (err) {
      console.error("Error reading header file:", err);
      res.sendStatus(500);
      return;
    }

    fs.readFile(views_dir + "login.html", "utf8", (err, loginContent) => {
      if (err) {
        console.error("Error reading index file:", err);
        res.sendStatus(500);
        return;
      }
      res.send(loginContent + headerContent);
    });
  });
});

router.post("/new_user", (req, res) => {
  console.log(req.body);
});

router.get("/test", (req, res) => {
  db_funcs.getAllUsers().then((query) => {
    res.send(query);
  });
});

module.exports = router;
