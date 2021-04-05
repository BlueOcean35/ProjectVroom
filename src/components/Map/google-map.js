import React, { Component } from "react";
import Helmet from "react-helmet";
const API_KEY = process.env.API_KEY;

class GoogleMap extends Component {
	componentDidMount() {
		this.renderMap();
	}
	renderMap = () => {
		window.initMap = this.initMap;
	};

	initMap = () => {
		let latitude = 40.7128;
		let longitude = -74.0060;
		var directionsService = new google.maps.DirectionsService();
		var directionsRenderer = new google.maps.DirectionsRenderer();
		
    const map = new window.google.maps.Map(
			document.getElementById("google-map"),
			{
				center: new window.google.maps.LatLng(latitude, longitude),
				zoom: 10,
				mapTypeId: window.google.maps.MapTypeId.ROADMAP,
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false,
				draggable: true,
				gestureHandling: "cooperative",
			}
		);

    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({
      preserveViewport: true
    })

    function calcRoute() {
      var start = "New York, NY";
      var end = "Boston, MA"
      var request = {
        origin:start,
        destination:end,
        waypoints: [{
          location: { lat: 41.03, lng: -73.76 }
        }],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      };
      directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(response);
        }
      });
    }

    calcRoute()

		map.addListener("click", (mouseEvent) => {
			console.log(mouseEvent.latLng.lat());
			console.log(mouseEvent.latLng.lng());
		});
	};

	render() {
		return (
			<div className="map-wrapper-container">
				<div className="map-wrapper">
					<div className="map-container" id="google-map"></div>
          <div id="directionsPanel"></div>
					<Helmet className="helmet">
						<script
							type="text/javascript"
							charset="UTF-8"
							async={true}
							defer={true}
							src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`}
						/>
					</Helmet>
				</div>
			</div>
		);
	}
}

export default GoogleMap;
