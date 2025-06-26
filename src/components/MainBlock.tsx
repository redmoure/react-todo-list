import Button from './Button';
import InputBox from './InputBox';

import styles from '../styles/MainBlock.module.css';

import { useRef, useState, type FormEvent } from 'react';
import TasksList from './TasksList';
import Menu from './Menu';
import Workspace from './Workspace';

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
    setIsActiveModal(!isActiveModal);
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
    setIsActiveModal(false);

    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  function handleDeleteTask(id: number) {
    const filtredTasks = tasks.filter(task => task.id !== id);
    setTasks(filtredTasks);
  }

  return (
    <>
      <div className={styles.block}>
        <Button
          className={'regular'}
          type={'button'}
          handleClick={handleSetIsActiveModal}
          isDeactivated={tasks.length >= 10 ? true : false}
        >
          {tasks.length < 10
            ? 'Click to add new task!'
            : 'Do these first, friend!'}
        </Button>
        <InputBox
          taskNameRef={taskNameRef}
          taskNoteRef={taskNoteRef}
          isActive={isActiveModal}
          handleIsActiveModal={handleSetIsActiveModal}
          onSubmitTask={handleOnSubmitTask}
        />

        <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
      {/* below trying a diff layouts for the app */}
      <div className={styles['main-layout']}>
        <Menu onActiveModal={handleSetIsActiveModal}></Menu>
        <Workspace tasks={tasks} onDeleteTask={handleDeleteTask}></Workspace>
      </div>
    </>
  );
}

export default MainBlock;
