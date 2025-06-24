import { useState } from 'react';
import Form from './Form';
import List from './List';
import styles from './Main.module.css';

export type taskObj = {
  name: string;
  id: number;
};

function Main() {
  const [tasks, setTask] = useState<taskObj[]>([]);

  function handleSetTask(taskInput: taskObj) {
    setTask(prevTasks => {
      return [...prevTasks, taskInput];
    });
  }

  function handleDeleteTask(id: number) {
    setTask(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  return (
    <>
      <Form onSetTask={handleSetTask} tasks={tasks}></Form>
      <ul className={styles['todo-list']}>
        {tasks.map(task => {
          return (
            <List
              taskRender={task}
              key={task.id}
              onDeleteTask={handleDeleteTask}
            ></List>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
