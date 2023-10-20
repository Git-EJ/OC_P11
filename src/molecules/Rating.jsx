import PropTypes from 'prop-types';
import Star from '../atoms/StarSolid';


const Rating = ({ rating, id }) => {
const starColorChecked = '#ff6060'
const starColorUnchecked = '#e3e3e3'
console.log('id', id); {/* TODO: why ID is undefined? want to use it as a KEY id + i */}

  //React transforme le tableau en élément DOM (chaque element du tableau est un composant REACT)
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starColor = i < rating ? starColorChecked : starColorUnchecked
    stars.push(<div key={'star' + i} className="rating_star"><Star color={starColor} /></div>)
  } 

  return (
    <div className="rating_container">     
        {stars}
    </div>
  )
}

Rating.propTypes = { rating: PropTypes.string, id: PropTypes.string }

export default Rating;