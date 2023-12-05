import NavBar from './NavBar';
import './Header.css';
function Header() {
   return (
      <header>
         <div>
            <a href='/oc-kasa'>
               <img src={require('../assets/red-logo.svg').default} alt='logo' />
            </a>
         </div>
         <NavBar />
      </header>
   );
}

export default Header;
