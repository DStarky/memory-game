interface TextButtonsProps {
  disabled: boolean;
}

const TextButtons = ({ disabled }: TextButtonsProps) => {
  return (
    <div className="flex justify-between mt-4">
      <button disabled={disabled}>1</button>
      <button disabled={disabled}>2</button>
      <button disabled={disabled}>3</button>
      <button disabled={disabled}>4</button>
    </div>
  );
};
export default TextButtons;
