import fotogirl from '../assets/foto.svg';

import '../styles/componets/welcome.scss';

const WelcomeNoBTN = () => {
  return (
    <div className='section__start'>
      <div className='section__left'>
        <h1 className='tittle'>So, who am I?</h1>
        <p>
          I'm your new social media bestie. My mission is to help small and
          medium-sized businesses grow their audience and brand recognition
          through social media. My goal is to help you understand the power of
          social media and create connections that go beyond the internet.
        </p>
      </div>
      <img src={fotogirl} alt='' />
    </div>
  );
};

export default WelcomeNoBTN;
