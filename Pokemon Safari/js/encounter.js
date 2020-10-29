////////KANTO REGION

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
			}
		return _location;
	}

var start = function(e) {
	if(!localStorage.trainer) { update(); }
 	_location = getLocation();
  	chrome.browserAction.setIcon({"path":"/images/icons/toolbarRegion/"+_location+ ".png"});
	chrome.alarms.create("", {"delayInMinutes":1});
};

var setAlarm = function(e) {
	if(localStorage.frequency == "veryrare")
		chrome.alarms.create("", {"delayInMinutes":10});
	else if(localStorage.frequency == "rare")
		chrome.alarms.create("", {"delayInMinutes":5});
	else if(localStorage.frequency == "uncommon")
		chrome.alarms.create("", {"delayInMinutes":2});
	else if(localStorage.frequency == "random") 
		chrome.alarms.create("", {"delayInMinutes":(Math.random() * 120)});
	else
		chrome.alarms.create("", {"delayInMinutes":.2});
};

var pokemonFound = function(e) {
	setAlarm();
	chrome.browserAction.setIcon({"path":"/images/icon!.png"});
	chrome.browserAction.setPopup({"popup":"/html/battle.html"});
	var opt = {
        type: "basic",
        title: "Wild Pokemon Appeared!",
        message: "Select the \"!\" icon in your browser to battle!",
        iconUrl: "/images/notification.png"
    };
  if (localStorage.notifications != "off") {
		chrome.notifications.create("poke", opt, function () {});
		console.log(localStorage.notifications != "off");
	}
	else {
		chrome.notifications.clear("",function(e){});
		console.log("um");
	}
	if (localStorage.sound == "on") {
		var aud = new Audio('http://50.7.60.82:777/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3#t=,4.7');
		aud.play();
	}
};

document.addEventListener('DOMContentLoaded', function () {
	start();
});

var update = function() {
	localStorage.frequency = "uncommon";
	localStorage.notifications = "on";
	localStorage.trainer = JSON.stringify({poke:0});
	localStorage.pokedex = JSON.stringify({});
	for (var i = 1; i < 152; i++) {
		if (localStorage[i]) {
			var pk = JSON.parse(localStorage.pokedex);
			pk[i] = JSON.parse(localStorage[i]);
			localStorage.pokedex = JSON.stringify(pk);
		}
	}
};

// var reset = function() {
//   localStorage.frequency = "common";
//   localStorage.notifications = "on";
//   localStorage._location = "forest";
//   localStorage.trainer = JSON.stringify({poke:0});
//   localStorage.pokedex = JSON.stringify({});
// };

chrome.alarms.onAlarm.addListener(pokemonFound);