//require mysql

var mysql = require("mysql");

//connect to specific database

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "Rosebud1984",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected");
});

module.exports = connection;

