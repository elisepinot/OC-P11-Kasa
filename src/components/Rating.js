import './Rating.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
   //Array.from({ length: 5 }) creates an array of 5 elements
   //underscore is used because the first parameter of map is not used in the core of the function

   const stars = Array.from({ length: 5 }).map((_, index) => (
      <FontAwesomeIcon
         key={index}
         icon={faStar}
         className={index < rating ? 'star-pink' : 'star-grey'}
      />
   ));

   return <div className='rating'>{stars}</div>;
}

Rating.propTypes = {
   rating: PropTypes.string.isRequired,
};

export default Rating;
