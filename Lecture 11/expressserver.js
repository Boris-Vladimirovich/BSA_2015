var express = require("express");
var bodyParser = require("body-parser");
var db = require("./db.js");

var app = express();
app.use(bodyParser.urlencoded());

var router = express.Router();
router.use(bodyParser.urlencoded());

router.get("/country", function (req, res) {	
	res.end(JSON.stringify({
		"countries": db.getCountries()
	}));
});
 
router.get("/country/:country/hotel", function (req, res) {
	var country = req.params.country;
	res.end(JSON.stringify({
		"hotels": db.getHotelsInCountry(country)
	}));
});

router.post("/country", function (req, res) {	
	var name = req.body.countryName;
	var description = req.body.countryDescription;
	db.addCountry(name, description);
});

router.post("/country/:country/hotel", function (req, res) {	
	var countryName = req.params.country;	
	var hotelName = req.body.hotelName;
	var hotelDescription = req.body.hotelDescription;	
	db.addHotel(countryName, hotelName, hotelDescription);
});

router.get("/hotel/:id", function (req, res) {	
	var id = parseInt(req.params.id);	
	var hotel = db.getHotelById(id);
	res.end(JSON.stringify({
		"hotel": hotel
	}));
});

router.delete("/hotel/:id", function (req, res) {	
	var id = parseInt(req.params.id);	
	db.deleteHotelById(id);
});

router.put("/hotel/:id", function (req, res) {
	var id = parseInt(req.params.id);
	var newCountryName = req.body.countryName;
	var newHotelName = req.body.hotelName;
	var newHotelDescription = req.body.hotelDescription;	
	db.updateHotelById(id, newCountryName, newHotelName, newHotelDescription);
});
app.use('/', router);
app.listen(8080);

console.log("Server started at http://127.0.0.1:8080/");
