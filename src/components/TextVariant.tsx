import { useEffect, useState } from 'react';

import { getRandomNumber } from '../utils/getRandomNumber';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);
  const [seq, setSeq] = useState<number[]>(
    JSON.parse(localStorage.getItem('level')!) || [getRandomNumber()],
  );
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

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(seq));
    const level = JSON.parse(localStorage.getItem('level')!).length;
    const record = localStorage.getItem('record') || 0;
    if (level > +record) localStorage.setItem('record', level.toString());
  }, [seq]);

  const onFinish = () => {
    setAreButtonsDisabled(false);
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-xl  transition-all">
          Рекорд: <strong>{localStorage.getItem('record')}</strong>
        </p>
        <p className="text-xl transition-all">
          Уровень: <strong>{JSON.parse(localStorage.getItem('level')!).length}</strong>
        </p>
      </div>

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
