/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Eyebrow } from './Eyebrow';
import Image from 'next/image';
import { formatDate } from '@/helpers';
import type {IHome} from '../../hooks/useHomepage';


export const HomepageHero = ({
  heading, 
  image, 
  authorName, 
  authorImage, 
  articleDisplayDate, 
  eyebrow, 
  articleSlug
}: IHome) => {
  return (
    <div className="blog_homepage_hero container">
      <Image
        width={1440}
        height={500}
        src={image}
        alt={heading}
        className="blog_homepage_hero--image"
      />
      <article className="blog_homepage_hero--card">
        <Link href={`/blog/articles/${articleSlug}`}>
          <Eyebrow name={eyebrow}/>
          <div className="blog_homepage_hero--card__title">
            <h1>{heading}</h1>
          </div>
          <div className="blog_homepage_hero--card__author-byline">
            <Image
              height={35}
              width={35}
              className="blog_homepage_hero--card__author-byline--avatar"
              src={authorImage}
              alt=""
              role="presentation"
            />
            <div className="blog_homepage_hero--card__author-byline--author">
              <p>
                    By <strong>{authorName}</strong>
              </p>
            </div>
            <div className="blog_homepage_hero--card__author-byline--date">
              <p>{formatDate(new Date(articleDisplayDate))}</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
