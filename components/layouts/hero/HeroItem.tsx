/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface Props {
  style: string,
}

export const HeroItem = ({ style }:Props) => {
  return (
    <div className={style}>
      <section className="container hero">
        <div className=" hero__description">
          <h1>Innovative solutions to move your business forward.</h1>
          <p style={{ marginBottom: '4rem' }}>
          At Huecker Consulting, we provide expert technology consulting
          services to transportation companies of all sizes. We offer
          future-focused solutions to help you navigate technology's
          ever-changing landscape and achieve sustainable growth. Contact us
          today to unlock your organization's true technological potential.
          </p>
        </div>
        <div className="hero__cta">
          <Link
            style={{ display: 'flex', width: 'fit-content', alignItems: 'center' }}
            aria-label="Learn more about our services"
            href={'/services'}
            className="primary-btn hero_btn"
          >
            <span> Learn more </span>
            <FaAngleRight />
          </Link>
        </div>
      </section>
    </div>
  );
};
