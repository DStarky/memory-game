import { useState } from 'react';

import { getRandomNumber } from '../utils/getRandomNumber';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);
  const [seq, setSeq] = useState<number[]>([getRandomNumber()]);
  const [output, setOutput] = useState<number | string>('запоминайте');

  let answer: number[] = [];

  const handleButtonClicked = (buttonNumber: number) => {
    answer.push(buttonNumber);

    const isEqual = answer.every((value, index) => value === seq[index]);

    if (isEqual && answer.length === seq.length) {
      setOutput('все верно');
      setAreButtonsDisabled(true);

      setTimeout(() => {
        answer = [];
        setSeq(prev => [...prev, getRandomNumber()]);
      }, 1000);
    }

    if (!isEqual) {
      setOutput('ошибка');
      setAreButtonsDisabled(true);

      setTimeout(() => {
        answer = [];
        setSeq([getRandomNumber()]);
      }, 1000);
    }
  };

  const onFinish = () => {
    setAreButtonsDisabled(false);
  };

  return (
    <div>
      <h1 className="text-4xl absolute top-12 left-1/2 -translate-x-1/2 transition-all">
        Уровень: <strong>{seq.length}</strong>
      </h1>

      <TextOutput
        seq={seq}
        onFinish={onFinish}
        output={output}
        setOutput={setOutput}
      />
      <TextButtons
        disabled={areButtonsDisabled}
        onButtonClicked={handleButtonClicked}
      />
    </div>
  );
};
export default TextVariant;
