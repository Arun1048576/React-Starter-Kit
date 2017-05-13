import axios from 'axios'

export function fetchLeads (dispatch) {
  axios({
    method:'get',
    url: "http://hemant.housing.com:3004/api/v0/bids"
  }).then(({data})=> {
    dispatch({
      type: 'FETCH_LEADS',
      payload: data
    })
  })
}