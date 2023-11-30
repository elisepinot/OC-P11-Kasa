import './Footer.css';
function Footer() {
   return (
      <footer>
         <img src={require('../assets/white-logo.svg').default} alt='logo'></img>
         <p>© 2023 Kasa. All rights reserved</p>
      </footer>
   );
}

export default Footer;
