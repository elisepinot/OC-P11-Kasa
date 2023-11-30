import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';
import '../../index.css';
import data from '../../about-collapse.json';
function About() {
   return (
      <div>
         <Banner title='' backgroundImage='banner-about-img.png' />
         <section id='about'>
            {data.map((about) => (
               <Collapse key={about.title} title={about.title} text={about.text} />
            ))}
         </section>
      </div>
   );
}

export default About;
