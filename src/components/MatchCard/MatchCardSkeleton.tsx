import React from 'react';
import sx from './MatchCardSkeleton.module.css';

const skeletons = new Array(6).fill(0);
export const MatchCardSkeleton = () => {
  return (
    <ul className={sx.list}>
      {skeletons.map((_, index) => (
        <li key={index}>
          <div className={sx.MatchCardSkeleton}>
            <div className={sx.skeletonImage} />
          </div>
        </li>
      ))}
    </ul>
  );
};
