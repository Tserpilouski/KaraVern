import fotobrew from '../assets/brovi.svg';

const CardStuding = () => {
  return (
    <div className='container'>
      <div className='card'>
        <img src={fotobrew} alt='' />
        <div className='card_right-text'>
          <h3>Перманентный татуаж бровей</h3>
          <p>
            Эффектный образ с идеальной симметрией за 1,5 часа в современной
            студии
          </p>
          <button>получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default CardStuding;
