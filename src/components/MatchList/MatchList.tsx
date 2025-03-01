import React from 'react';
import cls from 'classnames';
import sx from './MatchList.module.css';
import { useMatches } from '../../services/fetchMatches.ts';
import { MatchCard } from '../MatchCard/MatchCard';
import { MatchCardSkeleton } from '../MatchCard/MatchCardSkeleton';

interface MatchListProps {
  className?: string;
}

export const MatchList = (props: MatchListProps) => {
  const { matches, isLoading, error } = useMatches();

  if (isLoading) {
    return <MatchCardSkeleton />;
  }

  if (!matches || error) {
    return null;
  }

  const { matches: matchesList } = matches.data;
  const { className } = props;
  return (
    <ul className={cls(sx.MatchList, className, 'container')}>
      {matchesList.map((item) => (
        <li key={item.title}>
          <MatchCard data={item} />
        </li>
      ))}
    </ul>
  );
};
