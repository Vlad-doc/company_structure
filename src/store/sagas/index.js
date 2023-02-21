import { takeEvery, call, put, all } from 'redux-saga/effects'

import api from 'modules/api/api'
import { apiActions, API_ACTIONS } from 'store/actions'



export function* jobsWorkerSaga({ type }) {
  const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase()

  try {
    const dataJobs = yield call(api, actionType)
    yield put(apiActions.fetchSuccess(actionType, dataJobs))
  } catch (error) {
    yield put(apiActions.fetchFail(actionType, error))
  }
}

export function* watchApiJobsSaga() {
  yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), jobsWorkerSaga)
}

export default function* rootSaga() {
  yield all([
    watchApiJobsSaga()
  ])
}