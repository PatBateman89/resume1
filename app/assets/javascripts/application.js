// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails-ujs
//= require jquery
//= require_tree .
//= require Chart.bundle
//= require chartkick

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.name').css({
    'transform' : 'translate(0px, '+ wScroll /5 +'%)'
  });

  $('.kicker').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

  if(wScroll > $('.grid-pics').offset().top - 500) {

    $('.grid-pics figure').each(function(i){

      setTimeout(function() {
        $('.grid-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i + 1));
    });

  }


});


$(document).ready(function(){
   $("#MenuIcon").click(function(){
        $("#MainMenu").css({"opacity": ".95", "width": "100%", "left": "0%"});
        function showMenu(){
            $("#MenuIcon").animate({right:'-100'},300);
        }
        setTimeout(showMenu,900);
   });

    $("#close, #away").click(function(){
            function hideMenu(){
                    $("#MainMenu").css({"opacity": "0", "width": "0%"});
                    $("#MenuIcon").animate({right:'50'},300);
            }
        setTimeout(hideMenu,300);

    });
});


$(document).ready(function(e){
  $('.slide-section').click(function(){
    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top }, 1000);


    e.preventDefault();
  });
});
