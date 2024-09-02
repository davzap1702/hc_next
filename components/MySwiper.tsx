'use client';
import React from 'react';
import { testimonies } from './testimonials/seeder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonial } from './testimonials/Testimonial';
import { Navigation } from 'swiper/modules';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import 'swiper/css';

export const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 90,
          width: 210,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 90,
          width: 850,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 100,
          width: 1400,
        },
      }}
    >
      <div className="carousel-cta">
        <LeftArrow />
        <RightArrow />
      </div>
      {testimonies.map(({ img, name, company, description, id, icon }) => (
        <SwiperSlide key={id}>
          <Testimonial
            img={img}
            name={name}
            company={company}
            description={description}
            icon={icon}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
