import camelcase from "camelcase"

import ENDPOINTS from "modules/api/endpoints"
import { API_ACTIONS } from "../actions"


const initApiState = () => {
  console.log(Object.keys(ENDPOINTS).reduce((acc, item) => {
    acc[camelcase(item)] = {
      data: null,
      loading: false,
      error: null
    }
    return acc
  }, {}))
}

const initialState = initApiState()

const apiReducer = (state = initialState, { type, payload }) => {
  const inner = camelcase(type.replace(API_ACTIONS.FETCH_START, ''))
  switch (type) {
    case type.startsWith(API_ACTIONS.FETCH_START):
      return {
        ...state,
        [inner]: {
          ...state[inner],
          loading: true,
          error: null
        }
      }
    case type.startsWith(API_ACTIONS.FETCH_SUCCESS):
      return {
        ...state,
        [inner]: {
          ...state[inner],
          loading: false,
          data: payload
        }
      }
    case type.startsWith(API_ACTIONS.FETCH_FAIL):
      return {
        ...state,
        [inner]: {
          ...state[inner],
          loading: false,
          error: payload
        }
      }
    default:
      return state
  }
}


export default apiReducer