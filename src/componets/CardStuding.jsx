import { Study } from '../data/data.js';
import { useNavigate } from 'react-router-dom';

const CardStuding = () => {
  let navigate = useNavigate();

  return (
    <div>
      {Study.map((card, key) => {
        return (
          <div className='card' key={key}>
            <img className='img' src={card.imgpath} alt={card.title} />
            <div className='card__right'>
              <h3 className='card__title'>{card.title}</h3>
              <p>{card.text}</p>
              <button
                onClick={() => {
                  navigate(card.url);
                }}
              >
                PRZEJDŹ DO KURSU
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStuding;
