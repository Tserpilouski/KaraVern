import fotogirl from '../assets/foto.svg';

const StudingHome = () => {
  return (
    <div className='study'>
      <img className='study__img' src={fotogirl} alt='' />
      <div className='study__text'>
        <h2>Styding programs</h2>
        <p>
          <span>P</span>it is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is.
        </p>
        <p>
          <span>P</span>it is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is.
        </p>
        <p>
          <span>P</span>it is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is.
        </p>
        <button>More information</button>
      </div>
    </div>
  );
};

export default StudingHome;
