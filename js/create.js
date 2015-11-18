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
  var result = '<div class="a_tag"><p>#' + val + '</p><i id="remove" class="fa fa-times"></i></div>'

  $('#add_genres > #tags').append(result);

  $( 'i#remove' ).click(function() {
    $(this).parent().remove();
  });
}

function addFriends(val) {
  var result = '<div class="a_tag"><p>' + val + '</p><i id="remove" class="fa fa-times"></i></div>'

  $('#add_friends > #tags').append(result);

  $( 'i#remove' ).click(function() {
    $(this).parent().remove();
  });
}

$( "i#edit_party_name" ).click(function() {
  $("#party_name > h2").focus();
});

$( "i#edit_party_description" ).click(function() {
  $("#party_description > p").focus();
});

$( "#search_genres" ).autocomplete({
  source: availableGenres,
  select: function (e, ui) {
  	var val = ui.item.value;
    ui.item.value = '';
  	addGenre(val);
  }
});

$( "#search_friends" ).autocomplete({
  source: availableFriends,
  select: function (e, ui) {
  	var val = ui.item.value;
    ui.item.value = '';
  	addFriends(val);
    }
});

});
