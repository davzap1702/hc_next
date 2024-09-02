import Link from 'next/link';
import React from 'react';

export interface IServiceProps {
    title: string;
    description: string;
    link: string;
    href: string;
    icon: React.JSX.Element;
}


export const ServiceItem = ({ title, description, link, href, icon }:IServiceProps) => {
  return (
    <div className="grid-3-info__section">
      {icon}
      <h3>{title}</h3>
      <p style={{ marginBottom: '4rem' }}>{description}</p>
      <Link
        aria-label="Learn more about our Vendor Selection"
        href={{ href }}
        className="primary-btn"
      >{link}</Link>
    </div>
  );
};
