import React, { useEffect, useState } from 'react'

import api from 'modules/api/api'
import { JOBS } from 'modules/api/endpoints'

const Jobs = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await api(JOBS)
      setData(response)
    }
    fetchData()
  }, [])
  return (
    <div>
      {data?.map(item => (
        <div key={item.id} >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Jobs