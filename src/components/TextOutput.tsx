import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface TextOutputProps {
  seq: number[];
  onFinish: () => void;
  output: string | number;
  setOutput: React.Dispatch<React.SetStateAction<string | number>>;
}

const TextOutput = ({ seq, onFinish, output, setOutput }: TextOutputProps) => {
  useEffect(() => {
    const render = async () => {
      for (let index = 0; index < seq.length; index++) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            setOutput(seq[index] + Math.random()); // для выполнения анимации нужно, чтобы стейт менялся. В случае одинаковых чисел подряд анимация не сработает, поэтому добавляем капельку рандома
            resolve();
          }, 1000);
        });
      }

      setTimeout(() => {
        setOutput('повторите');
        onFinish();
      }, 1000);
    };

    render();
  }, [seq]);

  const curOutput = typeof output === 'number' ? Math.floor(output) : output;

  return (
    <div className="p-12 border-[1px] rounded-md min-w-[320px] flex justify-center text-2xl border-slate-700 text-slate-700">
      <motion.span
        key={output}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {curOutput}
      </motion.span>
    </div>
  );
};
export default TextOutput;
