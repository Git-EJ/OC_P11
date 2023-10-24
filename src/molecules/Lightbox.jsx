import PropTypes from 'prop-types';
import ChevronRight from '../atoms/ChevronRight';
import ChevronLeft from '../atoms/ChevronLeft';
import HouseIcon from '../atoms/HouseIcon';
import { useState } from 'react';

const Lightbox = ({pictures, title}) => {

  const [currentPicture, setCurrentPicture] = useState(0)
  const clickLeft = () => currentPicture === 0 ? setCurrentPicture(pictures.length - 1) : setCurrentPicture(currentPicture - 1) 
  const clickRight = () => currentPicture === pictures.length - 1 ? setCurrentPicture(0) : setCurrentPicture(currentPicture + 1)

  if (pictures.length === 0) {
    return (
      <div className='accommodation_house_icon_container'>
        <div className='accommodation_house_icon_img'><HouseIcon /></div>
        <div className='accommodation_house_icon_text'>Pas d&apos;images de disponibles</div>
      </div>
    )
  }

  if (pictures.length === 1) {
    return (
      <div className="lightbox_container">
        <img src={pictures[0]} alt= {title} className="lightbox_img" />
        <div className="lightbox_counter">{currentPicture + 1} / {pictures.length}</div>
      </div>
    )
  } 

  return (
    <div className="lightbox_container">
      <img src={pictures[currentPicture]} alt= {title} className="lightbox_img" />
      <div className="lightbox_counter">{currentPicture + 1} / {pictures.length}</div>
      <div className='lightbox_chevron_left' onClick={() => clickLeft()}><ChevronLeft /></div>
      <div className='lightbox_chevron_right' onClick={() => clickRight()}><ChevronRight /> </div>
    </div>
  )
}

Lightbox.propTypes = { 
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Lightbox;
