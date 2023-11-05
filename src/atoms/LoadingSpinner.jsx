import House from '../atoms/HouseIcon'
import PropTypes from 'prop-types'

const LoadingSpinner = ({spinnerText = 'chargement en cours...'}) => {
  return (
    <div className='loading_spinner_container'>
      <div className='loading_spinner_circle'></div>
      <div className="loading_spinner_icon"><House /></div>
      <p className='loading_spinner_text'>{spinnerText}</p>
    </div>
  )
}

LoadingSpinner.propTypes = {
  spinnerText: PropTypes.string
}

LoadingSpinner.defaultProps = {
  spinnerText: 'chargement en cours...'
}

export default LoadingSpinner;
