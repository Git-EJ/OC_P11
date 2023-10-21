import Dropdown from "../molecules/Dropdown";
import Api from "../api/Api";
import DataLoadingError from "../api/DataLoadingError";
import Error from "../pages/Error";

const AboutDisplay = () => {

  const fetchData = Api('/data/data_about.json')
  const {data, isLoading, error} = fetchData

  if (!data) return < Error errorCode = '404' />;

  if (isLoading || error || !data) {
    return <DataLoadingError data = {data} isLoading = {isLoading}  error = {error} />
  }
  

  return (
  <main className="about_wrapper">
    <Dropdown title="Fiabilité" content={data.fiabilite.content} id={data.fiabilite.id} className='dropdown_wrapper_about'/>
    <Dropdown title="Respect" content={data.respect.content} id={data.respect.id}className='dropdown_wrapper_about'/>
    <Dropdown title="Service" content={data.service.content} id={data.service.id}className='dropdown_wrapper_about'/>
    <Dropdown title="Sécurité" content={data.securite.content} id={data.securite.id}className='dropdown_wrapper_about'/>
  </main>
  )
}

export default AboutDisplay;