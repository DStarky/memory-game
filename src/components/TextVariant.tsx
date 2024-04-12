import { useEffect, useState } from 'react';
import { isError } from 'util';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);
  const [seq, setSeq] = useState<number[]>([1, 2, 3, 4]);
  const [answer, setAnswer] = useState<number[]>([]);
  const [isError, setIsError] = useState(false);
  const [index, setIndex] = useState(0);

  // Добавляем useEffect для отслеживания изменений в seq и answer
  useEffect(() => {
    if (!areButtonsDisabled) {
      // Сравниваем массивы seq и answer
      const isEqual = answer.every((value, index) => value === seq[index]);

      if (!isEqual) {
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
        }, 1000);

        setTimeout(() => {
          setAnswer([]);
          setIndex(0);
          setSeq([3, 2]);
        }, 1500);
      }
    }
  }, [seq, answer]);

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

      <TextOutput
        isError={isError}
        index={index}
        setIndex={setIndex}
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
