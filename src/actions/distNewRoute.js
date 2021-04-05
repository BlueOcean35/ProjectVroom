var distNewRoute = (start, end, waypoints) => {
  return {
    type: 'NEW_ROUTE',
    start: start,
    end: end,
    waypoints: waypoints
  }
}