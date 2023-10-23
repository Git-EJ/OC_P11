import Dropdown from "../molecules/Dropdown";
import Api from "../api/Api";
import DataLoadingError from "../api/DataLoadingError";
import Error from "../pages/Error";

const AboutDisplay = () => {

  const fetchData = Api.About()
  const {data, isLoading, error} = fetchData

  
  if (isLoading || error || !data) {
    return <DataLoadingError data = {data} isLoading = {isLoading}  error = {error} />
  }
  
  if (!data) return < Error errorCode = '404' />;

  return (
  <main className="about_wrapper">
    <Dropdown title="Fiabilité">
      {data.fiabilite.content}
    </Dropdown>
    <Dropdown title="Respect">
      {data.respect.content}
    </Dropdown>
    <Dropdown title="Service">
      {data.service.content}
    </Dropdown>
    <Dropdown title="Sécurité">
      {data.securite.content}
    </Dropdown>
  </main>
  )
}

export default AboutDisplay;