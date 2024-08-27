import Link from 'next/link';
import React from 'react';

interface LinkType {
    path: string;
    name: string;
    icon?: React.ReactNode;
}


export interface IFooterSectionProps {
    title: string;
    links: LinkType[];
    hasIcon?: boolean;
}

export const FooterSection = ({title, links, hasIcon}:IFooterSectionProps) => {
  return (
    <div className="main-footer__section">
      <h4>{title}</h4>
      <div className={'main-footer__section--links'}>
        {
          links.map(({name, path, icon}) => (
            hasIcon ? (
              <div key={name}  className='main-footer__section--social'>
                <Link href={path}>{icon}</Link>
                <Link href={path}>{name}</Link>
              </div>
            ):(
              <Link key={name} href={path}>{name}</Link>
            )
          ))
        }
      </div>
    </div>
  );
};
