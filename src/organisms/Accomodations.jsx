import DataLoadingError from "../api/DataLoadingError";
import { Navigate, useParams } from "react-router-dom";
import Api from "../api/Api";
import Tags from "../molecules/Tags";
import Lightbox from "../molecules/Lightbox";
import AccommodationTitleHost from "../molecules/AccommodationTitleAndHost";
import Rating from "../molecules/Rating";
import Dropdown from "../molecules/Dropdown";
import useInnerWidth from "../molecules/useInnerWidth";

// TODO REFACTORISER
const Accommodations = () => {

  const { id } = useParams()
  const apiData = Api.Accomodations()
  const { data, isLoading, error } = apiData
  const handleResize = useInnerWidth()

  
  if (isLoading || error || !data) {
    return <DataLoadingError data={data} isLoading={isLoading} error={error} />;
  }
  
  if (!data || !data.find((el) => el.id === id)) return <Navigate to="/error/404"/>;
  
  const accommodationElement = data.find(el => el.id === id);
  const [firstName, lastName] = accommodationElement.host.name.split(" ");
 
  const sortEquipements = (a, b) => {
    return a.localeCompare(b)
    //return a// pour pas de sort()
  }

  
  if (handleResize > 700) {
    return (
      <>
        <main className="accommodation_wrapper">
          <Lightbox pictures={accommodationElement.pictures} title={accommodationElement.title} />
          <AccommodationTitleHost title={accommodationElement.title} location={accommodationElement.location} host={accommodationElement.host}/>
          <div className="accommodation_tags_and_raiting_container">
            <Tags tags={accommodationElement.tags} />
            <Rating rating={accommodationElement.rating} max={5} />
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

  return (
          <>
        <main className="accommodation_wrapper">
          <Lightbox pictures={accommodationElement.pictures} title={accommodationElement.title} />
          <AccommodationTitleHost title={accommodationElement.title} location={accommodationElement.location}/>
          <Tags tags={accommodationElement.tags} />
        
          <div className="accommodation_tags_and_raiting_container">
            <Rating rating={accommodationElement.rating} max={5} />
            <div className="accommodation_host_container"> 
              <div className="accommodation_host_name_container">
                <div className="accommodation_host_name">{firstName}</div>
                <div className="accommodation_host_name">{lastName}</div>
              </div>
              <div className="accommodation_host_img_container">
                <img src={accommodationElement.host.picture} alt={accommodationElement.host.name} className="accommodation_host_img"/>
              </div>
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