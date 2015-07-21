/**
 * HotelsController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getHotelsInCountry: function(req, res) {
		Hotels.find({country: req.param("country")}).exec(function(err, result) {
			return res.send(result);
		});
	},
	addHotel: function(req, res) {
		if (req.body.name && req.body.description) {
			Hotels.create({name: req.body.name, country: req.param("country"), description: req.body.description}).exec(function(err, result) {
				return res.send(result);
			});
		}
		else {
			res.status(400);
			res.send("Error: name and description must be defined.");
		}
	},
	getHotelById: function(req, res) {
		Hotels.findOne({id: req.param("id")}).exec(function(err, result) {
			return res.send(result);
		});
	},
	updateHotelById: function(req, res) {
		var obj = {};
		if (req.body.name || req.body.description) {
			if (req.body.name) {
				obj.name = req.body.name;
			}
			if (req.body.description) {
				obj.description = req.body.description;
			}
			Hotels.update({id: req.param("id")}, obj).exec(function(err, result) {
				return res.send(result);
			});
		}
		else {
			res.status(400);
			res.send("Error: new name or description must be defined");
		}		
	},
	deleteHotelById: function(req, res) {
		Hotels.findOne({id: req.param("id")}).exec(function(err, result) {
			if (result) {
				Hotels.destroy({id: req.param("id")}).exec(function(error, result) {
					return res.send("Hotel id=" + req.param("id") + " deleted");
				});
			}
			else {
				res.status(404);
				res.send(result);
			}
		});
	}
};

