// import loadingSpinnerIcon from '../assets/icons/loading_spinner_icon_svg.svg';
import PropTypes from 'prop-types';
import LoadingSpinner from '../atoms/LoadingSpinner';

const DataLoadingError = ({data, isLoading, error}) => {

  if (isLoading) return < LoadingSpinner />;
     

  if (error) return <div>Error : Error Fetching data</div>;

  if (!data) {
    return <div>No Data</div>
  }

  return <> </>
}

DataLoadingError.propTypes = { 
  data: PropTypes.array, 
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

export default DataLoadingError;
