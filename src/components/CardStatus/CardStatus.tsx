import React from 'react';
import cls from 'classnames';
import sx from './CardStatus.module.css';
import { TMatchStatus } from './types';

interface CardStatusProps {
  className?: string;
  type: TMatchStatus;
}

const statusNames: Record<TMatchStatus, string> = {
  Ongoing: 'Live',
  Finished: 'Finished',
  Scheduled: 'Match preparing',
};
export const CardStatus = (props: CardStatusProps) => {
  const { className, type } = props;
  return (
    <div className={cls(sx.CardStatus, className, sx[type])}>
      {statusNames[type]}
    </div>
  );
};
