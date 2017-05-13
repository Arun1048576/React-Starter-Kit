export default {
  INITIALIZE_ROUTE : (state, payload) => {
    const newState = Object.assign({}, state, {
      currentPage : "login"
    })
    return newState;
  }
}