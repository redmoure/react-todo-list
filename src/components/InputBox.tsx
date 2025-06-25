import Input from './Input';
import Button from './Button';
import styles from '../styles/InputBox.module.css';

import type { FormEvent, ReactNode, RefObject } from 'react';

type InputBoxProps = {
  children?: ReactNode;
  isActive: boolean;
  handleIsActiveModal: () => void;
  onSubmitTask: (e: FormEvent<HTMLFormElement>) => void;
  taskNoteRef: RefObject<HTMLInputElement | null>;
  taskNameRef: RefObject<HTMLInputElement | null>;
};

function InputBox({
  children,
  isActive,
  handleIsActiveModal,
  taskNameRef,
  taskNoteRef,
  onSubmitTask,
}: InputBoxProps) {
  return (
    <div
      className={`${styles['input-modal']} ${
        !isActive ? styles[`is-active`] : null
      }`}
    >
      <form onSubmit={onSubmitTask}>
        <div className={styles['input-box']}>
          <h2>Add some stuff you'll never do {':)'}</h2>
          {children}
          <Input input={'task'} ref={taskNameRef}>
            Give your task a name:
          </Input>
          <Input input={'note'} ref={taskNoteRef}>
            Some boring stuff about the task:
          </Input>
          <Button
            className={'close'}
            type="button"
            handleClick={handleIsActiveModal}
          >
            x
          </Button>
          <Button
            type={'submit'}
            className={'regular'}
            handleIsActiveModal={handleIsActiveModal}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
