import { Carousel } from 'antd';
import React from 'react';
import { HeroItem } from './HeroItem';

export const HomeHero = () => {
  return (
    <Carousel
      pauseOnHover={false}
      pauseOnFocus={false}
      speed={1700}
      autoplaySpeed={6000}
      effect="fade"
      dots={false}
      autoplay
    >
      <HeroItem style={'carousel1'} />
      <HeroItem style={'carousel2'} />
      <HeroItem style={'carousel3'} />
    </Carousel>
  );
};
