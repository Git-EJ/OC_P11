import DataLoadingError from "../api/DataLoadingError";
import { useParams } from "react-router-dom";
import Api from "../api/Api";
import Error from "../pages/Error";


const AcommodationDisplay = () => {

  const { id } = useParams()
  const apiData = Api()
  const { data, isLoading, error } = apiData

  if (!data || !data.find(el => el.id === id)) return < Error errorCode = '404 - Accomodation not Found' />;


  if (isLoading || error || !data) {
    return <DataLoadingError data = {data} isLoading = {isLoading}  error = {error} />
  }


  const accommodationElement = data.find(el => el.id === id);
 
  
  const [firstName, lastName] = accommodationElement.host.name.split(" ")
  console.log(firstName, lastName)
  return (
    <>
      <div className="accommodation_banner_container">
        <img src={accommodationElement.pictures[2]} alt= {accommodationElement.title} className="accommodation_banner_img" />
      </div>

      <div className="accommodation_title_and_host_container">
        <div className="accommodation_title_container"> 
          <div className="accommodation_title_text">{accommodationElement.title}</div>
          <div className="accommodation_title_location">{accommodationElement.location}</div>
        </div>
        <div className="accommodation_host_container"> 
          <div className="accommodation_host_name_container">
            <div className="accommodation_host_name">{firstName}</div>
            <div className="accommodation_host_name">{lastName}</div>
          </div>
          <div className="accommodation_host_img_container">
            <img src={accommodationElement.host.picture} alt={accommodationElement.host.name}className="acommodation_host_img"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcommodationDisplay;