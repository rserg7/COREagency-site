			function initialize() {
				var latlng = new google.maps.LatLng(50.3907, 24.2314);
				var settings = {
					zoom: 15,
					center: latlng,
					mapTypeControl: false,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: false,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
/*				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h3 style="color:#333333; line-height: 0px">Àãåíñòâî CORE</h3>'+
					'<div id="bodyContent">'+
					'<p style="color:#666666">Óêðàèíà, Ëüâîâñêàÿ îáë.,<br> ã. ×åðâîíîãðàä, óë. Áóäèâåëüíà, 1à</p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});*/
				
				var companyImage = new google.maps.MarkerImage('images/logo.png',
					new google.maps.Size(100,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
					new google.maps.Size(130,50),
					new google.maps.Point(0,0),
					new google.maps.Point(65, 50));

				var companyPos = new google.maps.LatLng(50.390613,24.231398);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"CORE agency",
					zIndex: 3});
				
				
				/*google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});*/
			}
