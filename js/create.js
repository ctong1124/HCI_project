$(document).ready(function() {

var availableGenres = [
  "Post-Rock",
  "Hip-Hop",
  "Punk",
  "Pop",
  "Blues",
  "Dance",
  "Afrobeat",
  "Chaingang",
  "Surf-Punk",
  "Crust-Punk",
  "Vaporwave",
  "WitchHouse",
  "Joni-Step",
  "Dub-Step",
  "Ambient",
  "Electronic",
  "Funk",
  "Black Metal",
  "Doom-Core",
  "Death-Core",
  "Black-Metal",
  "Death-Metal"
];

var availableFriends = [
  "Jill Doe",
  "Jane Doe",
  "Jimmy Dean",
  "Lisa Simpson",
  "Julia Holter",
  "Bobby McGee",
  "Sampson Mesiah",
  "Jimmy Vaughan",
  "Arlen Roth",
  "Jimmy Haha",
  "Chris Clark",
  "Wolff Vorhoff",
  "Renny Altmann",
  "Jake Ryan",
  "Carisa Tong",
  "Zach Bachiri",
  "Jue Yao",
  "Dolphin Sanders",
  "Mara Gallagher",
  "Francis Hollande",
  "Black Francis",
  "Francis Bean"
];

function addGenre(val) {
	var result = '<div class="a_tag"><p>#' + val + '</p></div>'
	$('#add_genres > #tags').append(result);
}

function addFriends(val) {
	console.log()
}

$( "#search_genres" ).autocomplete({
  source: availableGenres,
  select: function (e, ui) {
  	var val = ui.item.value;
  	addGenre(val);
    },
});

$( "#search_friends" ).autocomplete({
  source: availableFriends,
  select: function (e, ui) {
  	var val = ui.item.value;
  	addFriends(val);
    },
});

$( "#search_genres" ).keyup(function(event){
    if(event.keyCode == 13){
        addGenre($(this).val());
    }
});

$( "#search_friends" ).keyup(function(event){
    if(event.keyCode == 13){
        addFriends($(this).val());
    }
});
});