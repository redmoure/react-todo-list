import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  id?: number;
  onDeleteTask?: (id: number) => void;
  isDisabled: boolean;
} & ComponentPropsWithoutRef<'button'>;

function Button({
  children,
  type,
  onDeleteTask,
  id,
  isDisabled,
  ...restProps
}: ButtonProps) {
  if (type === 'submit')
    return (
      <button {...restProps} disabled={isDisabled}>
        {children}
      </button>
    );
  if (type === 'button')
    return (
      <button {...restProps} onClick={() => onDeleteTask(id)}>
        {children}
      </button>
    );
}

export default Button;
