interface ButtonProps {
  color: 'violet' | 'red' | 'blue' | 'green';
}

const Button = ({ color }: ButtonProps) => {
  const colorStyles = {
    violet: 'bg-violet-500 border-b-violet-700',
    red: 'bg-red-500 border-b-red-700',
    blue: 'bg-blue-500 border-b-blue-700',
    green: 'bg-green-500 border-b-green-700',
  };

  const buttonStyle = `group flex h-16 w-48 items-center hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 ${colorStyles[color]}`;

  return (
    <>
      <button className={buttonStyle} />
    </>
  );
};
export default Button;
