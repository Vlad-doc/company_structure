import React, { useEffect } from 'react'

import { JOBS } from 'modules/api/endpoints'
import useGetApiData from 'modules/hooks/useGetApiData'

const Jobs = () => {
  const { state, fetchingData } = useGetApiData(JOBS)
  useEffect(() => {
    fetchingData()
  }, [fetchingData])
  console.log(state)
  return (
    <div>

    </div>
  )
}

export default Jobs