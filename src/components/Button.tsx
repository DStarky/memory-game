interface ButtonProps {
  color: 'violet' | 'red' | 'blue' | 'green';
}

const Button = ({ color }: ButtonProps) => {
  return (
    <>
      <button
        className={`group flex h-16 w-48 items-center hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 bg-${color}-500 border-b-${color}-700`}
      />
    </>
  );
};
export default Button;
