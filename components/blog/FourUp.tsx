/* eslint-disable @next/next/no-img-element */
import { textCutter, timeCounter } from '@/helpers';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface ISingleArticle {
  slug: string;
  image: string;
  authorImage: string;
  authorName: string;
  date: Date;
  title: string;
  description: string;

}

export interface IFourUpComponent {
  heading: string;
  slug: string;
  image: string;
  authorImage: string;
  authorName: string;
  date: Date;
  title: string;
  description: string;
  children : Array<ISingleArticle>
}


export const FourUp = ({
  heading,
  slug,
  image,
  authorImage,
  authorName,
  date,
  title,
  description,
  children,
}: IFourUpComponent) => {
  return (
    <article>
      <h3 className="container four-up--title">{heading}</h3>
      <section className="blog_four-up container">
        <Link href={`/blog/articles/${slug}`} className="blog_four-up--main-article">
          <img
            className="blog_four-up--main-article--img"
            src={image}
            alt={title}
          />
          <div className="blog_four-up--main-article--author">
            <img
              src={authorImage}
              alt=""
              role='presentation'
            />
            <p>
                  By <strong>{authorName}</strong>
            </p>
            <div className="bullet"></div>
            <p>{timeCounter(new Date(date))}</p>
          </div>
          <div className="blog_four-up--main-article--title">
            <h3>{title}</h3>
          </div>
          <div className="blog_four-up--main-article--body">
            <p>
              {textCutter(description, 200)}
            </p>
          </div>
          <div className="blog_four-up--main-article--cta">
            <div className="readmore">
                  Read Article
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </Link>
        <div className="blog_four-up--side-articles">
          {
            children.map((article, _i) => (
              <Link key={_i} href={`/blog/articles/${article.slug}`} className="blog_four-up--side-articles--article">
                <div className="blog_four-up--side-articles--article--img">
                  <img
                    src={article.image}
                    alt={article.description}
                    role='presentation'
                  />
                </div>
                <div className="blog_four-up--side-articles--article--content">
                  <div className="blog_four-up--side-articles--article--content--author">
                    <img
                      src={article.authorImage}
                      alt=""
                      role='presentation'
                    />
                    <p>
                        By <strong>{article.authorName}</strong>
                    </p>
                    <p>{timeCounter(new Date(article.date))}</p>
                  </div>
                  <div className="blog_four-up--side-articles--article--content--title">
                    <h3>{article.title}</h3>
                  </div>
                  <div className="blog_four-up--side-articles--article--content--body">
                    <p>{article.description}</p>
                  </div>
                  <div className="blog_four-up--side-articles--article--content--cta">
                    <div className='readmore'>
                        Read Article
                      <span>
                        <FaArrowRightLong />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </section>
    </article>
  );
};
