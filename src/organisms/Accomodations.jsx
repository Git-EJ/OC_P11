import DataLoadingError from "../api/DataLoadingError";
import { Navigate, useParams } from "react-router-dom";
import Api from "../api/Api";
import Tags from "../molecules/Tags";
import Lightbox from "../molecules/Lightbox";
import AccommodationTitleHost from "../molecules/AccommodationTitleAndHost";
import Rating from "../molecules/Rating";
import Dropdown from "../molecules/Dropdown";


const AccommodationDisplay = () => {

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
    //return a//.localeCompare(b) pour pas de sort()
  }


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

export default AccommodationDisplay;