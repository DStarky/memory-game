import { motion } from 'framer-motion';

interface TitleProps {
  isTitleVisible: boolean;
  onFinish: () => void;
}

const Title = ({ isTitleVisible, onFinish }: TitleProps) => {
  return (
    <>
      {isTitleVisible && (
        <div className="flex h-screen items-center justify-center z-50 absolute bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 1 }}
            onAnimationComplete={onFinish}
          >
            <h1 className="font-primary text-[128px] uppercase">memory</h1>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default Title;
