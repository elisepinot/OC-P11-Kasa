import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
   return (
      <div className='App'>
         <Header />
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/accomodation/:id' element={<Accomodation />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
