$(document).ready(function(){
    // On click, remove class on active element, add it to the new one

  $('.panel-left a').click(function(e) {
    
    console.log("CLICKED")

    $('.panel-left a.selected').removeClass('selected');
    $(this).addClass('selected');

    var dashboard = $(this).data("dashboard");

    $(".dashboard").hide();

    $("#" + dashboard).show();

    var title = $(this).data('title');
    $("#title").text(title);

    // Scroll to anchor
    //$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 70},'slow');

    e.preventDefault();
    return false;

  });

  // On scroll, remove class on active element and add it to the new one

  $(document).scroll(function() {
   
   var position = Math.floor($(this).scrollTop() / 800) + 1;

   $('.panel-left a.selected').removeClass('selected');
   $('.panel-left a.link-' + position).addClass('selected');
  });
});