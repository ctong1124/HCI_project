var party_page={
    "entries":[
        {
            "song": "On Sight",
            "artist": "Kanye West",
            "album": "Yeezus",
            "votes": 0,
            "my_vote": 0
            // 1 upvote, -1 downvote, 0 no vote
        },
        {
            "song": "On Sight",
            "artist": "Kanye West",
            "album": "Yeezus",
            "votes": 0,
            "my_vote": 0
            // 1 upvote, -1 downvote, 0 no vote
        }
]}


jQuery(document).ready(function($){
    console.log("session");
    console.log(JSON.parse(sessionStorage.getItem('session')));

    $( "#info" ).click(function() {
      $( "#party_description" ).toggle("medium");
    });

    var session = JSON.parse(sessionStorage.getItem('session'));


    //populate party description

    if (!(jQuery.isEmptyObject(session["Created"]))) {
        partyName = session["Created"]["party_name"];
        partyDescription = session["Created"]["party_description"];
        guests = session["Created"]["guests"];

    } else {
        partyName = session["Joined"]["party_name"];
        partyDescription = session["Joined"]["party_description"];
        guests = session["Joined"]["guests"];
        
    }

    $("#party_description .party_name").html(partyName);
    $("#party_description .description").html(partyDescription);

    output="";
    for (var i in guests) {

        output+="<li><div class=\"placeholder_image\"></div><span class=\"name\">";
        output += guests[i];
        output+= "</span></li>";

    }

    $('.friends_list').html(output);


    //populate song list 
    song_list = session["Playlist"];

    /* {
       
       }
      */

    // ordered_votes = {}
    //  for (var i in song_list) {
    //     vote = song_list[i]["votes"]
    //  }

    song_output ="";
    for (var i in song_list) {
        song_output += "<li><div class=\"song\"><img src=\"";
        song_output += data.covers[song_list[i]["album"]];
        song_output += "\"><h1>";
        song_output += song_list[i]["song"];
        song_output += "</h1><h3>";
        song_output += song_list[i]["artist"];
        song_output += "</h3><div class=\"voting\"><i class=\"arrow fa fa-arrow-up grey\"></i><span data-votes=\"0\">";
        song_output += song_list[i]["votes"];
        song_output += "</span><i class=\"arrow fa fa-arrow-down grey\"></i></div></div></li>";
       
    }
    $('#add_songs').html(song_output);


    

    // $('#party-page').on("click", function(){
    var myObject = JSON.parse(sessionStorage.getItem('add'));
      
      party_page.entries.push(myObject);

      console.log(party_page.entries[0]);

      output = "<li><div class=\"song\"><img src=\"img/album10.jpg\"><h1>";
      output += party_page.entries[0]["song"];
      output += "</h1><h3>";
      output += party_page.entries[0]["artist"];
      output += "</h3><div class=\"voting\"><i class=\"arrow fa fa-arrow-up\"></i><span>0</span><i class=\"arrow fa fa-arrow-down\"></i></div></div></li>";


       $('#party-page .addsong').html(output);

      
      
      //sessionStorage.removeItem('add');

    // });
    

});


