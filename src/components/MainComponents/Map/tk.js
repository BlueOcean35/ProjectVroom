import React, {useState, useEffect,useCallback} from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';

let libraries = ["places", "directions"];
let response = null
let request = (coord) => {return {
  location: {lat: coord.lat(), lng: coord.lng()},
  radius: 16000,
  openNow: true,
  type: ['restaurant'],
}}


function MyComponent() {
  const [positionMarker, setPositionMarker] = useState([]);
  const [suggestionMarkers, setSuggestionMarkers] = useState([]);
  const [center, setCenter] = useState({lat: 42.3701, lng: -71.0589})
  const [map, setMap] = useState(null);
  const [service, setService] = useState(null);
  const [response, setResponse] = useState(null);
  const [origin, setOrigin] = useState('Boston');
  const [destination, setDestination] = useState('New York');
  const [waypoints, setWaypoints] = useState([])

  useEffect(()=> {
    console.log('render the route on the map')
  }, [waypoints])

  const directionsCallback = useCallback(
    (direction) => {
      console.log('response', direction)
      if (response === null) {
          setResponse(direction);
        }
    },
    [],
  )

  const nearbyCallback = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setSuggestionMarkers(results)
    }
  }

  // console.log('waypoints', waypoints)

  return (
    // <LoadScript
    //   googleMapsApiKey={"AIzaSyBVzEAf0DQrgJnrlYtqwJON9qBIdxv1kgg"}
    //   libraries={libraries}
    // >
      <GoogleMap
        id={'Main-Map'}
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={center}
        zoom={15}
        clickableIcons={false}
        onClick={(event) => {
          setPositionMarker([{name: "Pin Location", location: {lat: event.latLng.lat(), lng: event.latLng.lng()}}])
          new google.maps.places.PlacesService(map).nearbySearch(request(event.latLng), nearbyCallback)
          setCenter(event.latLng);
          // map.setZoom(15);
        }}
        onLoad={(map) => setMap(map)}
        options= {{
            disableDefaultUI:true,
            scaleControl:true,
            zoomControl:true,
            fullscreenControl:true,
            restriction: {
              latLngBounds: {
                north: 49.709253,
                south: 24.541214,
                west: -124.752749,
                east: -66.755402,
              }
            }
        }}
      >
        {
          positionMarker.map(item => {
            return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={()=> {
                if (map.getZoom() === 13) {
                  map.setZoom(11);
                } else {
                  map.setZoom(13);
                  map.setCenter(item.location);
                }
              }}
            />
            )
          })
        }
        {
          suggestionMarkers.map(item => {
            return (
              <Marker
                key={item.place_id}
                position={{lat: item.geometry.location.lat(), lng: item.geometry.location.lng()}}
                animation={'DROP'}
                icon={{
                  url:'https://img.icons8.com/emoji/30/000000/pirate-flag.png'
                }}
                onClick={(e)=>{
                  let duplicate = false;
                  for (let place of waypoints) {
                    if (JSON.stringify(place.location) === JSON.stringify({ lat: item.geometry.location.lat(), lng: item.geometry.location.lng() })) {
                      duplicate = true;
                      return;
                    }
                  }
                  if (!duplicate) {
                    let updatedWaypoints = waypoints.concat({
                      location: { lat: item.geometry.location.lat(), lng: item.geometry.location.lng() }
                    })
                    setWaypoints(updatedWaypoints)
                  }
                }}
              />
            )
          })
        }
        {
          ({destination} && {origin}) && (
            <DirectionsService
              onLoad={() => console.log('it loaded')}
              options={{
                destination: destination,
                origin: origin,
                waypoints: waypoints,
                optimizeWaypoints: true,
                travelMode: "DRIVING",
              }}
              callback={directionsCallback}
            />
          )
        }
        {
          {response} && (
            <DirectionsRenderer
            directions={response}
            options={{
                markerOptions: {
                  clickable: true,
                  icon:"https://img.icons8.com/bubbles/50/000000/motorbike-helmet.png"
                }
              }}
            />
          )
        }
        <></>
      </GoogleMap>
    // </LoadScript>
  )
}

export default React.memo(MyComponent)