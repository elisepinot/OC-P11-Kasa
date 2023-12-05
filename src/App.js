// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accommodation from './pages/Accommodation/Accommodation';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Routes>
               <Route path='/oc-kasa' element={<Home />}></Route>
               <Route path='/about' element={<About />}></Route>
               <Route path='/accommodation/:id' element={<Accommodation />}></Route>
               <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default App;

// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <Root />,
//       errorElement: <ErrorPage />,
//       children: [
//          { path: '/', element: <Home /> },
//          { path: 'accommodation/:id', element: <Accommodation /> },
//          { path: 'about', element: <About /> },
//       ],
//    },
// ]);

// function Root() {
//    return (
//       <>
//          <Header />
//          <Outlet />
//          <Footer />
//       </>
//    );
// }

// function App() {
//    return <RouterProvider router={router} />;
// }

//Je commence par définir ma route principale : c'est le chemin racine + je précise l'élément
//Plutôt que de définir d'autres routes, on va dire que cette route a des enfants : on ajoute la propriété children, qui sera un tableau de nouvelles routes
//Composant Outlets = mets les éléments des routes enfants à ce niveau-là
