import React from 'react';
import cls from 'classnames';
import sx from './CardStatus.module.css';
import { TCardStatus } from './types';

interface CardStatusProps {
  className?: string;
  type: TCardStatus;
}

const statusNames: Record<TCardStatus, string> = {
  live: 'Live',
  finished: 'Finished',
  preparing: 'Match preparing',
};
export const CardStatus = (props: CardStatusProps) => {
  const { className, type } = props;
  return (
    <div className={cls(sx.CardStatus, className, sx[type])}>
      {statusNames[type]}
    </div>
  );
};
