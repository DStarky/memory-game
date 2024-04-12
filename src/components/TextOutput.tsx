import { useEffect, useState } from 'react';

const TextOutput = () => {
  const [seq, setSeq] = useState<number[]>([1, 2, 3, 4]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => {
      setIndex(i => {
        if (i === seq.length - 1) {
          clearInterval(id);
          return i;
        }
        return i + 1;
      });
    };

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [seq]);
  return (
    <div className="p-12 border-slate-500 border-[1px] rounded-md min-w-[320px] flex justify-center">
      {seq[index % seq.length]}
    </div>
  );
};
export default TextOutput;
