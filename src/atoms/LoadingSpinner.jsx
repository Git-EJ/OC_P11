import House from '../atoms/HouseIcon'

const LoadingSpinner = () => {
  return (
    <div className='loading_spinner_container'>
      <div className='loading_spinner_circle'></div>
      <div className="loading_spinner_icon"><House /></div>
      <p className='loading_spinner_text'>Chargement en cours...</p>
    </div>
  )
}

export default LoadingSpinner;
