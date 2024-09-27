import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Eyebrow } from './Eyebrow';
import { FaChevronRight } from 'react-icons/fa6';

interface Props {
    category: string
}

export const Breadcrumb = ({ category }: Props) => {
  return (
    <div className='blog-breadcrumb'>
      <Link aria-label='Return to our blog home' href={'/blog'}>
        <FaHome />
      </Link>
      <FaChevronRight style={{ marginRight: '1rem' }} size={10} />
      <Eyebrow name={category} />
    </div>
  );
};
