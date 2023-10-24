import PropTypes from 'prop-types';


const AccommodationTitleLocation = ({ title, location}) => {
  return (
    <div className="accommodation_title_location_container"> 
      <h1 className="accommodation_title_text">{title}</h1>
      <h2 className="accommodation_title_location">{location}</h2>
    </div>
  )
}

AccommodationTitleLocation.propTypes = { 
  title: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
}

export default AccommodationTitleLocation;