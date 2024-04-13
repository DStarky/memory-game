import { useEffect, useState } from 'react';

import { getRandomNumber } from '../utils/getRandomNumber';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);
  const levelDataString = localStorage.getItem('level');
  const levelData = levelDataString ? JSON.parse(levelDataString) : [];
  const [seq, setSeq] = useState<number[]>(
    levelData.length ? levelData : [getRandomNumber()],
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
    const levelLength = Array.isArray(seq) ? seq.length : 0;
    const record = localStorage.getItem('record') || 0;
    if (levelLength > +record)
      localStorage.setItem('record', levelLength.toString());
  }, [seq]);

  const onFinish = () => {
    setAreButtonsDisabled(false);
  };

  const record = localStorage.getItem('record') || 0;
  const levelLength = Array.isArray(seq) ? seq.length : 0;

  return (
    <div>
      <div className="mb-8">
        <p className="text-xl transition-all">
          Рекорд: <strong>{record}</strong>
        </p>
        <p className="text-xl transition-all">
          Уровень: <strong>{levelLength || 1}</strong>
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
