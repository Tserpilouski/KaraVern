import NavBar from '../componets/NavBar';
import Welcome from '../componets/welcome';
import ImageSlider from '../componets/ImageSlider';
import StudingHome from '../componets/StudingHome';
import Footer from '../componets/Footer';

import '../styles/views/homeView.scss';

const Home = () => {
  const slides = [
    { url: 'http://localhost:3000/foto1.jpeg', title: 'beach' },
    { url: 'http://localhost:3000/foto2.jpeg', title: 'beach' },
    { url: 'http://localhost:3000/foto3.jpg', title: 'beach' },
  ];

  return (
    <div>
      <NavBar />
      <Welcome />
      <div className='section-slide'>
        <h2 className='section-slide__tittle'>УСЛУГИ ПЕРМАНЕНТНОГО МАКИЯЖА</h2>
        <div className='section-slide__one'>
          <div className='containerStyles'>
            <ImageSlider slides={slides} />
          </div>
          <div className='section-slide__text'>
            <h3>Перманентный татуаж бровей</h3>
            <p>
              Эффектный образ с идеальной симметрией за 1,5 часа в современной
              студии
            </p>
            <button>Получить консультацию</button>
          </div>
        </div>
        <div className='section-slide__one'>
          <div className='section-slide__text'>
            <h3>Перманентный татуаж бровей</h3>
            <p>
              Эффектный образ с идеальной симметрией за 1,5 часа в современной
              студии
            </p>
            <button>Получить консультацию</button>
          </div>
          <div className='containerStyles containerStyles_mod'>
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className='section-slide__one'>
          <div className='containerStyles'>
            <ImageSlider slides={slides} />
          </div>
          <div className='section-slide__text'>
            <h3>Перманентный татуаж бровей</h3>
            <p>
              Эффектный образ с идеальной симметрией за 1,5 часа в современной
              студии
            </p>
            <button>Получить консультацию</button>
          </div>
        </div>
      </div>
      <StudingHome />
      <Footer />
    </div>
  );
};

export default Home;
