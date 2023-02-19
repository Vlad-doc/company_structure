import React, { useEffect, useState } from 'react'

import api from 'modules/api/api'
import { JOBS } from 'modules/api/endpoints'
import { useSelector } from 'react-redux'

const Jobs = () => {
  const state = useSelector(state => state)
  console.log(state)
  return (
    <div>

    </div>
  )
}

export default Jobs