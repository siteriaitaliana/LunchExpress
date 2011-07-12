// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
  var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(51.5010, -0.12617);
    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    $('center_next').setOpacity(0);
  }

  function codeAddress() {
  	initialize();
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      	retrievePlaces();
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        
        $('center_start').hide();
        $('center_next').setOpacity(1);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  
  function retrievePlaces() {
  	var layer = new google.maps.FusionTablesLayer({
  	query: {
    select: 'shoplocation',
    from: '1128316'
  	},
	});
	layer.setMap(map);
  
  }