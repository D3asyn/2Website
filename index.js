import express from "express";
const app = express();

app.get("/", function (req, res) {
	res.render("index.ejs");
});

const port = 3000;
app.listen(port, function () {
	console.log("Server listening on port " + port);
});
