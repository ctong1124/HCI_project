var party_page={
    "entries":[
        {
            "song": "On Sight",
            "artist": "Kanye West",
            "album": "Yeezus",
            "votes": 0,
            "my_vote": 0,
            // 1 upvote, -1 downvote, 0 no vote
        }
]}


jQuery(document).ready(function($){

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

      console.log(JSON.parse(sessionStorage.getItem('session')));
      
      //sessionStorage.removeItem('add');

    // });
    

});


