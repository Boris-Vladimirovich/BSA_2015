/**
 * BadrequestController
 *
 * @description :: Server-side logic for managing badrequests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getBadRequest: function (req, res) {
		res.badRequest("Error: Bad request");
	},
	getBadCustom: function(req, res){
		res.status(400);
		res.view("customBad", {message: "Error: Bad request"})
	}
};

