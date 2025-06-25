import styles from '../styles/Button.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  className: string;
  handleClick?: (id: number) => void;
  type: 'button' | 'submit';
  id?: number;
} & ComponentPropsWithoutRef<'button'>;

function Button({
  className,
  handleClick = () => {},
  children,
  type,
  id,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => handleClick(Number(id))}
      className={`${styles[className]} ${styles.button}`}
    >
      {children}
    </button>
  );
}

export default Button;
