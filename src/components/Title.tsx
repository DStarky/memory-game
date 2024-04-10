import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Title = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={handleAnimationComplete}
        >
          <h1 className="font-primary text-[128px] uppercase">memory</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Title;
