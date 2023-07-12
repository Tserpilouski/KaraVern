import fotogirl from '../assets/kara.png';

import '../styles/componets/welcome.scss';

import { welcome } from '../data/data.js';

const Welcome = () => {
  const parts = window.location.href.split('/');
  const lastPart = parts[parts.length - 1];

  return (
    <div className='section__start'>
      {welcome.map((data, key) => {
        if (data.name === lastPart) {
          return (
            <div className='section__left' key={key}>
              <h1>Kara Vern</h1>
              <span>BEAUTY-MASTER</span>
              <p>{data.title}</p>
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
