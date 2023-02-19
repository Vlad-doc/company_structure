import camelcase from "camelcase"

import ENDPOINTS from "modules/api/endpoints"
import { API_ACTIONS } from "../actions"


const initApiState = () => Object.keys(ENDPOINTS).reduce((acc, item) => {
  acc[camelcase(item)] = {
    data: null,
    loading: false,
    error: null
  }
  return acc
}, {})


const initialState = initApiState()

// const apiReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case type.startsWith(API_ACTIONS.FETCH_START): {
//       const inner = camelcase(type.replace(API_ACTIONS.FETCH_START, ''))
//       return {
//         ...state,
//         [inner]: {
//           ...state[inner],
//           loading: true,
//         }
//       }
//     }

//     case type.startsWith(API_ACTIONS.FETCH_SUCCESS): {
//       const inner = camelcase(type.replace(API_ACTIONS.FETCH_SUCCESS, ''))
//       return {
//         ...state,
//         [inner]: {
//           ...state[inner],
//           data: payload,
//           loading: false
//         }
//       }
//     }

//     case type.startsWith(API_ACTIONS.FETCH_FAIL): {
//       const inner = camelcase(type.replace(API_ACTIONS.FETCH_FAIL, ''))
//       return {
//         ...state,
//         [inner]: {
//           ...state[inner],
//           loading: false,
//           error: payload
//         }
//       }
//     }

//     default:
//       return state
//   }
// }

const apiReducer = (state = initialState, { type, payload }) => {

  if (type.startsWith(API_ACTIONS.FETCH_START)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_START, ''))
    return {
      ...state,
      [inner]: {
        ...state[inner],
        loading: true,
      }
    }
  }

  if (type.startsWith(API_ACTIONS.FETCH_SUCCESS)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_SUCCESS, ''))
    return {
      ...state,
      [inner]: {
        ...state[inner],
        data: payload,
        loading: false
      }
    }
  }

  if (type.startsWith(API_ACTIONS.FETCH_FAIL)) {
    const inner = camelcase(type.replace(API_ACTIONS.FETCH_FAIL, ''))
    return {
      ...state,
      [inner]: {
        ...state[inner],
        loading: false,
        error: payload
      }
    }
  }

  return state

}

export default apiReducer