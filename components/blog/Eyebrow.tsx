import React from 'react';

interface Props {
    name: string;
}

export const Eyebrow = ({name}:Props) => {
  return (
    <div className="blog_eyebrow">
      <p className="blog_eyebrow--link">
        {name}
      </p>
    </div>
  );
};
