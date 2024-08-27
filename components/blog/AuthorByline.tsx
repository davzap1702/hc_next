/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Avatar from '../../app/assets/img/avatar-15.png';

interface Props { 
    imagen: string; 
    name: string; 
    title: string; 
    date: string;
}

export const AuthorByline = ({imagen, name, title, date}:Props) => {
  return (
    <div className="author-byline">
      <div className="author-byline__avatar">
        <img src={imagen ?? Avatar} alt="" role="presentation" />
        {/* TODO: Implement Next Image */}
        <div className="author-byline__avatar--wrapper">
          <p className="author-byline__avatar--wrapper--name">{name}</p>
          <p className="author-byline__avatar--wrapper--title">{title}</p>
        </div>
      </div>
      <div className="author-byline__date">
        <p>{date}</p>
      </div>
    </div>
  );
};
