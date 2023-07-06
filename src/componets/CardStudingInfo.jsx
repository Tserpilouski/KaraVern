import checkimg from '../assets/checkimg.svg';
import iconstep_1 from '../assets/steps/iconstep_1.svg';
import iconstep_2 from '../assets/steps/iconstep_2.svg';
import iconstep_3 from '../assets/steps/iconstep_3.svg';
import iconstep_4 from '../assets/steps/iconstep_4.svg';

import line from '../assets/central-line.svg';

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
      {/* ------------- */}
      <h2>Program kursu:</h2>
      <div className='card-info_shedule'>
        <div className='card-shedule'>
          <div className='left-column'>
            <span className='title_1 title'>
              Dzień 1 <br /> (czas trwania 4 godziny)
            </span>
            <span className='title_2 title'>
              Dzień 2 <br /> (czas trwania 2 godziny)
            </span>
            <span className='title_3 title'>
              Dzień 3 <br /> (czas trwania 6 godziny)
            </span>
            <span className='title_4 title'>
              Dzień 4 <br /> (czas trwania 10 godziny)
            </span>
            <span className='title_5 title'>
              Dzień 5 <br /> (czas trwania 1 godziny)
            </span>
            <span className='title_6 title'>
              Dzień 6 <br /> (czas trwania 1 godziny)
            </span>
          </div>
          <img className='centrel-line' src={line} alt='' />
          <div className='right-column'>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Teoria. Wszystko o przygotowaniu skóry do makijażu:
              </span>
              <ul>
                <li>Część wprowadzająca. Rodzaje skóry</li>
                <li>
                  Prawidłowa pielęgnacja i idealne przygotowanie skóry do
                  makijażu
                </li>
                <li>
                  Podstawy dekoracyjne - niezbędny produkt czy marketingowy
                  chwyt?
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Kosmetyki. Podstawowe zasady wyboru produktów:
              </span>
              <ul>
                <li>Cechy zawodu wizażysty</li>
                <li>
                  Szczegółowy przegląd najlepszych i niezbędnych produktów do
                  podstawowej kosmetyczki
                </li>
                <li>Przewodnik krok po kroku, jak wybrać własne kosmetyki</li>
                <li>
                  Demonstracja i przegląd produktów z różnych segmentów cenowych
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Teoria. Wszystko o przygotowaniu skóry do makijażu:
              </span>
              <ul>
                <li>Część wprowadzająca. Rodzaje skóry</li>
                <li>
                  Prawidłowa pielęgnacja i idealne przygotowanie skóry do
                  makijażu
                </li>
                <li>
                  Podstawy dekoracyjne - niezbędny produkt czy marketingowy
                  chwyt?
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Teoria. Wszystko o przygotowaniu skóry do makijażu:
              </span>
              <ul>
                <li>Część wprowadzająca. Rodzaje skóry</li>
                <li>
                  Prawidłowa pielęgnacja i idealne przygotowanie skóry do
                  makijażu
                </li>
                <li>
                  Podstawy dekoracyjne - niezbędny produkt czy marketingowy
                  chwyt?
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Teoria. Wszystko o przygotowaniu skóry do makijażu:
              </span>
              <ul>
                <li>Część wprowadzająca. Rodzaje skóry</li>
                <li>
                  Prawidłowa pielęgnacja i idealne przygotowanie skóry do
                  makijażu
                </li>
                <li>
                  Podstawy dekoracyjne - niezbędny produkt czy marketingowy
                  chwyt?
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Teoria. Wszystko o przygotowaniu skóry do makijażu:
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------------ */}
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
