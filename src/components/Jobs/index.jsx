import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import api from 'modules/api/api'
import { JOBS } from 'modules/api/endpoints'
import { apiActions } from 'store/actions'

const Jobs = () => {
  const state = useSelector(state => state.api[JOBS])
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(apiActions.fetch(JOBS))
        const data = await api(JOBS)
        dispatch(apiActions.fetchSuccess(JOBS, data))
      } catch (error) {
        dispatch(apiActions.fetchFail(JOBS, error))
      }
    }
    fetchData()
  }, [dispatch])
  console.log(state)
  return (
    <div>

    </div>
  )
}

export default Jobs