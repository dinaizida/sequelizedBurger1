// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");
//var burger = require("../models/burger.js");
var router = express.Router();
// Requiring our models
var db = require("../models");

// Routes
// =============================================================

// get all the burgers in the db
router.get("/", function(req, res) {
    var query = {};
    if (req.query.CustomerId) {
        query.Customer = req.query.CustomerId;
    }
    // if the CustomerId field of the burgers table is not empty, include the customer of that id in the results
    db.Burger.findAll({
            include: db.Customer,
            where: query
        })
        .then(function(data) {
            //console.log(data);
            return res.render("index", {
                burgers: data
            });
        });
});

// add a burger
router.post("/", function(req, res) {
    //console.log(req.body);
    db.Burger.create({
            burger_name: req.body.name
        })
        .then(function() {
            res.redirect("/");

        });
    console.log("Burger added: " + req.body.name);
});

// update a burger and enter customer name
router.put("/:id", function(req, res) {
            console.log(req.body.eaten_by);

            db.Customer.findAll({
                    where: {
                        customer_name: req.body.eaten_by
                    }
                })
                .then(function(data) {
                    if (data.length > 0) {
                        // if customer already exists in database, devour burger
						console.log("customer already exists:  " + req.body.eaten_by);
						console.log('data[0].id- ' + data[0].id);
                        devour(data[0].id);
                    } else {
                        // if customer does not exist in database, create new customer, then devour burger
                        console.log("creating new customer:  " + req.body.eaten_by) ;
                        db.Customer.create({
                            customer_name: req.body.eaten_by
						})
						.then(function(data) {
                                devour(data.id);
							});
					}
                    function devour(customer) {
                        db.Burger.update({
                            devoured: true,
                            CustomerId: customer
                        }, {
                            where: {
                                id: req.params.id
                            }
                        }).then(function() {
                            res.redirect("/");
                        });
                        console.log("Burger updated number: " + req.params.id + "   Burger Eaten by customer : " + req.body.eaten_by);
                    };
				});
});

 // delete a burger
router.delete("/:id", function(req, res) {
	db.Burger.destroy({
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.redirect("/");
	});
	console.log("Burger deleted number: " + req.params.id);
});

module.exports = router;           