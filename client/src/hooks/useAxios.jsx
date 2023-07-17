import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (param) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3'

  const getData = async (param) => {
    try {
      setLoading(true)
      const res = await axios(param)
      setResponse(res.data)
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData(param)
  }, [])

  return {
    response,
    loading,
    error
  }
}

export default useAxios
