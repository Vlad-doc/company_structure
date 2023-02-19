const type = "FETCH_SUCCESS_JOBS"
const API_ACTIONS = {
  FETCH_START: 'FETCH_START_',
  FETCH_SUCCESS: 'FETCH_SUCCESS_',
  FETCH_FAIL: 'FETCH_FAIL_'
}



console.log(type.startsWith(API_ACTIONS.FETCH_SUCCESS))


console.log(type.replace(API_ACTIONS.FETCH_SUCCESS, ''))