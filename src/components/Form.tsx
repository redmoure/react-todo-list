import Button from './Button';
import Input from './Input';

import { type taskObj } from './MainBlock';
import { useRef, type FormEvent } from 'react';

type FormProps = {
  onSetTask: (taskInput: taskObj) => void;
  tasks: taskObj[];
};

function Form({ onSetTask, tasks }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: taskObj = {
      name: inputRef.current!.value,
      id: Math.random(),
    };
    onSetTask(newTask);
    inputRef.current!.value = '';
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <Input placeholder={'Add your task'} ref={inputRef}></Input>
      <Button type={'submit'} isDisabled={tasks.length >= 32 ? true : false}>
        Add
      </Button>
    </form>
  );
}

export default Form;
