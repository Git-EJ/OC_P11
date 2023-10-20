import DataLoadingError from "../api/DataLoadingError";
import { useParams } from "react-router-dom";
import Api from "../api/Api";
import Error from "../pages/Error";
import Tags from "../molecules/Tags";
import AccommodationBanner from "../molecules/AccommodationBanner";
import AccommodationTitleHost from "../molecules/AccommodationTitleAndHost";
import Rating from "../molecules/Rating";


const AccommodationDisplay = () => {

  const { id } = useParams()
  const apiData = Api()
  const { data, isLoading, error } = apiData

  if (!data || !data.find(el => el.id === id)) return < Error errorCode = '404 - Accomodation not Found' />;


  if (isLoading || error || !data) {
    return <DataLoadingError data = {data} isLoading = {isLoading}  error = {error} />
  }

  const accommodationElement = data.find(el => el.id === id);
 
  return (
    <>
      <main className="main_wrapper">
        <AccommodationBanner pictures={accommodationElement.pictures[2]} title={accommodationElement.title} id={id} />
        <AccommodationTitleHost title={accommodationElement.title} location={accommodationElement.location} host={accommodationElement.host} id={id} />
        <div className="accommodation_tags_and_raiting_container">
          <Tags tags={accommodationElement.tags} id={id} />
          <Rating rating={accommodationElement.rating} id={id} />
        </div>
      </main>
    </>
  )
}

export default AccommodationDisplay;