import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
   return (
      <nav>
         <Link to='/oc-kasa'>Accueil</Link>
         <Link to='/about'>A propos</Link>
      </nav>
   );
}

export default NavBar;
