/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';

import { HomeHero } from '@/components/layouts/hero/HomeHero';
import { Services } from '@/components/layouts/services/Services';
import { IMAGES } from '@/constants';
import { MySwiper } from '@/components/MySwiper';
import { FaCircleRight } from 'react-icons/fa6';

export default async function Homepage() {
  return (
    <>
      <HomeHero />
      <Services />
      <section className="section">
        <div className="section__container container">
          <div className="section__img">
            <Image layout='responsive' width={500} height={300} src={IMAGES.support1} alt="Support image" />
          </div>
          <div className="section__text">
            <h2>One-on-One Expert Support</h2>
            <p>
              Our One-on-One Expert Support offers personalized guidance and
              tailored assistance to individuals seeking expert help. We provide
              customized solutions, skill development, and practical
              recommendations to help you overcome challenges and achieve your
              goals. With flexible engagement options and a focus on
              confidentiality, our service empowers you to succeed.
            </p>
          </div>
        </div>
      </section>

      <hr className="container" />

      <section className="section-2">
        <div className="section-2__container container">
          <div className="section-2__img">
            <Image layout='responsive' priority width={500} height={300} src={IMAGES.support2} alt="Support image" />
          </div>
          <div className="section-2__text">
            <h2>Cost Efficient Service</h2>
            <p>
              Our Cost-Efficient Service offers value optimization, customized
              cost strategies, and streamlined processes to help you achieve
              your goals while minimizing costs. We'll analyze your current
              transportation processes and offer tailored assessments to
              identify areas for cost savings without compromising quality.
            </p>
          </div>
        </div>
      </section>

      <section className="join-info">
        <div className="join-info__container container">
          <div className="join-info__text">
            <h2>Want to know how we can help your business?</h2>
          </div>
          <div className="join-info__cta">
            <Link href='/contact' className="primary-btn">
              <span>Contact us online</span>
              <FaCircleRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonies">
        <div className="testimonies__container container">
          <h2>Testimonials</h2>
          <MySwiper />
        </div>
      </section>
    </>
  );
}