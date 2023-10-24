import DataLoadingError from "../api/DataLoadingError";
import { Navigate, useParams } from "react-router-dom";
import Api from "../api/Api";
import Tags from "../molecules/Tags";
import Lightbox from "../molecules/Lightbox";
import AccommodationTitleLocation from "../molecules/AccommodationTitleLocation";
import AccommodationHost from "../molecules/AccommodationHost";
import Rating from "../molecules/Rating";
import Dropdown from "../molecules/Dropdown";


const Accommodations = () => {

  const { id } = useParams()
  const apiData = Api.Accomodations()
  const { data, isLoading, error } = apiData

  
  if (isLoading || error || !data) {
    return <DataLoadingError data={data} isLoading={isLoading} error={error} />;
  }
  
  if (!data || !data.find((el) => el.id === id)) return <Navigate to="/error/404"/>;
  
  const accommodationElement = data.find(el => el.id === id);
 
  const sortEquipements = (a, b) => {
    return a.localeCompare(b)
    //return a// no sort()
  }

  return ( 
    <>
      <main className="accommodation_global_wrapper">
        <Lightbox pictures={accommodationElement.pictures} title={accommodationElement.title} />

        <div className="accommodation_contents_wrapper">
          <div className="accommodation_title_location_tags_container">
            <AccommodationTitleLocation title={accommodationElement.title} location={accommodationElement.location}/>
            <Tags tags={accommodationElement.tags} />
          </div>
          <div className="accommodation_host_rating_container">
            <AccommodationHost host={accommodationElement.host} />
            <Rating rating={accommodationElement.rating} max={5} />
          </div>
        </div>

        <div className="accommodation_dropdowns_container">
          <Dropdown title="Description">{accommodationElement.description}</Dropdown>
          <Dropdown title="Équipements"> 
            {accommodationElement.equipments.sort(sortEquipements).map((el, i) => <p key={`equ-${i}`}>{el}</p>)}
          </Dropdown>
        </div>
        
      </main> 
    </>
  )
}

export default Accommodations;