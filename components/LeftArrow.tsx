import React from 'react';
import { FaCircleArrowLeft } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react';

const LeftArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      title="Previous"
      className="carousel-btn"
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <FaCircleArrowLeft size={22} />
    </button>
  );
};

export default LeftArrow;