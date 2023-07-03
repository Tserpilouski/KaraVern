import checkimg from '../assets/checkimg.svg';
import iconstep_1 from '../assets/steps/iconstep_1.svg';
import iconstep_2 from '../assets/steps/iconstep_2.svg';
import iconstep_3 from '../assets/steps/iconstep_3.svg';
import iconstep_4 from '../assets/steps/iconstep_4.svg';

const CardStudingInfo = () => {
  return (
    <div className='cardinfo'>
      <h2>Po ukończeniu kursu będziesz</h2>
      <div className='checkbox'>
        <div className='checkbox__item'>
          <img src={checkimg} alt='' />
          <p>
            Dowiedz się wszystkiego o najbardziej aktualnych i popularnych
            technikach makijażu i naucz się pracować z różnymi cechami:
            opadające powieki, problematyczna skóra, makijaż liftingujący
          </p>
        </div>
        <div className='checkbox__item'>
          <img src={checkimg} alt='' />
          <p>
            Dzięki kompleksowemu blokowi aktualnych informacji teoretycznych
            nauczysz się, jak rozumieć różnorodne produkty kosmetyczne na
            profesjonalnym poziomie
          </p>
        </div>
        <div className='checkbox__item'>
          <img src={checkimg} alt='' />
          <p>
            Zdobądź nowy zawód i zmaksymalizuj swoją wiedzę i umiejętności w
            świecie makijażu.
          </p>
        </div>
      </div>
      <h2>Program kursu:</h2>
      <div className='card-info_shedule'>
        <h2>dd</h2>
      </div>
      <h2>Jak przebiega kurs?</h2>
      <div className='step'>
        <div className='stepbox'>
          <div className='stepbox__top'>
            <span>1</span>
            <img src={iconstep_1} alt='' />
          </div>
          <p>Kupujesz kurs i otrzymujesz E-mail z moimi osobistymi notatkami</p>
        </div>
        <div className='stepbox'>
          <div className='stepbox__top'>
            <span>2</span>
            <img src={iconstep_2} alt='' />
          </div>
          <p>Pobierz podręcznik i zeszyt ćwiczeń i rozpocznij naukę</p>
        </div>
        <div className='stepbox'>
          <div className='stepbox__top'>
            <span>3</span>
            <img src={iconstep_3} alt='' />
          </div>
          <p>Zdobycie praktycznej wiedzy podczas pracy z klientami</p>
        </div>
        <div className='stepbox'>
          <div className='stepbox__top'>
            <span>4</span>
            <img src={iconstep_4} alt='' />
          </div>
          <p>Na koniec kursu zdajesz egzamin i otrzymujesz certyfikat </p>
        </div>
      </div>
    </div>
  );
};

export default CardStudingInfo;
