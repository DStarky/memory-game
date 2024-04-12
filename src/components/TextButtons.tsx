interface TextButtonsProps {
  disabled: boolean;
  onButtonClicked: (buttonNumber: number) => void;
}

const TextButtons = ({ disabled, onButtonClicked }: TextButtonsProps) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        disabled={disabled}
        onClick={() => onButtonClicked(1)}
      >
        1
      </button>
      <button
        disabled={disabled}
        onClick={() => onButtonClicked(2)}
      >
        2
      </button>
      <button
        disabled={disabled}
        onClick={() => onButtonClicked(3)}
      >
        3
      </button>
      <button
        disabled={disabled}
        onClick={() => onButtonClicked(4)}
      >
        4
      </button>
    </div>
  );
};
export default TextButtons;
