import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types'; // Importe PropTypes

function Card(props) {
   return (
      <article className='accomodation-card'>
         <Link to={`/accommodation/${props.id}`}>
            <div>
               <img src={props.cover} alt={props.title} />
               <h3>{props.title}</h3>
               <p>📍 {props.location}</p>
            </div>
         </Link>
      </article>
   );
}

Card.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   cover: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
};

export default Card;

// Code below is also possible: destructuration
// function Card({ id, title, cover, location }) {
//    return (
//       <article className='accomodation-card'>
//          <Link to={`/accommodation/${id}`}>
//             <div>
//                <img src={cover} alt={title} />
//                <h3>{title}</h3>
//                <p>📍 {location}</p>
//             </div>
//          </Link>
//       </article>
//    );
// }
