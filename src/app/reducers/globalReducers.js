export default {
  INITIALIZE_APP : (state, payload) => {
    const newState = Object.assign({}, state, {
      appStarted : "app working"
    })
    return newState;
  }
}