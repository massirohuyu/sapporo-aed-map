$(document).ready(function() {
  function initialize() {
    //KMLを使用した表示
//    var mapOptions = {
//        center: new google.maps.LatLng(43.064504999999997, 141.34255999999999),
//        zoom : 16,
//        mapTypeId : google.maps.MapTypeId.ROADMAP
//    };
//    
//    var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
//    
//    var kmlUrl = "https://www.google.co.jp/maps/ms?authuser=0&vps=2&hl=ja&brcurrent=h3,0x34674e0fd77f192f:0xf54275d47c665244&ie=UTF8&msa=0&output=nl&msid=202317028450014088386.0004f72286c6e6d3b228e";
//    var kmlLayer = new google.maps.KmlLayer(kmlUrl);
//    kmlLayer.setMap(map);
//    console.log(kmlLayer);

    //
    
    //googleMapsEngineを使用した表示
    var mapOptions = {
      center: new google.maps.LatLng(43.064504999999997, 141.34255999999999),
      zoom : 16,
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

    var mapsEngineLayer = new google.maps.visualization.DynamicMapsEngineLayer({
      clickable: true,
      layerId: '07003885361454882157-16143158689603361093',
      suppressInfoWindows: false
    });
    mapsEngineLayer.setMap(map);
  }
  initialize();
});
