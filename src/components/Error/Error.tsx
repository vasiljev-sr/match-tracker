import sx from './Error.module.css';
import cls from 'classnames';
import image from '../../assets/images/error.svg';
import { useMatches } from '../../services/fetchMatches.ts';
interface ErrorProps {
  className?: string;
}
export const Error = (props: ErrorProps) => {
  const { className } = props;

  const { error } = useMatches();

  if (!error) {
    return null;
  }
  return (
    <div className={cls(sx.Error, className)}>
      <img src={image} alt="Error" />
      <p>Ошибка: не удалось загрузить информацию</p>
    </div>
  );
};
