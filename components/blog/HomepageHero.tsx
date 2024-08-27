/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Eyebrow } from './Eyebrow';
import Image from 'next/image';
import { formatDate } from '@/helpers';

interface Props {
  heroHeading: string;
  heroImage: string;
  heroAuthorName: string;
  heroAuthorImage: string;
  heroArticleDisplayDate: Date;
  heroEyebrow: string;
  heroArticleSlug: string;
}


export const HomepageHero = ({heroHeading, heroImage, heroAuthorName, heroAuthorImage, heroArticleDisplayDate, heroEyebrow, heroArticleSlug}: Props) => {
  return (
    <div className="blog_homepage_hero container">
      <Image
        width={1440}
        height={500}
        src={heroImage}
        alt={heroHeading}
        className="blog_homepage_hero--image"
      />
      <article className="blog_homepage_hero--card">
        <Link href={`/blog/articles/${heroArticleSlug}`}>
          <Eyebrow name={heroEyebrow}/>
          <div className="blog_homepage_hero--card__title">
            <h1>{heroHeading}</h1>
          </div>
          <div className="blog_homepage_hero--card__author-byline">
            <Image
              height={35}
              width={35}
              className="blog_homepage_hero--card__author-byline--avatar"
              src={heroAuthorImage}
              alt=""
              role="presentation"
            />
            <div className="blog_homepage_hero--card__author-byline--author">
              <p>
                    By <strong>{heroAuthorName}</strong>
              </p>
            </div>
            <div className="blog_homepage_hero--card__author-byline--date">
              <p>{formatDate(new Date(heroArticleDisplayDate))}</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
