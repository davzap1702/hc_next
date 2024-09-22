/* eslint-disable @next/next/no-img-element */
'use client';
import { HamburgerMenu } from '../HamburgerMenu';
import { menuSeeder } from './menuSeeder';
import { NavLink } from './NavLink';
import BlackLogo from '../../../app/assets/img/HC_black-logo.svg';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const nav = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(parseInt(window.scrollY.toString()));
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    nav?.current?.classList.add('hide');
  }, [location]);

  const mobileMenuHandler = () => {
    nav?.current?.classList.toggle('hide');
  };

  return (
    <header data-scroll={`${scrollY}`} className='container'>
      <div className="header__wrapper">
        <Link href={'/'} className="header__logo">
          <Image
            priority
            width={300}
            height={63}
            src={BlackLogo}
            alt="Huecker Consulting Logo"
          />
        </Link>
        <HamburgerMenu handler={mobileMenuHandler} />
      </div>
      <div ref={nav} className="hide header_nav">
        <nav>
          {menuSeeder.map(item => (
            <NavLink key={item.name} {...item} />
          ))}
          <Link className="primary-btn" href="/blog">
                Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};
