//require mysql

var mysql = require("mysql");

//connect to specific database

var connection = mysql.createConnection({
    host: "h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yg8csp9ef0zuafx1", 
    password: "txfjdloewz6z0xmr",
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

