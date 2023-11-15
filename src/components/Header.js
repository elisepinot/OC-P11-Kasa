import NavBar from './NavBar';
import './Header.css';
function Header() {
   return (
      <header>
         <div>
            <img src={require('../assets/red-logo.svg').default} alt='logo' />
         </div>
         <NavBar />
      </header>
   );
}

export default Header;
