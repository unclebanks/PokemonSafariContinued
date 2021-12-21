var urlifyNumber = function(dexNum, isShiny) {
  var dexNumString = '' + dexNum;
  while (dexNumString.length < 1)
    dexNumString = '0' + dexNumString;
  if (isShiny) {
      return '/images/pokemon/shinypokemon/' + dexNumString + '.png';
  }
  return '/images/pokemon/pokemon/' + dexNumString + '.png';
};


var setup = function () {
  var pkdex = JSON.parse(localStorage.pokedex);
  var totalmon = 151;
  var trainer = JSON.parse(localStorage.trainer);
  var shiny = false;
  if (trainer.jticket > 0)
    totalmon = 251;
  if (trainer.hticket > 0)
    totalmon = 386;    

  var rootElement = document.getElementById('pokedex');
  pokedex.setAttribute('class', 'pokedex');
  var heading = document.createElement('h3');
  heading.setAttribute('class', 'header');
  heading.innerText = "Pokedex: (" + (Object.keys(pkdex).length) + "/" + totalmon + ")";
  rootElement.appendChild(heading);

  var table = document.createElement('table');
  rootElement.appendChild(table);

  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  for (var i = 1; i <= totalmon; i++){
    var row = document.createElement('tr');
    var col_dex = document.createElement('td');
    var col_img = document.createElement('img');
    if (!pkdex[i]){
      col_dex.innerHTML = "<strong>"+i + "</strong>: ???";
      col_img.setAttribute('src', '/images/unknown_pokemon.png');
    } else {
      shiny = pkdex[i].shiny;
      col_dex.innerHTML = "<strong>"+i + ": " + pkdex[i].name+"</strong>";
      col_img.setAttribute('src', urlifyNumber(i, shiny));
    }
    row.appendChild(col_dex);
    row.appendChild(col_img);
    tableBody.appendChild(row);
  }
};

window.onload = setup;