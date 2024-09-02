'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    path: string,
    name: string,
}

const ACTIVE_LINK = 'active-link';

export const NavLink = ({ path, name }:Props) => {
  const pathname = usePathname();

  return (
    <Link className={`navbar-link ${pathname === path && ACTIVE_LINK}`} href={path}>{name}</Link>
  );
};

