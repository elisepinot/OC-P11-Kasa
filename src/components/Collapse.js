import PropTypes from 'prop-types';
import { useState } from 'react';
import arrowClose from '../assets/arrow-close.svg';
import arrowOpen from '../assets/arrow-open.svg';
import './Collapse.css';
function Collapse({ title, children }) {
   const [isOpen, setIsOpen] = useState(false);
   const toggleCollapse = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className='collapse-container'>
         <div className='collapse-header' onClick={toggleCollapse}>
            <h2>{title}</h2>
            <img src={isOpen ? arrowOpen : arrowClose} alt={isOpen ? 'Fermé' : 'Ouvert'} />{' '}
         </div>
         {isOpen && <div className='collapse-content'>{children}</div>}
      </div>
   );
}

export default Collapse;

Collapse.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
};
