import clsx from 'clsx';

enum ButtonColors {
  VIOLET = 'violet',
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  order: number;
  color: ButtonColors;
  direction: 'horizontal' | 'vertical';
}

const Button = ({
  order,
  color,
  className,
  direction = 'horizontal',
  ...rest
}: ButtonProps) => {
  const getColorStyleString = (color: string): string => {
    return `bg-${color}-400 border-b-${color}-700 hover:bg-${color}-500`;
  };

  const directionStyles = {
    horizontal: 'h-16 w-36 max-md:h-12 max-md:w-24 max-sm:h-8 max-sm:w-16',
    vertical: 'w-16 h-36 max-md:h-24 max-md:w-12 max-sm:h-16 max-sm:w-8',
  };

  const buttonBaseStyles =
    'items-center justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4';

  const colorStyle = getColorStyleString(color);
  const directionStyle = directionStyles[direction];

  const style = clsx(buttonBaseStyles, colorStyle, directionStyle, className);

  return (
    <button
      className={style}
      {...rest}
    />
  );
};

export default Button;
