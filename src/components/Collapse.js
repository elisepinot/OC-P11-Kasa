import PropTypes from 'prop-types';
import { useState } from 'react';
import arrow from '../assets/arrow.svg';
import './Collapse.css';
function Collapse({ title, text }) {
   const [isOpen, setIsOpen] = useState(false);
   const toggleCollapse = () => {
      setIsOpen(!isOpen);
   };

   // Array.isArray(text) checks if text prop is an array

   const textContent = Array.isArray(text)
      ? text.map((item, index) => <p key={index}>{item}</p>)
      : text;

   return (
      <div className='collapse-container'>
         <div className='collapse-header' onClick={toggleCollapse}>
            <h2>{title}</h2>
            <img className={isOpen ? 'open' : ''} src={arrow} alt={isOpen ? 'Fermé' : 'Ouvert'} />
         </div>
         {isOpen && <div className={`collapse-content ${isOpen ? 'open' : ''}`}>{textContent}</div>}
      </div>
   );
}

export default Collapse;

// 'text' prop can be a string or an array of strings
Collapse.propTypes = {
   title: PropTypes.string,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};
