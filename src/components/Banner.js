import './Banner.css';
import PropTypes from 'prop-types'; // Importe PropTypes
import bannerImgHome from '../assets/banner-img.png';
import bannerImgAbout from '../assets/banner-about-img.png';

function Banner({ title, backgroundImage }) {
   const images = {
      'banner-img.png': bannerImgHome,
      'banner-about-img.png': bannerImgAbout,
   };

   return (
      <div className='banner'>
         {/* If title prop is provided, display it */}
         {title && <h1 className='banner-title'>{title}</h1>}
         <div className='banner-img'>
            {/* Square bracket syntax to access the prop whose key is the value of the backgroundImage variable */}
            <img src={images[backgroundImage]} alt='Image de fond'></img>{' '}
         </div>
      </div>
   );
}

Banner.propTypes = {
   title: PropTypes.string.isRequired,
   backgroundImage: PropTypes.string.isRequired,
};

export default Banner;
