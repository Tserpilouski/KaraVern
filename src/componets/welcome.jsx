import fotogirl from '../assets/kara.png';

import '../styles/componets/welcome.scss';

const Welcome = () => {
  return (
    <div className='section__start'>
      <div className='section__left'>
        <h1>Kara Vern</h1>
        <span>BEAUTY-MASTER</span>
        <p>Tworzę piękno które pozostaje na długo.</p>
      </div>
      <img src={fotogirl} alt='' />
    </div>
  );
};

export default Welcome;
