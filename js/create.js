$(document).ready(function() {

var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

$( "#search_genres" ).autocomplete({
  source: availableTags
});

$( "#search_genres" ).keyup(function(event){
    if(event.keyCode == 13){
        console.log($(this).val());
    }
});
});