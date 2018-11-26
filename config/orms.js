var orm = require("./connection.js");

var seeBurger = {
    read: function selectAll(cb) {
      orm.all("foodTime", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function insertOne(cols, vals, cb) {
      orm.create("foodTime", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function updateOne(objColVals, condition, cb) {
      orm.update("foodTime", objColVals, condition, function(res) {
        cb(res);
      });
    },
            // delete: function(condition, cb) {
            //   orm.delete("foodTime", condition, function(res) {
            //     cb(res);
            //   });
            // }
};
  
  
module.exports = seeBurger;
  







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