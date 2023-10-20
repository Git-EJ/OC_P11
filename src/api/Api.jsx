import useFetch from "./UseFetch";

const Api = (apiUrl) => {
  const fetchData = useFetch (apiUrl)
  const {data, isLoading, error} = fetchData

  return {data, isLoading, error}
}


export default Api;