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

    $('#party-page').on("click", function(){
    var myObject = JSON.parse(sessionStorage.getItem('add'));
      
      party_page.entries.push(myObject);

      console.log(party_page.entries[1]);
      sessionStorage.removeItem('add');

    });
    

});


