import styles from '../styles/Button.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  className: string;
  handleClick?: () => void;
} & ComponentPropsWithoutRef<'button'>;

function Button({ className, handleClick = () => {}, children }: ButtonProps) {
  return (
    <button
      onClick={() => handleClick()}
      className={`${styles[className]} ${styles.button}`}
    >
      {children}
    </button>
  );
}

export default Button;
