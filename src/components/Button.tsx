import styles from '../styles/Button.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  className: string;
  handleClick?: (id: number) => void;
  type: 'button' | 'submit';
  idForDelete?: number;
  isDeactivated?: boolean;
} & ComponentPropsWithoutRef<'button'>;

function Button({
  className,
  handleClick = () => {},
  children,
  type,
  idForDelete = 0,
  isDeactivated,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => handleClick(idForDelete)}
      className={`${styles[className]} ${styles.button}`}
      disabled={isDeactivated}
    >
      {children}
    </button>
  );
}

export default Button;
