

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
  