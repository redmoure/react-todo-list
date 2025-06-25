import Button from './Button';
import InputBox from './InputBox';

import styles from '../styles/MainBlock.module.css';

import { useRef, useState, type FormEvent } from 'react';
import TasksList from './TasksList';

export type taskObj = {
  name: string;
  note: string;
  id: number;
};

function MainBlock() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [tasks, setTasks] = useState<taskObj[]>([]);

  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskNoteRef = useRef<HTMLInputElement>(null);

  function handleSetIsActiveModal() {
    return setIsActiveModal(!isActiveModal);
  }

  function handleOnSubmitTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const taskName = taskNameRef.current!.value;
    const taskNote = taskNoteRef.current!.value;

    const newTask: taskObj = {
      name: taskName,
      note: taskNote,
      id: Math.random(),
    };
    taskNameRef.current!.value = '';
    taskNoteRef.current!.value = '';
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  return (
    <div className={styles.block}>
      <Button
        className="regular"
        type={'button'}
        handleClick={handleSetIsActiveModal}
      >
        Click to add new task!
      </Button>
      <InputBox
        taskNameRef={taskNameRef}
        taskNoteRef={taskNoteRef}
        isActive={isActiveModal}
        handleIsActiveModal={handleSetIsActiveModal}
        onSubmitTask={handleOnSubmitTask}
      />

      <TasksList tasks={tasks} />
    </div>
  );
}

export default MainBlock;
