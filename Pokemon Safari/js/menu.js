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
		case 'npark':
			_location = 'park1';
			break;
		case 'ruinsoa':
			_location = 'tunnel1';
			break;
		case 'iforest':
			_location = 'forest1';
			break;
		case 'ttower':
			_location = 'tower1';
			break;
		case 'wisle':
			_location = 'beach1';
			break;
		case 'mmortar':
			_location = 'glacier1';
			break;
		case 'lakerage':
			_location = 'beach1';
			break;
		case 'icepath':
			_location = 'glacier1';
			break;
		case 'dcave':
			_location = 'tunnel1';
			break;
		case 'msilver':
			_location = 'glacier1';
			break;
		case 'jvroad':
			_location = 'tunnel1';
			break;
		case 'jfish':
			_location = 'beach1';
			break;
		default:
			_location = 'forest0';
			break;
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
	"kszone"   : "Kanto Safari Zone",
	"pwrplnt"  : "Kanto Power Plant",
	"sfisle"   : "Seafoam Island",
	"pkmnmnsn" : "Pokemon Mansion",
	"kvroad"   : "Kanto Victory Road",
	"ccave"    : "Cerulean Cave",
	"fish"     : "Fishing",
	"npark"    : "National Park",
	"ruinsoa"  : "Ruins of Alph",
	"iforest"  : "Ilex Forest",
	"ttower"   : "Tin Tower",
	"wisle"    : "Whirl Island",
	"mmortar"  : "Mt. Mortar",
	"lakerage" : "Lake of Rage",
	"icepath"  : "Ice Path",
	"dcave"    : "Dark Cave",
	"msilver"  : "Mt. Silver",
	"jvroad"   : "Johto Victory Road",
	"jfish"    : "Johto Fishing"
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
