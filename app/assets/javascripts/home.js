  
$(document).ready(function(){
  $(window).resize(function(){
    $("#main_container").height($(window).height());
  });

$( "#carousel" ).rcarousel({
  width: 300,
  height: 300,
  auto: {enabled: true}
});




});

