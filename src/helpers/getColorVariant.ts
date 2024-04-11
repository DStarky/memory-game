import { ButtonColors } from '../types';

function exhaustiveCheck(x: never) {
  console.log('Обработайте значение:' + x);
}

export const getColorVariant = (isActive: boolean, color: ButtonColors) => {
  switch (color) {
    case ButtonColors.BLUE:
      return isActive ? 'bg-blue-500 shadow-lg shadow-blue-300' : 'bg-blue-300';
    case ButtonColors.RED:
      return isActive ? 'bg-red-500 shadow-lg shadow-red-300' : 'bg-red-300';
    case ButtonColors.GREEN:
      return isActive
        ? 'bg-green-500 shadow-lg shadow-green-300'
        : 'bg-green-300';
    case ButtonColors.VIOLET:
      return isActive
        ? 'bg-violet-500 shadow-lg shadow-violet-300'
        : 'bg-violet-300';
    default:
      exhaustiveCheck(color);
  }
};
