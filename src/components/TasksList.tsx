import type { taskObj } from './MainBlock';

import styles from '../styles/TasksList.module.css';

type TasksListProps = { tasks: taskObj[] };

function TasksList({ tasks }: TasksListProps) {
  console.log(tasks);
  return (
    <div>
      {tasks.map(task => {
        return (
          <div className={styles['task-list']}>
            <article key={task.id}>
              <p className={styles['name']}>{task.name.toUpperCase()}</p>
              <p className={styles['note']}>{task.note.toUpperCase()}</p>
            </article>
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
