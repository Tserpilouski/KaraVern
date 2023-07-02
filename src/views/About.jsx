import NavBar from '../componets/NavBar';
import Welcome from '../componets/welcome';
import StudingHome from '../componets/StudingHome';
import Footer from '../componets/Footer';

import insta1 from '../assets/insta/insta1.png';
import insta2 from '../assets/insta/insta2.png';
import insta3 from '../assets/insta/insta3.png';
import insta4 from '../assets/insta/insta4.png';
import insta5 from '../assets/insta/insta5.png';
import insta6 from '../assets/insta/insta6.png';
import insta7 from '../assets/insta/insta7.png';
import insta8 from '../assets/insta/insta8.png';
import insta9 from '../assets/insta/insta9.png';

import '../styles/views/aboutView.scss';

const About = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <div className='about'>
        <h2>Każda z nas zasługuje na to by czuć się pięknie!</h2>
        <p>
          Witam serdecznie na mojej stronie. Nazywam się Kara Vern. Makijażem
          permanentnym zajmuję się od 2018r. Zawód linergisty stał się nie tylko
          moją pracą, ale także moją pasją. Moim celem jest sprawiać aby każda
          klientka po zabiegu czuła się piękniejsza i pewniejsza siebie.
        </p>
        <h2>Zapraszam do obserwowania na Instagram</h2>
        <div className='about__fotobox'>
          <img src={insta1} alt='' />
          <img src={insta2} alt='' />
          <img src={insta3} alt='' />
          <img src={insta4} alt='' />
          <img src={insta5} alt='' />
          <img src={insta6} alt='' />
          <img src={insta7} alt='' />
          <img src={insta8} alt='' />
          <img src={insta9} alt='' />
        </div>
      </div>
      <StudingHome />
      <Footer />
    </div>
  );
};

export default About;
