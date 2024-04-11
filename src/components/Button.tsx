import { cn } from '../helpers/cn';
import { ButtonColors } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  order: number;
  color: ButtonColors;
  direction: 'horizontal' | 'vertical';
  isActive: boolean;
}

type ColorVariants = {
  [key in ButtonColors]: string;
};

const Button = ({
  order,
  color,
  className,
  isActive,
  direction = 'horizontal',
  ...rest
}: ButtonProps) => {
  const directionStyles = {
    horizontal: 'h-16 w-36 max-md:h-12 max-md:w-24 max-sm:h-8 max-sm:w-16',
    vertical: 'w-16 h-36 max-md:h-24 max-md:w-12 max-sm:h-16 max-sm:w-8',
  };

  const buttonBaseStyles =
    'items-center justify-center ring-none rounded-lg py-2 px-4 transition-all';

  const colorVariants: ColorVariants = {
    [ButtonColors.BLUE]: isActive
      ? 'bg-blue-500 shadow-lg shadow-blue-300'
      : 'bg-blue-400',
    [ButtonColors.RED]: isActive
      ? 'bg-red-500 shadow-lg shadow-red-300'
      : 'bg-red-400',
    [ButtonColors.GREEN]: isActive
      ? 'bg-green-500 shadow-lg shadow-green-300'
      : 'bg-green-400',
    [ButtonColors.VIOLET]: isActive
      ? 'bg-violet-500 shadow-lg shadow-violet-300'
      : 'bg-violet-400',
  };

  const colorStyle = colorVariants[color];
  const directionStyle = directionStyles[direction];

  const style = cn(buttonBaseStyles, colorStyle, directionStyle, className);

  return (
    <button
      className={style}
      {...rest}
    />
  );
};

export default Button;
