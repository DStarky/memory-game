import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'violet' | 'red' | 'blue' | 'green';
  direction: 'horizontal' | 'vertical';
}

const Button = ({ color, className, direction = 'horizontal' }: ButtonProps) => {
  const colorStyles = {
    violet: 'bg-violet-500 border-b-violet-700',
    red: 'bg-red-500 border-b-red-700',
    blue: 'bg-blue-500 border-b-blue-700',
    green: 'bg-green-500 border-b-green-700',
  };

  const directionStyles = {
    horizontal: 'h-16 w-48 ',
    vertical: 'w-16 h-48 ',
  };

  const buttonStyle = `items-center hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 ${colorStyles[color]} ${directionStyles[direction]}`;
  const style = clsx(buttonStyle, directionStyles, className);

  return (
    <>
      <button className={style} />
    </>
  );
};
export default Button;
