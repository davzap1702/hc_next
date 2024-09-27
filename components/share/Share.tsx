'use client';
import Link from 'next/link';

import { FaLink, FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { Tooltip } from 'antd';

interface Props {
  heading: string;
}

export const Share = ({ heading }: Props) => {
  const [location, setLocation] = useState('');
  const [openToolip, setOpenToolip] = useState(false);

  const shareOn = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${location}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(location)}&title=${encodeURIComponent(heading)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(location)}&text=${encodeURIComponent(heading)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(location);
      setOpenToolip(true);
      setTimeout(() => {
        setOpenToolip(false);
      }, 2000);

    } catch (err) {
    }
  };



  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <div>
      <article className='share-component'>
        <Link className='share-component--item' target='_blank' href={shareOn.twitter}>
          <FaSquareXTwitter color='#202124' />
        </Link>
        <Link className='share-component--item' target='_blank' href={shareOn.facebook}>
          <FaSquareFacebook color='#202124' />
        </Link>
        <Link target='_blank' className='share-component--item' href={shareOn.linkedin}>
          <FaLinkedin color='#202124' />
        </Link>
        <button onClick={() => {
          copyToClipboard();
        }} className='share-component--item'>
          <Tooltip title="Link copied" open={openToolip} />
          <FaLink color='#000' />
        </button>

      </article>
    </div>
  );
};
