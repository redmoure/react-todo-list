import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  placeholder: string | null;
} & ComponentPropsWithoutRef<'input'>;

// function Input({ children, placeholder }: InputProps) {
//   return (
//     <>
//       <label htmlFor="task">{children}</label>
//       <input type="text" id="task" placeholder={placeholder} required />
//     </>
//   );
// }

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...otherProps }, ref) => {
    return (
      <input
        type="text"
        id="task"
        placeholder={placeholder || ''}
        ref={ref}
        required
        {...otherProps}
      />
    );
  }
);

export default Input;
