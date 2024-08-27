/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

export interface ITestimonial {
    img: string;
    name: string;
    company: string;
    title?: string;
    description: string;
    icon?: React.JSX.Element;
    id?: number;
}

export const Testimonial = ({ img, name, company, description }: ITestimonial) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        <div className="flex">
          <figure>
            <img src={img} alt={name} />
          </figure>
          <div className="testimonial-card__header--author">
            <p>{name}</p>
            <p id="company">{company}</p>
          </div>
        </div>
        <FaQuoteRight size={20} />
      </div>
      <p>{description}</p>
    </article>
  );
};

