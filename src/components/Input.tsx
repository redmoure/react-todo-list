import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
  input: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ input, children }, ref) => {
    return (
      <>
        <label htmlFor={input}>{children}</label>
        <input type="text" id={input} ref={ref} required autoComplete="off" />
      </>
    );
  }
);

export default Input;
