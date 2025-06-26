import type { taskObj } from './MainBlock';

import styles from '../styles/TasksList.module.css';
import Button from './Button';

export type TasksListProps = {
  tasks: taskObj[];
  onDeleteTask: (id: number) => void;
};

function TasksList({ tasks, onDeleteTask }: TasksListProps) {
  return (
    <div>
      {tasks.map(task => {
        return (
          <div className={styles['task-list']} key={task.id}>
            <article>
              <p className={styles['name']}>{task.name.toUpperCase()}</p>
              <p className={styles['note']}>{task.note.toUpperCase()}</p>
            </article>
            <Button
              className={'done'}
              type={'button'}
              handleClick={onDeleteTask}
              idForDelete={task.id}
            >
              Done!
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
