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
	db.Burger.findAll({})
	.then(function(data) {
		//console.log(data);
		return res.render("index", { burgers: data });
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

// update a burger 
router.put("/:id", function(req, res) {
	//console.log(req.body);
	db.Burger.update(
		{
			devoured: true
		}, {
			where: {
				id: req.params.id
			}
		}
	).then(function() {
		res.redirect("/");
    });
    console.log("Burger updated number: " + req.params.id);
});

// delete a burger
router.delete("/:id", function(req, res) {
	db.Burger.destroy(
		{
			where: {
				id: req.params.id
			}
		}
	).then(function() {
		res.redirect("/");
    });
    console.log("Burger deleted number: " + req.params.id);
});

module.exports = router;