import loadingSpinnerIcon from '../assets/icons/loading_spinner_icon_svg.svg';
import PropTypes from 'prop-types';

const DataLoadingError = ({data, isLoading, error}) => {

  if (isLoading) { 
    return (
      <div className='loading_spinner_container'>
        <div className='loading_spinner_circle'></div>
          <img src= {loadingSpinnerIcon} alt="loading" className="loading_spinner_icon" />
        <p className='loading_spinner_text'>Chargement en cours...</p>
      </div>
    )
  }

  if (error) return <div>Error : Error Fetching data</div>

  if (!data) {
    console.log('No Data')
    return <div>No Data</div>
  }

  return <> </>
}

DataLoadingError.propTypes = { data: PropTypes.array, isLoading: PropTypes.bool, error: PropTypes.object }

export default DataLoadingError;
