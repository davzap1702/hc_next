/* eslint-disable @next/next/no-img-element */
'use client';
import { IMAGES } from '@/constants';
import { HamburgerMenu } from '../HamburgerMenu';
import { menuSeeder } from './menuSeeder';
import { NavLink } from './NavLink';

import Link from 'next/link';
import React, { useRef } from 'react';

export const Header = () => {

  const nav = useRef<HTMLDivElement | null>(null);
  const mobileMenuHandler = () => {
    nav?.current?.classList.toggle('hide');
  };

  return (
    <header className="container">
      <div className="header__wrapper">
        <Link href={'/'} className="header__logo">
          <img src={IMAGES.blackLogo} alt="Logo" />
        </Link>
        <HamburgerMenu handler={mobileMenuHandler} />
      </div>
      <div ref={nav} className="hide header_nav">
        <nav>
          {menuSeeder.map(item => (
            <NavLink key={item.name} {...item} />
          ))}
          <Link className="primary-btn" href="/contact">
                Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
