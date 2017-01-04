$(document).ready(function (){
  
  new WOW().init();



  new WOW().init();

  var scrollIt = function(){    
    $('a[data-section]').click(function(e){
        var section =  $(this).attr('data-section');
        e.preventDefault();        
        $('html, body').animate({
            scrollTop: $('#'+section).offset().top-50 + "px"
        }, 2000);
    });
  }
  scrollIt();

  $("#results").lazyload({
      effect : "fadeIn"
  });
});

