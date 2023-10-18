import Api from '../api/Api';

const Card = () => {
  const apiData = Api();
  const { data, isLoading, error } = apiData || {}

  if (isLoading) {
    return <div>Chargement en cours...</div>
  }

  if (error) {
    return <div>Error : Error Fetching data</div>
  }

  const elements = data ? data.map((el) => {
    return (
      <div className="card_container" key={el.id}>
        <img src={el.cover} alt='toto' className="card_img" />
        <p className='card_title'>{el.title}</p>
      </div> 
    )
  }) : null;

  if (!data) {
    console.log('No Data');  //TODO: why is call when data is fetched ?
    return <div>No Data</div>;
  }

  return (
    <div className="cards_container">
      {elements}
    </div>
  )
}

export default Card;