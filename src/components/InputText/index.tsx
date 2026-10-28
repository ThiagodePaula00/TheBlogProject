import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function InputText({ labelText = '', ...props }: InputTextProps) {
  const id = useId();

  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        className={clsx(
          'bg-white outline-0 text-base/tight dark:bg-slate-900 dark:text-slate-100',
          'ring-2 ring-slate-400 rounded dark:ring-slate-600',
          'p-2 transition focus:ring-blue-600',
          'placeholder-slate-300',
          'disabled:bg-slate-200',
          'disabled:text-slate-400',
          'dark:disabled:bg-slate-800',
          'dark:disabled:text-slate-500',
          'disabled:placeholder-slate-300',
          'read-only:bg-slate-100 dark:read-only:bg-slate-800',
          props.className,
        )}
        id={id}
      />
    </div>
  );
}