import React from 'react';
import { Eyebrow } from './Eyebrow';
import { FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import { formatDate } from '@/helpers';
import Image from 'next/image';

export interface ILatestArticleItem {
    image: string;
    eyebrow: string;
    title: string;
    author: string;
    date: Date;
    path: string
}

export const LatestNewsItem = ({ image, eyebrow, title, author, date, path }: ILatestArticleItem) => {
  return (
    <Link href={`/blog/articles/${path}`} className='blog_latest-news--article'>
      <div className="blog_latest-news--article--img">
        <Image width={150} height={100} src={image} alt="" />
      </div>
      <div className="blog_latest-news--article--content">
        <Eyebrow name={eyebrow} />
        <h4>{title}</h4>
        <div className="blog_latest-news--article--content--author">
          <p>By <strong>{author}</strong></p>
          <p>{<FaCalendar />}{formatDate(new Date(date))}</p>
        </div>

      </div>

    </Link>
  );
};
