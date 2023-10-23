import PropTypes from 'prop-types';
import useInnerWidth from './useInnerWidth';


const AccommodationTitleHost = ({ title, location, host }) => {

  const handleResize = useInnerWidth()
  let firstName = ""
  let lastName = ""
  
  if(host) [firstName, lastName] = host.name.split(" ");

  return (
    <div className="accommodation_title_and_host_container">
      <div className="accommodation_title_container"> 
        <h1 className="accommodation_title_text">{title}</h1>
        <h2 className="accommodation_title_location">{location}</h2>
      </div>
      {/* TODO useState pour l'état du window innerwidth??? */}
      {handleResize > 700 && (
        <div className="accommodation_host_container"> 
          <div className="accommodation_host_name_container">
            <div className="accommodation_host_name">{firstName}</div>
            <div className="accommodation_host_name">{lastName}</div>
          </div>
          {host && host.picture && (
            <div className="accommodation_host_img_container">
              <img src={host.picture} alt={host.name} className="accommodation_host_img"/>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

AccommodationTitleHost.propTypes = { 
  title: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  host: PropTypes.object, 
}

export default AccommodationTitleHost;