import React from 'react';
import { BlogCard } from './BlogCard';

export const ThreeUp = ({title, data}: any) => {
  return (
    <section className="blog_three-up container">
      <h3>{title}</h3>
      <div className="blog_three-up--wrapper">
        {data.map((item: any, index: number) => {
          return (
            <BlogCard
              key={index}
              img={item.img}
              title={item.title}
              authorImg={item.authorImg}
              authorName={item.authorName}
              date={item.date}
              url={item.url}
              eyebrow={item.eyebrow}
            />
          );
        })}
      </div>
    </section>
  );
};
