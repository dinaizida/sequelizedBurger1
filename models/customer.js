module.exports = (sequelize, DataTypes) => {
	var Customer = sequelize.define("Customer", {
			customer_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
                    len: [1, 140],
                  }
			}
		},
		
	);

	// associate customers with burgers 
	Customer.associate = function(models) {
		Customer.hasMany(models.Burger);
	};

	return Customer;
};