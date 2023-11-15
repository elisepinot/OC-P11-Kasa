import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import '../../index.css';
function About() {
   return (
      <main>
         <Banner />
         <section id='about'>
            <Collapse title='Menu déroulant 1'>
               <p>Contenu du menu déroulant 1...</p>
            </Collapse>
            <Collapse title='Menu déroulant 2'>
               <p>Contenu du menu déroulant 2...</p>
            </Collapse>
         </section>
      </main>
   );
}

export default About;
