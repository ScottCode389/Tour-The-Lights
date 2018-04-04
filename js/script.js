// var $card = $('.card');

// $card.waypoint(function (direction) {
//     $card.addClass('js-card-animate fadeInUp');
// }, {offset: '50%'});

$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');},
    {offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');},
    {offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');},
    {offset: '50%'
});

  
  var map1 = new GMaps({
    div: '.map1',
    lat: 43.9174,
    lng: -69.2612,
    zoom:5    
  });
  
  map1.addMarker({
    lat: 43.9174,
    lng: -69.2612,
    title: 'Marshall Point Lighthouse'       
  });

  map1.addMarker({
    lat: 44.2729,
    lng: -68.5007,
    title: 'Burnt Coat Harbor Lighthouse' 
  });

  map1.addMarker({
    lat: 44.8151,
    lng: -66.9506,
    title: 'West Quoddy Head Lighthouse' 
  });

  map1.addMarker({
    lat: 43.1653,
    lng: -70.5911,
    title: 'Cape Neddick Lighthouse' 
  });

  var map2 = new GMaps({
    div: '.map2',
    lat: 44.1387,
    lng: -124.1196,
    zoom:5
  });

  map2.addMarker({
    lat: 45.646330,
    lng: -124.005246,
    title: 'Cape Meares Lighthouse' 
  });

  map2.addMarker({
    lat: 44.1387,
    lng: -124.1196,
    title: 'Heceta Head Lighthouse' 
  });

  map2.addMarker({
    lat: 43.039331,
    lng: -124.668769,
    title: 'Cape Blanco Lighthouse' 
  });

  map2.addMarker({
    lat: 44.1387,
    lng: -124.1196,
    title: 'Heceta Head Lighthouse' 
  });

  var map3 = new GMaps({
    div: '.map3',
    lat: 36.9607,
    lng: -122.0022,
    zoom:4
  });

  map3.addMarker({
    lat: 40.03366,
    lng: -123.8146,
    title: 'Point Pinos Lighthouse' 
  });

  map3.addMarker({
    lat: 36.9607,
    lng: -122.0022,
    title: 'Walton Lighthouse' 
  });

  map3.addMarker({
    lat: 34.0522,
    lng: -118.2145,
    title: 'Point Fermin Lighthouse' 
  });



//   
