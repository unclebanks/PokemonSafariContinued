var setup = function(e) {
	var container = document.getElementById("container");

	var trainer = JSON.parse(localStorage.trainer);
	if (trainer.jticket) {
		container.appendChild(createHeader('Johto Region'));
		container.appendChild(createZone('npark', 'National Park'));
		container.appendChild(createZone('ruinsoa', 'Ruins of Alph'));
		container.appendChild(createZone('iforest', 'Ilex Forest'));
		container.appendChild(createZone('ttower', 'Tin Tower'));
		container.appendChild(createZone('wisle', 'Whirl Islands'));
		container.appendChild(createZone('mmortar', 'Mt. Mortar'));
		container.appendChild(createZone('lakerage', 'Lake of Rage'));
		container.appendChild(createZone('icepath', 'Ice Path'));
		container.appendChild(createZone('dcave', 'Dark Cave'));
		container.appendChild(createZone('msilver', 'Mt. Silver'));
		container.appendChild(createZone('jvroad', 'Victory Road'));
		container.appendChild(createZone('jfish', 'Fishing'));
	}
		if (trainer.hticket) {
		container.appendChild(createHeader('Hoenn Tour'));
		container.appendChild(createZone('jungle', 'Jungle'));
		container.appendChild(createZone('sea', 'Miracle Sea'));
		container.appendChild(createZone('mountain', 'Mt. Chimney'));
	}

	var buttons = document.getElementsByClassName("button");
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].onclick = click(buttons[i]);
	}
};

var createZone = function(id, name){
	var zone = document.createElement('div');
	zone.className = 'button '+id;
	zone.id = id;
	zone.innerHTML = '<span>'+name+'</span>';
	return zone;
};

var createHeader = function(name){
		var header = document.createElement('div');
		header.className = "title";
		header.innerHTML = name;
		return header;
};

function getLocation(e){
	localStorage._location = e.id;
	var _location = e.id;
  	switch(_location){
/////////////KANTO Region
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

var click = function(e) {
	return function() {
		_location = getLocation(e);
  		chrome.browserAction.setIcon({"path":"/images/icons/toolbarRegion/"+_location+ ".png"});
		document.location = "menu.html";
	};
};

document.addEventListener('DOMContentLoaded', function () {
	setup();
});
