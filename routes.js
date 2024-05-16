import express from "express";
import con from "./db.js";
import __dirname from "./dirname.js";
// const fs = require('fs');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
	res.send("Hello World!");
});

router.get("/post", (req, res) => {
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
				res.redirect("/post");
			}
		},
	);
});

export default router;

