import React from 'react';
import cls from 'classnames';
import sx from './Header.module.css';
import { Button } from '../Button/Button.tsx';

interface HeaderProps {
  className?: string;
}
export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={cls(sx.Header, className, 'container')}>
      <div className={sx.box}>
        <h1 className={sx.h1}>Match Track</h1>
        <Button>Обновить</Button>
      </div>
    </header>
  );
};
