/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { IMAGES } from '@/constants';
import { footerSeeder } from './seeder';
import { FooterSection } from './FooterSection';

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__container container">
        <div className="main-footer__section">
          <img src={IMAGES.whiteLogo} alt="logo" />
          <div className="main-footer__section--links"></div>
        </div>
        {
          footerSeeder.map(props => (
            <FooterSection key={props.title} {...props} />
          ))
        }
      </div>
      <div className="main-footer__copyright container">
        <hr />
        <p>©️ 2024 Huecker Consulting LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
