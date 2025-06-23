import Button from './Button';
import type { taskObj } from './Main';

type ListProps = {
  taskRender: taskObj;
  onDeleteTask: (id: number) => void;
};

function List(props: ListProps) {
  return (
    <div>
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
