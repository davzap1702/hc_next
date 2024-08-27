/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
//TODO! Implemenet Next Image

interface Props {
    img: string;
    eyebrow: string;
    title: string;
    authorImg: string;
    authorName: string;
    date: string;
    url: string;
}

export const BlogCard = ({
  img,
  eyebrow,
  title,
  authorImg,
  authorName,
  date,
  url,
}: Props) => {
  console.log('URL',url);
  return (
    <article className="blog_card">
      <img src={img} alt="" className="blog_card--img" />
      <div className="blog_card--eyebrow">
        <p>{eyebrow}</p>
      </div>
      <Link href={url}>
        <div className="blog_card--title">
          <h5>{title}</h5>
        </div>
        <div className="blog_card__author--byline">
          <img
            className="blog_card__author-byline--avatar"
            src={authorImg}
            alt=""
            role="presentation"
          />
          <div className="blog_card__author-byline--author">
            <p>
                By <strong>{authorName}</strong>
            </p>
          </div>
          <div className="blog_card__author-byline--date">
            <p>{date}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};