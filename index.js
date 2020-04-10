function fun(){
	var namensListe = [];
	for(var i = 0; i<5;i++){
		namensListe[i] = document.getElementById("name"+ ++i ).value;
	}
	var roles = ["top", "jungle", "mid", "adc", "support"];
	roles = shuffle(roles);
	var champs = getChamps();
	champs = shuffle(champs);
	var table = document.getElementById("results");
	var tableContent = "<thead> <tr> <th> Name </th> <th> Rolle </th> <th> Champ </th> <th> Reroll Champ</th> </tr> </thead>";
	tableContent+="<tbody>";
	for(var i = 0; i<5;i++){
		tableContent+='<tr class="table-success"> <td> '+namensListe[i]+' </td> <td> '+roles[i]+' </td> <td id="champ'+i+'"> ';
		tableContent+= champs[i]+' </td> <td> <button class="btn btn-warning"';
		tableContent+= 'onclick="document.getElementById(\'champ'+i+'\').innerText = getChamps()[Math.floor((Math.random() * getChamps().length) + 1)];"> Reroll </button> </td> </tr>';
	}
	tableContent+="</tbody>";
	table.innerHTML = tableContent;
	
}
//ty https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




// champ list definition
function getChamps(){
	var champs = [,"Aatrox         "
,"Ahri           "
,"Akali          "
,"Alistar        "
,"Amumu          "
,"Anivia         "
,"Annie          "
,"Aphelios       "
,"Ashe           "
,"Aurelion Sol   "
,"Azir           "
,"Bard           "
,"Blitzcrank     "
,"Brand          "
,"Braum          "
,"Caitlyn        "
,"Camille        "
,"Cassiopeia     "
,"Cho'Gath       "
,"Corki          "
,"Darius         "
,"Diana          "
,"Dr. Mundo      "
,"Draven         "
,"Ekko           "
,"Elise          "
,"Evelynn        "
,"Ezreal         "
,"Fiddlesticks   "
,"Fiora          "
,"Fizz           "
,"Galio          "
,"Gangplank      "
,"Garen          "
,"Gnar           "
,"Gragas         "
,"Graves         "
,"Hecarim        "
,"Heimerdinger   "
,"Illaoi         "
,"Irelia         "
,"Ivern          "
,"Janna          "
,"Jarvan IV      "
,"Jax            "
,"Jayce          "
,"Jhin           "
,"Jinx           "
,"Kai'Sa         "
,"Kalista        "
,"Karma          "
,"Karthus        "
,"Kassadin       "
,"Katarina       "
,"Kayle          "
,"Kayn           "
,"Kennen         "
,"Kha'Zix        "
,"Kindred        "
,"Kled           "
,"Kog'Maw        "
,"LeBlanc        "
,"Lee Sin        "
,"Leona          "
,"Lissandra      "
,"Lucian         "
,"Lulu           "
,"Lux            "
,"Malphite       "
,"Malzahar       "
,"Maokai         "
,"Master Yi      "
,"Miss Fortune   "
,"Mordekaiser    "
,"Morgana        "
,"Nami           "
,"Nasus          "
,"Nautilus       "
,"Neeko          "
,"Nidalee        "
,"Nocturne       "
,"Nunu & Willump "
,"Olaf           "
,"Orianna        "
,"Ornn           "
,"Pantheon       "
,"Poppy          "
,"Pyke           "
,"Qiyana         "
,"Quinn          "
,"Rakan          "
,"Rammus         "
,"Rek'Sai        "
,"Renekton       "
,"Rengar         "
,"Riven          "
,"Rumble         "
,"Ryze           "
,"Sejuani        "
,"Senna          "
,"Sett           "
,"Shaco          "
,"Shen           "
,"Shyvana        "
,"Singed         "
,"Sion           "
,"Sivir          "
,"Skarner        "
,"Sona           "
,"Soraka         "
,"Swain          "
,"Sylas          "
,"Syndra         "
,"Tahm Kench     "
,"Taliyah        "
,"Talon          "
,"Taric          "
,"Teemo          "
,"Thresh         "
,"Tristana       "
,"Trundle        "
,"Tryndamere     "
,"Twisted Fate   "
,"Twitch         "
,"Udyr           "
,"Urgot          "
,"Varus          "
,"Vayne          "
,"Veigar         "
,"Vel'Koz        "
,"Vi             "
,"Viktor         "
,"Vladimir       "
,"Volibear       "
,"Warwick        "
,"Wukong         "
,"Xayah          "
,"Xerath         "
,"Xin Zhao       "
,"Yasuo          "
,"Yorick         "
,"Yuumi          "
,"Zac            "
,"Zed            "
,"Ziggs          "
,"Zilean         "
,"Zoe            "
,"Zyra           "];
return champs;
}
