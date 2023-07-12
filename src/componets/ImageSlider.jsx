import { useState } from 'react';

import '../styles/componets/ImageSlider.scss';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className='sliderStyles'>
      <div>
        <div className='leftArrowStyles' onClick={goToPrevious}>
          ❰
        </div>
        <div className='rightArrowStyles' onClick={goToNext}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div
            className='dotStyle'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
