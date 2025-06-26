import styles from '../styles/Workspace.module.css';
import TasksList from './TasksList';

import { type taskObj } from './MainBlock';

type WorkspaceProps = {
  tasks: taskObj[];
  onDeleteTask: (id: number) => void;
};

function Workspace({ tasks, onDeleteTask }: WorkspaceProps) {
  return (
    <div className={styles['workspace-box']}>
      {tasks.length === 0 ? (
        <p>Let's start! Add some tasks</p>
      ) : (
        <TasksList tasks={tasks} onDeleteTask={onDeleteTask} />
      )}
    </div>
  );
}

export default Workspace;
