import ENDPOINTS, { BASE_URL } from "./endpoints"

const api = async (endpoint, data) => {
  const { method, uri } = ENDPOINTS[endpoint]

  const request = await fetch(`${BASE_URL}${uri}`, {
    method,
    body: data
  })

  const response = await request.json()

  return response
}

export default api