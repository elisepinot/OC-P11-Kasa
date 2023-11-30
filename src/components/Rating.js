import './Rating.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating }) {
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
