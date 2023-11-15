// import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import data from '../../data.json';
import Card from '../../components/Card';

// function Home() {
//    const [apartments, setApartments] = useState([]);

//    useEffect(() => {
//       // Charge les données depuis data.json lors du montage du composant
//       setApartments(data);
//    }, []);

//    return (
//       <main>
//          <Banner />
//          <div id='gallery'>
//             {apartments.map((apartment) => (
//                <Card key={apartment.id} {...apartment} />
//             ))}
//          </div>
//       </main>
//    );
// }

function Home() {
   return (
      <main>
         <Banner />
         <div id='gallery'>
            {data.map((apartment) => (
               <Card key={apartment.id} {...apartment} />
            ))}
         </div>
      </main>
   );
}

export default Home;
