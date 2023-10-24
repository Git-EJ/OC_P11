import PropTypes from "prop-types";

const Host = ({ host }) => {

  const [firstName, lastName] = host.name.split(" ");

  return (
  <div className="accommodation_host_container"> 
    <div className="accommodation_host_name_container">
      <div className="accommodation_host_name">{firstName}</div>
      <div className="accommodation_host_name">{lastName}</div>
    </div>
    <div className="accommodation_host_img_container">
      <img src={host.picture} alt={host.name} className="accommodation_host_img"/>
    </div>
  </div>
  )
}

Host.propTypes = {host: PropTypes.object.isRequired,}


export default Host;