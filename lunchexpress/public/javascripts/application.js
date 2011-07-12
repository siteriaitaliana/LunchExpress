// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
  var geocoder;
  var map;
  var centermap;
  var tableid = 1128316;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(51.5010, -0.12617);
    var myOptions = {
      zoom: 14,
      center: latlng,
      disableDefaultUI: true,
      navigationControl: true,
      navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
      mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $('center_next').setOpacity(0);
  }

  function codeAddress() {
  	initialize();
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
       	centermap = results[0].geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: centermap
        });
        $('center_start').hide();
        $('center_next').setOpacity(1);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  
  function retrievePlaces() {
  	//alert(centermap.toString());
  	layer = new google.maps.FusionTablesLayer(tableid);
  	layer.setMap(map);
  	layer.setQuery("SELECT * FROM "+tableid+" WHERE ST_INTERSECTS(geo, CIRCLE(LATLNG"+centermap+", 1500))");
  	
  
    circle = new google.maps.Circle({
	    center: centermap,
	    radius: 1500,
	    map: map,
	    fillOpacity: 0.2,
	    strokeOpacity: 0.5,
	    strokeWeight: 1
  	});

  	
	//add a click listener to the layer
  	//google.maps.event.addListener(layer, 'click', function(e) {
    //update the content of the InfoWindow
    //e.infoWindowHtml = e.row['Store Name'].value + "<br />";
  
  }