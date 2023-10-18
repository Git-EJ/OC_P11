import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setIsLoading(true)
      // setTimeout(() => { //simule le temps de chargement
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
      // },2000)
    } catch (err) {
      setIsLoading(false)
      setError(err)
    }
  },[url])

  return {data, isLoading, error}
}

export default useFetch

