import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setIsLoading(true)
      setTimeout(() => { //TODO: remove
        fetch(url)
        .then(async (res) => {
          if(!res.ok) {
            throw new Error('Error fetching data')
          }
          const response = await res.json()
          setIsLoading(false)
          setData(response)
          setError(null)
        })
      },1000)
    } catch (err) {
      setIsLoading(false)
      setError(err)
    }
  },[url])

  return {data, isLoading, error}
}

export default useFetch

