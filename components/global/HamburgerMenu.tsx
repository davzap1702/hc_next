'use client';
import React from 'react';
import { FaBars } from 'react-icons/fa';

interface Props {
  handler: () => void
}

export const HamburgerMenu = ({ handler }: Props) => {
  return (
    <button className="hamburger_menu_react" onClick={handler}>
      <div id="hamburger-menu" className="header__hamburger-menu">
        <FaBars />
      </div>
    </button>
  );
};