import React, { Component } from "react";
import Helmet from "react-helmet";
import store from "../../../store"
const API_KEY = 'AIzaSyC4JTb8HXtNdYA6ero9OZ5AZSVB7BUGFpk';

class GoogleMap extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
    console.log('render')
		this.renderMap();
	};

  componentDidUpdate(prevProps) {

    console.log('update')

    this.initMap();
  }

	renderMap = () => {
		window.initMap = this.initMap;
	};

	initMap = () => {
    console.log('map rendered')
		let latitude = 40.7128;
		let longitude = -74.0060;
		var directionsService = new google.maps.DirectionsService();
		var directionsRenderer = new google.maps.DirectionsRenderer();

    // console.warn('redux start: ', store.getState(), this.props)

    const map = new window.google.maps.Map(
			document.getElementById("google-map"),
			{
				center: new window.google.maps.LatLng(latitude, longitude),
				zoom: 7,
				mapTypeId: window.google.maps.MapTypeId.ROADMAP,
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false,
				draggable: true,
				disableDoubleClickZoom: true,
				gestureHandling: "cooperative",
			}
		);

    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({
      preserveViewport: true
    })

    function calcRoute(props) {
      // var start = "New+York,NY";
      // var end = "Boston,MA"
      console.log('CALC ROUTE PROPS', props)
      var start = props.addressObjFrom.David_format
      var end = props.addressObjTo.David_format

      console.log(props.waypoints)

      if (props.waypoints.length !== 0) {
        var waypointsLoc = props.waypoints[0].loc
        var request = {
          origin:start,
          destination:end,
          waypoints: [{
            location: waypointsLoc
          }],
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        };
      } else {
        var request = {
          origin:start,
          destination:end,
          travelMode: 'DRIVING'
        };
      }
      directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          console.log(response);
          directionsRenderer.setDirections(response);
        } else {
          console.log(status);
        }
      });
    }

    calcRoute(this.props)

		map.addListener("dblclick", (mouseEvent) => {
      const x = JSON.stringify(mouseEvent.latLng.lat());
			const y = JSON.stringify(mouseEvent.latLng.lng());
			console.log(x, y);
			this.props.getNearby(x, y);
		});
	};

	render() {
		return (
      <div>
        {this.props.waypoints.length}
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
      </div>
		);
	}
}

export default GoogleMap;
