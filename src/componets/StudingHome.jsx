import fotogirl from '../assets/kara_two.png';

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
          metabolizmu skóry i w każdym przypadku może się nieco różnić.
        </p>
        <p>
          Pracuję na najwyższej jakości pigmentach, oraz sprzęcie „I Am Ink”,
          który w maju 2017r. otrzymał NAGRODĘ GŁÓWNĄ „Inspiracje Roku” w
          kategorii Urządzenia do Makijażu Permanentnego!
        </p>
      </div>
    </div>
  );
};

export default StudingHome;
