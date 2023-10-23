import PropTypes from 'prop-types';
import Star from '../atoms/StarSolid';

const starColor = ['#e3e3e3', '#ff6060']

const Rating = ({ rating, max=5 }) => {

  //React transforme le tableau en élément DOM (chaque element du tableau est un composant REACT)
  const stars = new Array(max).fill(0).map((_, i) => i);
  
  return (
    <div className="rating_container">     
      {stars.map(s =>
        <div key={`star-${s}`} className="rating_star">
          <Star color={starColor[+rating > +s ? 1 : 0]} />
        </div>
      )}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string,
  max: PropTypes.number
}

export default Rating;