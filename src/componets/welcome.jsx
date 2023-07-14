import fotogirl from '../assets/kara.jpg';

import '../styles/componets/welcome.scss';

import { welcomedata } from '../data/data.js';

const Welcome = () => {
  const parts = window.location.href.split('/');
  const lastPart = parts[parts.length - 1];

  return (
    <div className='section__start'>
      {welcomedata.map((data, key) => {
        if (data.name === lastPart) {
          return (
            <div className='section__left' key={key}>
              <h1>Kara Vern</h1>
              <span>BEAUTY-MASTER</span>
              <span className='section__title'>{data.title}</span>
              <p>{data.text}</p>
            </div>
          );
        }
        return '';
      })}
      <img src={fotogirl} alt='' />
    </div>
  );
};

export default Welcome;
