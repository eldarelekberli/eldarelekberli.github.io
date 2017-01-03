$(document).ready(function (){
  var latlng = new google.maps.LatLng(40.57441781053188, 49.77759513408512);
  var options = {
    zoom: 13,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });


  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>AF-HOTEL Aqua Park</strong><br />' 
    + '<br/ ><br /> Baku<br> Azerbaijan</div>'
  });

  infowindow.open(map, marker1);
  
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

