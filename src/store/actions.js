export const API_ACTIONS = {
  FETCH_START: 'FETCH_START_',
  FETCH_SUCCESS: 'FETCH_SUCCESS_',
  FETCH_FAIL: 'FETCH_FAIL_'
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
