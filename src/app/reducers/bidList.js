export default {
  INITIALIZE_ROUTE : (state, payload) => {
    const newState = Object.assign({}, state, {
      currentPage : "bidList"
    })
    return newState;
  },
  FETCH_LEADS: (state, payload) => {
    const newState = Object.assign({}, state)
    newState.leads = newState.leads ? Object.assign({}, newState.leads): {}
    newState.leads.data = payload
    return newState;    
  }
}