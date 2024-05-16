import mysql from "mysql";

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "shop",
});

con.connect((err) => {
	if (err) {
		console.log("Nem sikerült kapcsolodni az adatbázishoz");
	} else {
		console.log("Sikeres volt az adatbázis kapcsolat");
	}
});

export default con;

