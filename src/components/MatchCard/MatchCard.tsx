import React from 'react';
import cls from 'classnames';
import sx from './MatchCard.module.css';
import { MatchItem } from '../../services/fetchMatches.ts';
import teamIcon from '../../assets/images/team-icon.svg';
import { CardStatus } from '../CardStatus/CardStatus';
interface MatchCardProps {
  className?: string;
  data: MatchItem;
}

export const MatchCard = (props: MatchCardProps) => {
  const { className, data } = props;

  const { awayTeam, homeTeam, status, homeScore, awayScore } = data;
  return (
    <article className={cls(sx.MatchCard, className)}>
      <div className={sx.team}>
        <img
          className={sx.icon}
          width={48}
          height={48}
          src={teamIcon}
          alt={'team icon'}
        />
        <h3 className={sx.teamName}>{awayTeam.name}</h3>
      </div>
      <div className={sx.score}>
        <p>{`${awayScore} : ${homeScore}`}</p>
        <CardStatus type={status} />
      </div>
      <div className={sx.team}>
        <h3 className={sx.teamName}>{homeTeam.name}</h3>
        <img
          className={sx.icon}
          width={48}
          height={48}
          src={teamIcon}
          alt={'team icon'}
        />
      </div>
    </article>
  );
};
