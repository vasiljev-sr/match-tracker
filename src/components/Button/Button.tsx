import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import cls from 'classnames';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, disabled = false, children, ...restProps } = props;

  return (
    <button
      className={cls(styles.Button, className, { [styles.disabled]: disabled })}
      type={'button'}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
