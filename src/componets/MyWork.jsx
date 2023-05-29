import fotobrew from '../assets/brovi.svg';

const MyWork = ({ text1, text2, text3, img }) => {
  return (
    <div className='container myworks'>
      <h2 className='myworks_tittle'>Перманентный татуаж бровей</h2>
      <div className='work'>
        <div className='work__img'>
          <img src={fotobrew} alt='' />
          <img src={fotobrew} alt='' />
        </div>
        <div className='work__text'>
          <p>
            I'm your new social media bestie. My mission is to help small and
            medium-sized businesses grow their audience and brand recognition
            through social media. My goal is to help you understand the power of
            social media and create connections that go beyond the internet.
          </p>
          <p>
            I'm your new social media bestie. My mission is to help small and
            medium-sized businesses grow their audience and brand recognition
            through social media. My goal is to help you understand the power of
            social media and create connections that go beyond the internet.
          </p>
          <p>
            I'm your new social media bestie. My mission is to help small and
            medium-sized businesses grow their audience and brand recognition
            through social media. My goal is to help you understand the power of
            social media and create connections that go beyond the internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
