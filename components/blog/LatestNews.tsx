import React from 'react';
import { LatestNewsItem } from './LatestNewsItem';
import { useLatest } from '@/hooks/useLatest';

export const LatestNews = async () => {

  const data = await useLatest();

  return (
    <>
      <div className='container blog_latest-news--wrapper'>
        <div className="blog_latest-news--wrapper__heading">
          <h3 >Latest News</h3>
        </div>
      </div>
      <section className='container blog_latest-news'>
        {
          data.map((props, _i) => (<LatestNewsItem key={_i} {...props} /> ))
        }
      </section>
    </>
  );
};
