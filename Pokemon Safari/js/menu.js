///////KANTO REGION

function getLocation() {
	switch(localStorage._location){
		case 'fish':
			_location = 'beach0';
			break;
		case 'pkmnmnsn':
			_location = 'city0';
			break;
		case 'pwrplnt':
			_location = 'city0';
			break;
		case 'vforest':
			_location = 'forest0';
			break;
		case 'sfisle':
			_location = 'glacier0';
			break;
		case 'kszone':
			_location = 'park0';
			break;
		case 'ccave':
			_location = 'tower0';
			break;
		case 'mtmoon':
			_location = 'tunnel0';
			break;
		case 'rtunnel':
			_location = 'tunnel0';
			break;
		case 'digcave':
			_location = 'tunnel0';
			break;
		case 'kvroad':
			_location = 'tunnel0';
			break;
		default:
			_location = 'forest0';
			break;
///////JOHTO REGION
		}
	return _location;
}

var setup = function(e) {
	if(!localStorage._location){
		localStorage._location = 'forest';
	}
	_location = getLocation();
	chrome.browserAction.setIcon({"path":"/images/icons/toolbarRegion/"+_location+ ".png"});
	displayZone(localStorage._location);
	displayTrainerInfo();
};

document.addEventListener('DOMContentLoaded', function () {
	setup();
});

var displayZone = function (zoneName){
	//move these _locations into a separate file
	var _locations = {
	"vforest"  : "Viridian Forest",
	"mtmoon"   : "Mt. Moon",
	"rtunnel"  : "Rock Tunnel",
	"digcave"  : "Digletts Cave",
	"kszone"   : "Safari Zone",
	"pwrplnt"  : "Power Plant",
	"sfisle"   : "Seafoam Island",
	"pkmnmnsn" : "Pokemon Mansion",
	"kvroad"   : "Victory Road",
	"ccave"    : "Cerulean Cave",
	"fish"     : "Fishing"
	};

	var _locationName = document.getElementById("location_name");
	_locationName.innerHTML = _locations[zoneName];

	var _locationElement = document.getElementById("showzone");
	_locationElement.className = "";
	_locationElement.className = "showzone "+zoneName;
};

var displayTrainerInfo = function(){
	var trainer = JSON.parse(localStorage.trainer);
	var pokedex = JSON.parse(localStorage.pokedex);
	document.getElementById('balance').innerHTML = trainer.poke;
	document.getElementById('found_pokemon').innerHTML = Object.keys(pokedex).length;
	var totalPokemon = 151;
	if(trainer.jticket){
		totalPokemon = 251;
	}
	if(trainer.hticket){
		totalPokemon = 386;
	}
	document.getElementById('total_pokemon').innerHTML = totalPokemon;
};	
