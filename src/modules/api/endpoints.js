export const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io/'

export const JOBS = 'jobs'
export const EMPLOYEES = 'employees'

const ENDPOINTS = {
  [JOBS]: {
    uri: '/jobs',
    method: 'GET'
  },
  [EMPLOYEES]: {
    uri: '/employees',
    method: 'GET'
  }
}

export default ENDPOINTS