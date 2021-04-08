var distRemoveWaypoints = (waypoints) => {
  return {
    type: 'REMOVE_WAYPOINTS',
    waypoints: waypoints
  }
}

export default distRemoveWaypoints;