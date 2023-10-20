import PropTypes from 'prop-types';
import ChevronRight from '../atoms/ChevronRight';
import ChevronLeft from '../atoms/ChevronLeft';
import { useState } from 'react';

const AccommodationBanner = ({pictures, title, id}) => {
  const [currentPicture, setCurrentPicture] = useState(0)
  const clickLeft = () => currentPicture === 0 ? setCurrentPicture(pictures.length - 1) : setCurrentPicture(currentPicture - 1) // verifie si on est sur la premiere image, si oui on passe à la derniere, sinon on passe a l'image precedente
  const clickRight = () => currentPicture === pictures.length - 1 ? setCurrentPicture(0) : setCurrentPicture(currentPicture + 1) // verifie si on est sur la derniere image, si oui on passe à la premiere, sinon on passe a l'image suivante

  return (
    <div key={id} className="accommodation_banner_container">
      <div className='accommodation_banner_chevron_left' onClick={() => clickLeft()}><ChevronLeft /></div>
      <img src={pictures[currentPicture]} alt= {title} className="accommodation_banner_img" />
      <div className='accommodation_banner_chevron_right' onClick={() => clickRight()}><ChevronRight /> </div>
    </div>
  )
}

AccommodationBanner.propTypes = { pictures: PropTypes.array, title: PropTypes.string, id: PropTypes.string }

export default AccommodationBanner;
