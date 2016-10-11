export default {
  INITIALIZE_APP : (state, payload) => {
    const newState = Object.assign({}, state, {
      appStarted : true
    })
    return newState;
  }
}