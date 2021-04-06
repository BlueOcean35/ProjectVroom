import axios from 'axios';
import store from "../../store.js"
import distNewWaypoints from './distNewWaypoints.js';


var fetchNewRoute = (newWaypoint) => {
  // waypoints = waypoints.join('|');p
    return (dispatch) => {
      const start = store.getState().addressObjFrom.formatted_address; 
      const end = store.getState().addressObjTo.formatted_address; 
      const waypoints = store.getState().waypoints;

     waypoints.push(newWaypoint);

     var waypointsLocs = waypoints.map((element) => {return element.loc});
     waypointsLocs = waypointsLocs.join('|');


      axios.get(`/maps/api/directions/json?
      origin=${start}&destination=${end}
      &waypoints=optimize:true|${waypointsLocs}`)
      .then(({data}) => {
        
        var legs = data.routes.legs;
        var returnedWaypoints = [];
        waypoints = store.getState().waypoint;

        waypointsIds = waypoints.map((element) => {return element.place_id});

        returnedPlaceIds = data.geocoded_waypoints.map((element) => {return element.place_id});

        for (var i = 1; i < returnedPlaceIds.length -1; i++) {
          if (returnedPlaceIds[i] !== waypointsIds[i]) {
              waypoints.splice(i, 0, {
                address: legs[i-1].end_address,
                location: `${legs[i -1].end_location.lat},${legs[i -1].end_location.lng}`,
                name: newWaypoint.name,
                place_id: newWaypoint.place_id,
                type: newWaypoint.type
               }
              )
          }
        }

        console.log(waypoints);


        dispatch(distNewWaypoints(waypoints))
      })
      .catch((err) => {
        console.error(err)
      })

    }
}


// var fetchNewRoute = (start, end, waypoints) => {
//   // waypoints = waypoints.join('|');
//     return (dispatch) => {

//       axios.get(`/maps/api/directions/json?
//       origin=${start}&destination=${end}
//       &waypoints=${waypoints}`)
//       .then(({data}) => {
//         var legs = data.routes.legs;
//         var start = {address: legs[0].start_address, location: {lat: legs[0].start_location.lat, lng: legs[0].start_location.lng}};
//         var end = {address: legs[legs.length-1].end_address, location: {lat: legs[legs.length-1].end_location.lat, lng: legs[legs.length-1].end_location.lng}};
//         var waypoints = [];
//         if (legs.length > 1) {
//           for (var i = 0; i < legs.length - 1; i++) {
//             waypoints.push({address: legs[i].end_address, location: {lat: legs[i].end_location.lat, lng: legs[i].end_location.lng}})
//           }
//         }

//         dispatch(distNewRoute(start, end, waypoints))
//       })
//       .catch((err) => {
//         console.error(err)
//       })

//     }
// }

export default fetchNewRoute;