// var orm = require("../config/orm.js");

// var burger = {
//     // selects all burgers in the database
//     selectAll: function(callback) {
//         orm.selectAll("burgers", function(res) {
//             callback(res);
//         });
//     },
//     // inserts one record into the burgers table
//     insertOne: function(burgerName, callback) {
//         orm.insertOne("burgers", "burger_name", burgerName, function(res) {
//             callback(res);
//         });
//     },
//     // updates a burger entry
//     updateOne: function(idNum, callback) {
//         orm.updateOne("burgers", "devoured", "1", "id", idNum, function(res) {
//             callback(res);
//         });
// 	},
// 	// deletes a burger entry
// 	deleteOne: function(idNum, callback) {
// 		orm.deleteOne("burgers", "id", idNum, function(res) {
// 			callback(res);
// 		});
// 	}
// };

// module.exports = burger;

module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return burger;
  };
  