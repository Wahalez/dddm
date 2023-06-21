const express = require("express");
const path = require("path");
const db_funcs = require("../db/db_funcs");
const fs = require("fs");

const router = express.Router();

const views_dir = path.join(__dirname, "../../frontend/view/");
const controller_dir = path.join(__dirname, "../../frontend/controller/");

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

      fs.readFile(
        controller_dir + "header.js",
        "utf8",
        (err, headerJSContent) => {
          if (err) {
            console.error("Error reading header.js file:", err);
            res.sendStatus(500);
            return;
          }

          // Combine header content, register content, and header.js content
          const combinedContent =
            headerContent +
            indexContent +
            "<script>" +
            headerJSContent +
            "</script>";
          res.send(combinedContent);
        }
      );
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

      fs.readFile(
        controller_dir + "header.js",
        "utf8",
        (err, headerJSContent) => {
          if (err) {
            console.error("Error reading header.js file:", err);
            res.sendStatus(500);
            return;
          }

          // Combine header content, register content, and header.js content
          const combinedContent =
            headerContent +
            registerContent +
            "<script>" +
            headerJSContent +
            "</script>";
          res.send(combinedContent);
        }
      );
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

    fs.readFile(views_dir + "register.html", "utf8", (err, loginContent) => {
      if (err) {
        console.error("Error reading index file:", err);
        res.sendStatus(500);
        return;
      }

      fs.readFile(
        controller_dir + "header.js",
        "utf8",
        (err, headerJSContent) => {
          if (err) {
            console.error("Error reading header.js file:", err);
            res.sendStatus(500);
            return;
          }

          // Combine header content, register content, and header.js content
          const combinedContent =
            headerContent +
            loginContent +
            "<script>" +
            headerJSContent +
            "</script>";
          res.send(combinedContent);
        }
      );
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
