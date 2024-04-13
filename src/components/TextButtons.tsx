interface TextButtonsProps {
  disabled: boolean;
  onButtonClicked: (buttonNumber: number) => void;
}

const TextButtons = ({ disabled, onButtonClicked }: TextButtonsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
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
