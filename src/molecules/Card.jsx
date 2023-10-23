import { NavLink } from 'react-router-dom';
import Api from '../api/Api';
import DataLoadingError from '../api/DataLoadingError';


const Card = () => {
  const apiData = Api.Accomodations()
  const { data, isLoading, error } = apiData

  
  if (isLoading || error || !data) {
    return <DataLoadingError data = {data} isLoading = {isLoading}  error = {error} />
  }

  const elements = data.map((el) => {
    return (
      <NavLink to = {`/accommodation/${el.id}`} className="card_container" key={el.id}>
        <img src={el.cover} alt='toto' className="card_img" />
        <h1 className='card_title'>{el.title}</h1>
      </NavLink> 
    )
  })

  return (
    <div className="cards_container">
      {elements}
    </div>
  )
}

export default Card;