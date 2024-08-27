import React from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react';

const RightArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      title="Next"
      onClick={() => swiper.slideNext()}
      className="carousel-btn"
    >
      <FaCircleArrowRight size={22} />
    </button>
  );
};

export default RightArrow;
