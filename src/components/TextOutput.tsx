import { useEffect, useState } from 'react';

import { cn } from '../helpers/cn';

interface TextOutputProps {
  seq: number[];
  onFinish: () => void;
  disabled: boolean;
}

const TextOutput = ({ seq, onFinish, disabled }: TextOutputProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => {
      setIndex(i => {
        if (i === seq.length - 1) {
          clearInterval(id);
          onFinish();
          return i;
        }
        return i + 1;
      });
    };

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [seq]);

  return (
    <div className="p-12 border-[1px] rounded-md min-w-[320px] flex justify-center text-2xl border-slate-700 text-slate-700">
      {seq[index]}
    </div>
  );
};
export default TextOutput;
