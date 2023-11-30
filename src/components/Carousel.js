import './Carousel.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import appartmentsData from '../data.json';
function Carousel() {
   const { id } = useParams();
   const apartment = appartmentsData.find((apt) => apt.id === id);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const totalImages = apartment.pictures.length;

   const handlePrevImage = () => {
      setCurrentImageIndex((currentIndex) =>
         currentIndex === 0 ? apartment.pictures.length - 1 : currentIndex - 1,
      );
   };

   const handleNextImage = () => {
      setCurrentImageIndex((currentIndex) =>
         currentIndex === apartment.pictures.length - 1 ? 0 : currentIndex + 1,
      );
   };

   return (
      <div className='carousel-container'>
         {apartment.pictures.length > 1 && (
            <button className='arrow arrow-back' onClick={handlePrevImage}>
               <img src={require('../assets/arrow_back.svg').default} alt='Photo précédente'></img>
            </button>
         )}
         {apartment.pictures.length > 1 && (
            <div className='pictures-counter'>
               {currentImageIndex + 1} / {totalImages}
            </div>
         )}
         <img
            src={apartment.pictures[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className='carousel-img'
         ></img>
         {apartment.pictures.length > 1 && (
            <button className='arrow arrow-next' onClick={handleNextImage}>
               <img src={require('../assets/arrow_forward.svg').default} alt='Photo suivante'></img>
            </button>
         )}
      </div>
   );
}

export default Carousel;
