import React, { Component } from "react";
import Helmet from "react-helmet";
import store from "../../../store"
const API_KEY = process.env.API_KEY;

class GoogleMap extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
    console.log('render')
		this.renderMap();
	};

  componentDidUpdate(prevProps) {
    console.log(prevProps.waypoints, 'old waypoints')
    console.log(this.props.waypoints, 'new waypoints')
    console.log('update')
    if (prevProps.waypoints.length !== this.props.waypoints.length){
      this.initMap();
    }
  }

	renderMap = () => {
		window.initMap = this.initMap;
	};

	initMap = () => {
    console.log('map rendered')
		let latitude = this.props.locationFrom.lat || 40.7128
		let longitude = this.props.locationFrom.lng || -74.0060
		var directionsService = new google.maps.DirectionsService();
		var directionsRenderer = new google.maps.DirectionsRenderer({

      // markerOptions: {
      //   icon: "https://img.icons8.com/bubbles/50/000000/motorbike-helmet.png",
      //   animation: google.maps.Animation.DROP,
      // }
    });
    let positionMarkers = [];
    // //console.warn('redux start: ', store.getState(), this.props)

    const map = new window.google.maps.Map(
			document.getElementById("google-map"),
			{
				center: new window.google.maps.LatLng(latitude, longitude),
				zoom: 7,
				mapTypeId: window.google.maps.MapTypeId.ROADMAP,
				zoomControl: this.props.toggle || true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false,
				scrollwheel: false,
				draggable: this.props.toggle || true,
				disableDoubleClickZoom: true,
				gestureHandling: "cooperative",

			}
		);
    console.log('DIV------------------------', map.getDiv())

    directionsRenderer.setMap(map);
    directionsRenderer.setOptions({
      preserveViewport: false,
      polylineOptions: {
        strokeWeight: 5,
        strokeOpacity: 0.7,
      },
    })

    function calcRoute(props) {
      // var start = "New+York,NY";
      // var end = "Boston,MA"
      console.log('CALC ROUTE PROPS', props)
      var start = props.addressObjFrom.David_format
      var end = props.addressObjTo.David_format

      console.log(props.waypoints)

      if (props.waypoints.length !== 0) {
        // var waypointsLoc = props.waypoints[0].loc
        if (props.waypoints.length > 1) {
          var waypointsLoc = props.waypoints.map((wp) => {
            return {
              location: wp.loc
            }
          })


          // waypointsLoc = waypointsLoc.join('|')



        } else {
          var waypointsLoc = [{
            location: props.waypoints[0].loc
          }]
        }

        console.log('waypoints loc: ', waypointsLoc)
        var request = {
          origin:start,
          destination:end,
          waypoints: waypointsLoc,
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

    function addPositionMarker(location) {
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
      positionMarkers.push(marker);
    }

    function setMapOnAll(map) {
      positionMarkers[0].setMap(map);
      positionMarkers=[];
    }

		map.addListener("dblclick", (mouseEvent) => {
      if (!positionMarkers.length) {
      addPositionMarker(mouseEvent.latLng);
      map.panTo(mouseEvent.latLng);
      map.setZoom(8);
    } else {
      setMapOnAll(null);
    }
      const x = JSON.stringify(mouseEvent.latLng.lat());
			const y = JSON.stringify(mouseEvent.latLng.lng());
			console.log(x, y);
			if (this.props.getNearby) {
				this.props.getNearby(x, y);
			}
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