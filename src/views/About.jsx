import NavBar from '../componets/NavBar';
import Footer from '../componets/Footer';
import Welcome from '../componets/welcome';

import '../styles/views/aboutView.scss';

const About = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <div className='about'>
        <h2>Changing the digital world</h2>
        <p>
          I believe it's paramount to create a committed and genuine community
          that has a positive influence on people’s lives beyond the online
          sphere. With more people online than ever before, the competition for
          attention is fierce, and you have to work hard to appeal to the
          masses. That's why it's my goal to help you understand the power of
          social media and create connections that go beyond the internet.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
