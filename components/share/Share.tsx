'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLink, FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import Swal from 'sweetalert2';

interface Props {
  heading: string;
}

export const Share = ({ heading }: Props) => {
  const [location, setLocation] = useState('');
  const shareOn = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${location}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(location)}&title=${encodeURIComponent(heading)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(location)}&text=${encodeURIComponent(heading)}`,
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(location);
      Toast.fire({
        icon: 'success',
        title: 'Copied to the clipboard'
      });
    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: 'Failed to copy to the clipboard'
      });
    }
  };

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <>
      <article className='share-component'>
        <Link className='share-component--item' target='_blank' href={shareOn.twitter}>
          <FaSquareXTwitter color='#000' />
        </Link>
        <Link className='share-component--item' target='_blank' href={shareOn.facebook}>
          <FaSquareFacebook color='#000' />
        </Link>
        <Link target='_blank' className='share-component--item' href={shareOn.linkedin}>
          <FaLinkedin color='#000' />
        </Link>
        <button onClick={() => {
          copyToClipboard();
        }} className='share-component--item'>
          <FaLink color='#000' />
        </button>
      </article>
    </>
  );
};
