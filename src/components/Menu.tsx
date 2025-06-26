import styles from '../styles/Menu.module.css';

type MenuProps = {
  onActiveModal: () => void;
};

function Menu({ onActiveModal }: MenuProps) {
  return (
    <div className={styles['menu-box']}>
      <ul>
        <li onClick={onActiveModal}>Add new task</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor </li>
      </ul>
    </div>
  );
}

export default Menu;
