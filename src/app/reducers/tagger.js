export default {
  INITIALIZE_ROUTE : (state, payload) => {
    const newState = Object.assign({}, state, {
      currentPage : "tagger"
    })
    return newState;
  }
}