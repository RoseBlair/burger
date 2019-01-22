var connection = require("../config/connection.js");

// function pushes updates into new array.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// key/value pairs according to Sequel syntax
function objToSql(ob) {
    var arr = [];
    // iterates through key/value pairs in object and changes value
    for (var key in ob) {
        var value = ob[key];
        // skips properties that aren't apparent 
        if (Object.hasOwnProperty.call(ob, key)) {
            // adds quotation marks around any string with spaces
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // puts booleans into string form
            arr.push(key + "=" + value);
        }
    }
    // array becomes a string
    return arr.toString();
}

var orm = {
    // displays burgers
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Adds burger to database
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },


    // eaten equals true.
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    // deletes burger
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
};

// Export the ORM object in module.exports.
module.exports = orm;







// var orm = require("./connection.js");

// var seeBurger = {
//     read: function selectAll(cb) {
//       orm.all("foodTime", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function insertOne(cols, vals, cb) {
//       orm.create("foodTime", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function updateOne(objColVals, condition, cb) {
//       orm.update("foodTime", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
            // delete: function(condition, cb) {
            //   orm.delete("foodTime", condition, function(res) {
            //     cb(res);
            //   });
            // }
// };
  
  
// module.exports = seeBurger;
  







// function selectAll() {
//     inquirer
//         .prompt({
//             name: "action",
//             type: "list",
//             message: "What would you like to do?",
//             choices: [
//                 "select all",
//                 "insert one",
//                 "update one"
//             ]
//         })
//     .then(function(answer) {
//         switch(answer.action) {
//             case "select all":
//             selectAll();
//             break;
        
//             case "insert one":
//             insertOne();
//             break;

//             case "update one":
//             updateOne();
//             break;
//         }
//     });
// }

// function selectAll() {
//     var query = "SELECT id, burger_name, devoured FROM foodtime";
//     connection.query(query, {burger_name: burger_name.answer}, function(err, res) {
//         for (var i = 0; i<res.length; i++) {
//             console.log ("burger " + res[i].burger_name + "eaten? " + devoured)
//         }
//         runSearch();
//     })
// }

// function insertOne()
//     inquirer
//         .prompt({
//   name: "artist",
//   type: "input",
//   message: "What artist would you like to search for?"
// })
// * `insertOne()`
// * `updateOne()`

// * Export the ORM object in `module.exports`.