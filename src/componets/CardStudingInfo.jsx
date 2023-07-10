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
            <span className='title'>
              Dzień 1 <br /> (czas trwania 4 godziny)
            </span>
            <span className='title'>
              Dzień 2 <br /> (czas trwania 2 godziny)
            </span>
            <span className='title'>
              Dzień 3 <br /> (czas trwania 6 godziny)
            </span>
            <span className='title'>
              Dzień 4 <br /> (czas trwania 10 godziny)
            </span>
            <span className='title'>
              Dzień 5 <br /> (czas trwania 1 godziny)
            </span>
            <span className='title'>
              Dzień 6 <br /> (czas trwania 1 godziny)
            </span>
          </div>
          <img className='centrel-line' src={line} alt='' />
          <div className='right-column'>
            <div className='right-column__item '>
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
            <div className='right-column__item '>
              <span className='card-shedule__title'>
                Narzędzia do makijażu. Koło kolorów:
              </span>
              <ul>
                <li>Najważniejsze pędzle do makijażu dla siebie</li>
                <li>Przewodnik po kształtach, kłaczkach i producentach</li>
                <li>Właściwa pielęgnacja bez uszkadzania szczotek</li>
                <li>
                  Co to jest koło kolorów? Jak wykorzystać wiedzę o kombinacjach
                  kolorów w makijażu?
                </li>
              </ul>
            </div>
            <div className='right-column__item '>
              <span className='card-shedule__title'>
                Nowoczesny makijaż wieczorowy:
              </span>
              <ul>
                <li>
                  Techniki i podstawowe zasady pracy z tonacją w stylizacjach
                  wieczorowych
                </li>
                <li>
                  Sekrety stosowania gęstszej, bardziej intensywnej, ale
                  naturalnie wyglądającej korekty
                </li>
                <li>
                  Schemat krok po kroku tworzenia idealnie spłaszczonej strzałki
                </li>
                <li>
                  Specjalne funkcje do pracy z jasnymi akcentami w makijażu
                </li>
              </ul>
            </div>
            <div className='right-column__item'>
              <span className='card-shedule__title'>
                Strzałki i jasne usta v2.0:
              </span>
              <ul>
                <li>
                  Czy aktywne kości policzkowe to już przeszłość czy główny
                  element korekcji?
                </li>
                <li>Czego należy unikać podczas pracy z tonami?</li>
                <li>Opcja strzałki, która pasuje do każdego typu oczu</li>
                <li>Trzy proste kroki do stworzenia idealnej strzały</li>
                <li>Jak włączyć jasną szminkę do swojego wyglądu?</li>
              </ul>
            </div>
            <div className='right-column__item right-column__item_mod'>
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
