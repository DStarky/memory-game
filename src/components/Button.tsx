import { cn } from '../helpers/cn';
import { getColorVariant } from '../helpers/getColorVariant';
import { ButtonColors } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColors;
  direction: 'horizontal' | 'vertical';
  isActive: boolean;
}

const Button = ({
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

  const colorStyle = getColorVariant(isActive, color);
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
