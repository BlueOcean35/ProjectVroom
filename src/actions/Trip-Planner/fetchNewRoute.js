import axios from 'axios';
// import distNewRoute from './distNewRoute.js';
import distNewWaypoints from './distNewWaypoints.js';
import store from '../../store.js';
import thunk from 'redux-thunk';

var fetchNewRoute = (newWaypoint) => {
    console.log('new waypoint: ', newWaypoint)
    newWaypoint.comment = '';
    var waypoints = store.getState().waypoints.slice();
    console.log(newWaypoint, 'newWaypoint')
    if (newWaypoint !== undefined){
      waypoints.push(newWaypoint)
    }
    return (dispatch) => {
      dispatch(distNewWaypoints(waypoints))
  }
}

export default fetchNewRoute;

// var fetchNewRoute = (newWaypoint) => {
//   console.log('OTHER LOG IN FETCH NEW ROUTE')

//   var start = store.getState().addressObjFrom.David_format
//   var end = store.getState().addressObjTo.David_format

//   var waypoints = store.getState().waypoints;
//   console.log(waypoints, 'waypoints1')
//   console.log(newWaypoint, 'newWaypoint')
// if (newWaypoint !== undefined) {
//   waypoints.push(newWaypoint);
// }

//   console.log(waypoints, 'waypoints')

//   var waypointLocs;
//   if (waypoints.length > 0) {
//     waypointLocs = waypoints.map((element) => {return element.loc});
//   }
//   // axios.get(`/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=48000&type=restaurant`)
//   // .then((data) => {
//   //   console.log('axios data ')
//   // })

//   // return (dispatch) => {
//     // console.log('hi')
//     // return axios.get(`/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=48000&type=restaurant`)
//     //   .then((data) => {
//     //     console.log('food: ', data);
//     //     // dispatch(showNearbyFood(data));
//     //   }).catch((err) => {
//     //     console.log(err)
//     //   })


//   waypointLocs = waypointLocs.join('|');
//     return (dispatch) => {
//     //   console.log('why do you hate')
//     //   console.log(`/maps/api/directions/json?origin=${start}&destination=${end}
//     //     &waypoints=${waypointLocs}`)

//     //  axios.get(`/maps/api/directions/json?origin=${start}&destination=${end}&waypoints=${waypointLocs}`)
//     //   .then((data) => {
//     //     console.log(data, 'LOOK AT ME IM INSIDE FETCH NEW ROUTE')
//     //     var legs = data.routes.legs;
//     //     // var start = {address: legs[0].start_address, location: {lat: legs[0].start_location.lat, lng: legs[0].start_location.lng}};
//     //     // var end = {address: legs[legs.length-1].end_address, location: {lat: legs[legs.length-1].end_location.lat, lng: legs[legs.length-1].end_location.lng}};
//     //     // var waypoints = [];



//     //     // if (legs.length > 1) {
//     //     //   for (var i = 0; i < legs.length - 1; i++) {
//     //     //     waypoints.push({address: legs[i].end_address, location: {lat: legs[i].end_location.lat, lng: legs[i].end_location.lng}})
//     //     //   }
//     //     // }

//         var oldWaypoints = store.getState().waypoints;
//         var waypointIds = oldWaypoints.map((element) => {return element.place_id});

//         var newWaypointIds = waypoints.map((element) => {
//           return element.place_id
//         })


//         for (var i = 1; i < newWaypointIds - 1; i++) {
//           if (newWaypointIds[i] !== waypointIds[i]) {
//             waypoints.splice(i, 0, {
//              // address: legs[i-1].end_address,
//               loc: newWaypoint.loc,
//               name: newWaypoint.name,
//               type: newWaypoint.type,
//               place_id: newWaypoint.place_id

//             })
//             return dispatch(distNewWaypoints(waypoints))
//           }
//         }


//       //  dispatch(distNewWaypoints(waypoints))

//     //   })
//     //   .catch((err) => {
//     //     console.error(err)
//     //   })

//     // }

// }
// }

// export default fetchNewRoute;