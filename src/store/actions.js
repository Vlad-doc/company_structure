export const API_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAIL: 'FETCH_FAIL'
}

export const apiActions = {
  fetch: (endpoint) => ({
    type: `${API_ACTIONS.FETCH_START}${endpoint.toUpperCase()}`
  }),
  fetchSuccess: (endpoint, payload) => ({
    type: `${API_ACTIONS.FETCH_SUCCESS}${endpoint.toUpperCase()}`,
    payload
  }),
  fetchFail: (endpoint, payload) => ({
    type: `${API_ACTIONS.FETCH_FAIL}${endpoint.toUpperCase()}`,
    payload
  })
}