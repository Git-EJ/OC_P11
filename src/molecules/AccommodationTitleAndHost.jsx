import PropTypes from 'prop-types';

const AccommodationTitleHost = ({ title, location, host, id }) => {
  const [firstName, lastName] = host.name.split(" ")
  return (
    <div key={id} className="accommodation_title_and_host_container">
      <div className="accommodation_title_container"> 
        <div className="accommodation_title_text">{title}</div>
        <div className="accommodation_title_location">{location}</div>
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

AccommodationTitleHost.propTypes = { title: PropTypes.string, location: PropTypes.string, host: PropTypes.object, id: PropTypes.string }

export default AccommodationTitleHost;