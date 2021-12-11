import './Button.scss';
import { FC } from 'react';

type ButtonProps = {
  onClick: () => void,
};

const Button:FC<ButtonProps> = ({ onClick }) => (
  <button
    className="button"
    onClick={onClick}
  >
    Pay $55.00
  </button>
);

export default Button;
