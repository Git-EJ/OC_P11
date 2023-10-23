import PropTypes from 'prop-types';

const AccommodationTitleHost = ({ title, location, host }) => {
  const [firstName, lastName] = host.name.split(" ")
  return (
    <div className="accommodation_title_and_host_container">
      <div className="accommodation_title_container"> 
        <h1 className="accommodation_title_text">{title}</h1>
        <h2 className="accommodation_title_location">{location}</h2>
      </div>
      <div className="accommodation_host_container"> 
        <div className="accommodation_host_name_container">
          <div className="accommodation_host_name">{firstName}</div>
          <div className="accommodation_host_name">{lastName}</div>
        </div>
        <div className="accommodation_host_img_container">
          <img src={host.picture} alt={host.name} className="accommodation_host_img"/>
        </div>
      </div>
    </div>
  )
}

AccommodationTitleHost.propTypes = { 
  title: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  host: PropTypes.object.isRequired }

export default AccommodationTitleHost;