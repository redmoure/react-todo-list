import styles from '../styles/Button.module.css';

import type { ComponentPropsWithoutRef } from 'react';

type ButtonTypeProps = {
  className: string;
} & ComponentPropsWithoutRef<'button'>;

type ClickButtonProps = {
  type: 'button';
  handleClick: () => void;
} & ButtonTypeProps;

type SubmitButtonProps = {
  type: 'submit';
  handleIsActiveModal: () => void;
} & ButtonTypeProps;

type ButtonProps = ClickButtonProps | SubmitButtonProps;

function Button(props: ButtonProps) {
  if (props.type === 'button')
    return (
      <button
        onClick={() => props.handleClick()}
        className={`${styles[props.className]} ${styles.button}`}
      >
        {props.children}
      </button>
    );
  if (props.type === 'submit')
    return (
      <button
        className={`${styles[props.className]} ${styles.button}`}
        onClick={() => props.handleIsActiveModal()}
      >
        {props.children}
      </button>
    );
}

export default Button;
