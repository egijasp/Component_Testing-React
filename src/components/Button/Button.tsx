import './Button.scss';
import { FC } from 'react';

type ButtonProps = {
  type: 'submit',
  title: string,
  onClick: () => void,
};

const Button:FC<ButtonProps> = ({ type, title, onClick }) => (
  <button
    className="button"
    type={type}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
