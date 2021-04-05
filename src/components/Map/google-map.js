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
		let latitude = 40.674;
		let longitude = -73.945;
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

		map.addListener("click", (mouseEvent) => {
			console.log(mouseEvent.latLng.lat());
			console.log(mouseEvent.latLng.lng());
		});
	};

	// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=30&type=${type}&key=${API_KEY}`

	render() {
		return (
			<div className="map-wrapper-container">
				<div className="map-wrapper">
					<div className="map-container" id="google-map"></div>
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
