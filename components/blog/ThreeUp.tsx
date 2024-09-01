import React from 'react';
import { BlogCard, IThreeUpChild } from './BlogCard';

export interface IThreeUpProps {
  title: string;
  children: IThreeUpChild[];
}

export const ThreeUp = ({title, children }: IThreeUpProps) => {
  if (children.length < 3) return null;
  return (
    <section className="blog_three-up container">
      <h3>{title}</h3>
      <div className="blog_three-up--wrapper">
        {children.map((child, _i) => (<BlogCard key={_i} {...child} />))}
      </div>
    </section>
  );
};
