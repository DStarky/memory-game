import { useState } from 'react';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);
  const [seq, setSeq] = useState<number[]>([1, 2, 3, 4]);
  const [answer, setAnswer] = useState<number[]>([]);

  const handleButtonClicked = (buttonNumber: number) => {
    setAnswer(prevAnswer => [...prevAnswer, buttonNumber]);
  };

  const onFinish = () => {
    setAreButtonsDisabled(false);
  };

  const text = areButtonsDisabled ? 'запоминай' : 'повтори';

  return (
    <div>
      <h1 className="text-4xl absolute top-12 left-1/2 -translate-x-1/2 transition-all">
        Уровень: <strong>{seq.length}</strong>
      </h1>
      <h2 className="text-2xl text-center mb-4 uppercase">{text}</h2>
      <h2 className="text-2xl text-center mb-4 uppercase">
        {answer.join(' ')}
      </h2>
      <TextOutput
        disabled={areButtonsDisabled}
        seq={seq}
        onFinish={onFinish}
      />
      <TextButtons
        disabled={areButtonsDisabled}
        onButtonClicked={handleButtonClicked}
      />
    </div>
  );
};
export default TextVariant;
