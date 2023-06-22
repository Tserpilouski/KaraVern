import fotogirl from '../assets/foto.svg';

const StudingHome = () => {
  return (
    <div className='study'>
      <img className='study__img' src={fotogirl} alt='' />
      <div className='study__text'>
        <p>
          Jestem certyfikowaną Linergistką wciąż podnoszącą swoje kwalifikacje.
          Zajmuję się makijażem permanentnym:Brwi metodą ombre, powder,
          microblading oraz hybrydy kresek na powiekach typu eyeliner,
          zagęszczanie linii rzęs oraz Ust metodą 3D jak i sam kontur.Makijaż
          permanentny utrzymuje się na skórze ok. 2-5 lat, jest to kwestia
          metabolizmu skóry i w każdym przypadku może się nieco różnić. Pracuję
          na najwyższej jakości pigmentach, oraz sprzęcie „I Am Ink”, który w
          maju 2017r. otrzymał NAGRODĘ GŁÓWNĄ „Inspiracje Roku” w kategorii
          Urządzenia do Makijażu Permanentnego!
        </p>
        <button>More information</button>
      </div>
    </div>
  );
};

export default StudingHome;
