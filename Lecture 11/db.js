var countries = [{
	name: "Ukraine",
	description: "European country"
},{
	name: "China",
	description: "Asian country"
},{
	name: "Egypt",
	description: "African country"
},{
	name: "Canada",
	description: "North American country"
},];

var hotels = [{
	id: 1,
	name: "Hilton",
	country: "Ukraine",
	description: "5 stars"
},{
	id: 2,
	name: "Grand",
	country: "Egypt",
	description: "5 stars"
},{
	id: 3,
	name: "Last resort",
	country: "China",
	description: "4 stars"
},{
	id: 4,
	name: "Kyiv",
	country: "Ukraine",
	description: "4 stars"
},{
	id: 5,
	name: "North",
	country: "Canada",
	description: "3 stars"
},]

exports.getCountries = function() {
    return countries;
};
exports.getHotelsInCountry = function(country){
	var tmp = [];
	for (item in hotels){
		if(hotels[item].country === country){
			tmp.push(hotels[item]);
		}
	}
	return tmp;
};
exports.getHotelById = function(id){
	for (item in hotels){
		if(hotels[item].id === id){
			return hotels[item];
		}
	}
};
exports.deleteHotelById = function(id) {
    for (item in hotels) {
        if (hotels[item].id === id) {
            hotels.splice(item, 1);
            break;
        }
    }        
};
exports.addCountry = function(countryName, countryDescription) {
	countries.push({name: countryName, description: countryDescription});       
};
exports.addHotel = function(countryName, hotelName, hotelDescription) {
	var hotelId = hotels.length +1;
	hotels.push({id: hotelId, country: countryName, name: hotelName, description: hotelDescription});       
};
exports.updateHotelById = function(id, countryName, hotelName, hotelDescription) {
	for (item in hotels){
		if(hotels[item].id === id){
			hotels[item].country = countryName;
			hotels[item].name = hotelName;
			hotels[item].description = hotelDescription;
			break;
		}
	}	       
};
