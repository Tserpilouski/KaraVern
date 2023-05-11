import fotogirl from '../assets/foto.svg';

import '../styles/welcome.scss';

const Welcome = () => {
  return (
    <div className='section__start'>
      <div className='section__left'>
        <h1>МАКИЯЖ ДЛЯ СЕБЯ</h1>
        <span>БЮТИ-МАСТЕР</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisis voluptates illutem
          repellat corrupti harum earum vol Sit accusantium nisi est?
        </p>
        <button>Узнать Больше</button>
      </div>
      <img src={fotogirl} alt='' />
    </div>
  );
};

export default Welcome;
