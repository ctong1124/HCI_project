jQuery(document).ready(function($){


    //form stuff
    $("#myform").on("submit", function(event){
      event.preventDefault();
      s = $('#search').val();

      // stores entry that includes that name
      //key = string of what matches, value = index
      fill_songs = {};
      fill_albums = {};
      fill_artists = {};

      
      for (var i in data.music) {
        if (data.music[i].song.toLowerCase().includes(s.toLowerCase())) {
            if (!(data.music[i].song in fill_songs)) {
                fill_songs[data.music[i].song] = i;
            }
        }
        if (data.music[i].album.toLowerCase().includes(s.toLowerCase())) {
            if (!(data.music[i].album in fill_albums)) {
                fill_albums[data.music[i].album] = i;
            }
        }
        if (data.music[i].artist.toLowerCase().includes(s.toLowerCase())) {
            if (!(data.music[i].artist in fill_artists)) {
                fill_artists[data.music[i].artist] = i;
            }
        }
      }

      //songs
      song_output = ""
      if (jQuery.isEmptyObject(fill_songs)) {
        song_output = "<h2 class=\"bold\">No results found.</h2>";
      } else {
          for (var key in fill_songs) {
            song_output += "<div class=\"entry \"><div class=\"pic\"></div><div class=\"info ver-align\"><h3 class=\"bold\">";
            song_output += key;
            song_output += "</h3><p class=\"normal\">";
            song_output += data.music[fill_songs[key]].artist;
            song_output += "</p><p class=\"normal\">";
            song_output += data.music[fill_songs[key]].album;
            song_output += "</p></div><div class=\"icon\"><i class=\"fa fa-plus\"></i></div></div>"
        }
      }

      $('#songs .search-result').html(song_output);

      //albums
      album_output = ""
      if (jQuery.isEmptyObject(fill_albums)) {
        album_output = "<h2 class=\"bold\">No results found.</h2>";
      } else {
        for (var key in fill_albums) {
          album_output += "<div class=\"entry \"><div class=\"pic\"></div><div class=\"info ver-align\"><h3 class=\"bold\">";
          album_output += key;
          album_output += "</h3><p class=\"normal\">";
          album_output += data.music[fill_albums[key]].artist;
          album_output += "</p><p class=\"normal\">";
          album_output += data.music[fill_albums[key]].year;
          album_output += "</p></div></div>";
        }
      }

      $('#albums .search-result').html(album_output);

      //artists
      artist_output = ""
      if (jQuery.isEmptyObject(fill_artists)) {
       artist_output = "<h2 class=\"bold\">No results found.</h2>";
      } else {
        for (var key in fill_artists) {
          artist_output +="<div class=\"entry \"><div class=\"pic\"></div><div class=\"info ver-align\"><h3 class=\"bold\">";
          artist_output += key;
          artist_output += "</h3></div></div>";
        }
      }

    $('#artists .search-result').html(artist_output);
    });

   

	//tabs 
    $('ul.tabs li').on( "click", function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');

        if ($('.artist-page').css('display') != "none") {
            $('.artist-page').css('display', 'none');
            $('#artists .search-result').css('display', 'inherit')
        }

        if ($('.album-page').css('display') != "none") {
            $('.album-page').css('display', 'none');
            $('#albums .search-result').css('display', 'inherit')
        }
    });

        

    // opening and closing artis/album page 
    $(document).on("click",  '#artists .search-result .info',function(){
        console.log("poop");
        $(this).closest(".search-result").css('display', 'none');
        $(this).closest(".tab-content").find(".artist-page").css('display', 'inherit');
    });

    $('.exit-btn').on("click", function(){
        if ($('.artist-page').css('display') != "none") {
            $(this).closest(".artist-page").css('display', 'none');
            $(this).closest(".tab-content").find(".search-result").css('display', 'inherit');
        }
        if ($('.album-page').css('display') != "none") {
            console.log("exitbutn");
            $(this).closest(".album-page").css('display', 'none');
            $(this).closest(".tab-content").find(".search-result").css('display', 'inherit');
        }
    })

    $(document).on("click", '#albums .search-result .info', function(){
        $(this).closest(".search-result").css('display', 'none');
        $(this).closest(".tab-content").find(".album-page").css('display', 'inherit');
    })

    

    

});