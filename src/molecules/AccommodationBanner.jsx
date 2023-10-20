import PropTypes from 'prop-types';

const AccommodationBanner = ({pictures, title, id}) => (
  <div key={id} className="accommodation_banner_container">
    <img src={pictures} alt= {title} className="accommodation_banner_img" />
  </div>
)

AccommodationBanner.propTypes = { pictures: PropTypes.string, title: PropTypes.string, id: PropTypes.string }

export default AccommodationBanner;
