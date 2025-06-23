import { useState } from 'react';
import Form from './Form';
import List from './List';

export type taskObj = {
  name: string;
  id: number;
};

function Main() {
  const [task, setTask] = useState<taskObj[]>([]);

  function handleSetTask(taskInput: taskObj) {
    setTask(prevTasks => {
      return [...prevTasks, taskInput];
    });
  }

  function handleDeleteTask(id: number) {
    setTask(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <Form onSetTask={handleSetTask}></Form>
      <ul>
        {task.map(task => {
          return (
            <List
              taskRender={task}
              key={task.id}
              onDeleteTask={handleDeleteTask}
            ></List>
          );
        })}
      </ul>
    </div>
  );
}

export default Main;
