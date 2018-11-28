//require mysql

var mysql = require("mysql");

//connect to specific database

var connection = mysql.createConnection({
    host: "yg8csp9ef0zuafx1:txfjdloewz6z0xmr@h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/qbtou606ipthqqgo",
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

