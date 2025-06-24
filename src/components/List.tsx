import Button from './Button';
import type { taskObj } from './Main';
import styles from './List.module.css';

type ListProps = {
  taskRender: taskObj;
  onDeleteTask: (id: number) => void;
};

function List(props: ListProps) {
  return (
    <div className={styles['todo-item']}>
      <p>{props.taskRender.name}</p>
      <Button
        type="button"
        id={props.taskRender.id}
        onDeleteTask={props.onDeleteTask}
      >
        Done!
      </Button>
    </div>
  );
}

export default List;
