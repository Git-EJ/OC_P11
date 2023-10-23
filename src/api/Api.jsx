import useFetch from "./UseFetch";

const HOST_URL = "/data"

const FetchAPI = (url) => {
  const fetchData = useFetch (url)
  const {data, isLoading, error} = fetchData

  return {data, isLoading, error}
}

const Api = {
  Accomodations : () => FetchAPI (`${HOST_URL}/data_accommodations.json`),
  About: () => FetchAPI (`${HOST_URL}/data_about.json`)
}

export default Api;