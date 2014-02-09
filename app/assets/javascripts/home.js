  
$(document).ready(function(){
  $(window).resize(function(){
    $("#main_container").height($(window).height());
  });





var window_width = ($(window).width() * (1/7))

$('.food_carousel').width(window_width);
$('.food_carousel').height(window_width);
$('#carousel').css({"margin-left": (window_width * (1/2))})

});

