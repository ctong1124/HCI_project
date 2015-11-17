jQuery(document).ready(function($){

	//tabs 
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    $('.search-result .info').click(function(){
        $(this).closest(".search-result").css('display', 'none');
        $(this).closest(".tab-content").find(".artist-page").css('display', 'inherit');
    })

    $('.exit-btn').click(function(){
        $(this).closest(".artist-page").css('display', 'none');
        $(this).closest(".tab-content").find(".search-result").css('display', 'inherit');
    })

});