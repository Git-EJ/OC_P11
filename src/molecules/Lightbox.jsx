import PropTypes from 'prop-types';
import ChevronRight from '../atoms/ChevronRight';
import ChevronLeft from '../atoms/ChevronLeft';
import { useState } from 'react';

const Lightbox = ({pictures, title}) => {

  const [currentPicture, setCurrentPicture] = useState(0)

  if (pictures.length === 0) return null

  if (pictures.length === 1) {
    return (
      <div className="accommodation_banner_container">
        <img src={pictures[0]} alt= {title} className="accommodation_banner_img" />
      </div>
    )
  } 

  const clickLeft = () => currentPicture === 0 ? setCurrentPicture(pictures.length - 1) : setCurrentPicture(currentPicture - 1) 
  const clickRight = () => currentPicture === pictures.length - 1 ? setCurrentPicture(0) : setCurrentPicture(currentPicture + 1)

  return (
    <div className="accommodation_banner_container">
      <img src={pictures[currentPicture]} alt= {title} className="accommodation_banner_img" />
      <div className="accommodation_banner_counter">{currentPicture + 1} / {pictures.length}</div>
      <div className='accommodation_banner_chevron_left' onClick={() => clickLeft()}><ChevronLeft /></div>
      <div className='accommodation_banner_chevron_right' onClick={() => clickRight()}><ChevronRight /> </div>
    </div>
  )
}

Lightbox.propTypes = { 
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Lightbox;
