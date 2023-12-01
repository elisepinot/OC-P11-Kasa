import Banner from '../../components/Banner';
import data from '../../data.json';
import Card from '../../components/Card';

function Home() {
   return (
      <div>
         <Banner title='Chez vous, partout et ailleurs' backgroundImage='banner-img.png' />
         <div id='gallery'>
            {data.map((apartment) => (
               <Card key={apartment.id} {...apartment} />
            ))}
         </div>
      </div>
   );
}

export default Home;
