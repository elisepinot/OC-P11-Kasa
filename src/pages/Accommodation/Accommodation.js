import { useParams, Navigate } from 'react-router-dom';
import accommodationsData from '../../data.json';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import './Accommodation.css';
function Accommodation() {
   const { id } = useParams();
   const apartment = accommodationsData.find((apt) => apt.id === id);

   if (!apartment) {
      return <Navigate to='/ErrorPage' />;
   }

   const [firstName, lastName] = apartment.host.name.split(' ');

   return (
      <section>
         <Carousel />
         <div className='container-details'>
            <div>
               <h1>{apartment.title}</h1>
               <h2>{apartment.location}</h2>

               <ul className='tags-container'>
                  {apartment.tags.map((tag) => (
                     <li className='tag' key={tag}>
                        {tag}
                     </li>
                  ))}
               </ul>
            </div>
            <div className='rating-host-container'>
               <div className='host-container'>
                  <div className='host-name'>
                     <p>{firstName}</p>
                     <p>{lastName}</p>
                  </div>
                  <img src={apartment.host.picture} alt={apartment.host.name}></img>
               </div>
               <Rating rating={apartment.rating} />
            </div>
         </div>
         <div className='collapse-container-acc'>
            <Collapse title='Description' text={apartment.description} />
            <Collapse title='Équipements' text={apartment.equipments} />
         </div>
      </section>
   );
}

export default Accommodation;
