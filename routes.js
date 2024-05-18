import express from "express";
import con from "./db.js";
import __dirname from "./dirname.js";
import info from "./info.js";
import devices from "./devices.js";
// const fs = require('fs');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/home", (req, res) => {
    res.render("index");
});

router.post("/upload", (req, res) => {
    con.query(
        "INSERT INTO users (username, comments) VALUES (?, ?)",
        [req.body.username, req.body.comments],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Hiba történt az adatok mentésekor.");
            } else {
                console.log("Sikeresen hozzáadva az adatbázishoz.");
                res.redirect("/reviews");
            }
        },
    );
});

router.get("/reviews", (req, res) => {
    con.query("SELECT * FROM users ORDER BY id DESC", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Hiba történt az adatok lekérdezésekor.");
        } else {
            res.render("table", { users: result });
        }
    });
});

router.get("/info", (req, res) => {
    res.render("info", { infos: info });
});

router.get("/products", (req, res) => {
    res.render("products", { devices: devices });
});
router.get("/services", (req, res) => {
    res.render("services");
});
export default router;
