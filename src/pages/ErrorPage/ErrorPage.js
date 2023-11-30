import { Link } from 'react-router-dom';
// import { useRouteError } from 'react-router-dom';

function ErrorPage() {
   // const error = useRouteError();
   // console.log(error);

   return (
      <div className='error-page-container'>
         <p className='error-page error-page-title'>404</p>
         <p className='error-page error-page-text'>Oups! La page que vous demandez n'existe pas.</p>
         <p className='error-page error-page-link'>
            <Link to='/'>Retourner sur la page d'accueil</Link>
         </p>
      </div>
   );
}

export default ErrorPage;
