import useFetch from "./UseFetch";

const Api = () => {
  const fetchData = useFetch('/data/data.json')
  const {data, isLoading, error} = fetchData

  return {data, isLoading, error}
}

export default Api;