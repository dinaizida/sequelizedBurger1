// created a table "Burgers " in the database "burger_db"
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1, 140],
            },
        },    
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    
     // record id of customer who eats the burger
    Burger.associate = function(models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Burger;
  };
  