import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { ButtonColors } from '../types';

import Button from './Button';

const ButtonsGroup = () => {
  const [buttonStates, setButtonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [isFirstRender, setIsFirstRender] = useState(true);

  const seq = [1, 2, 3, 4];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isFirstRender) {
      timeoutId = setTimeout(() => {
        setIsFirstRender(false);
      }, 3000);
    }

    seq.forEach((buttonIndex, index) => {
      timeoutId = setTimeout(
        () => {
          setButtonStates(prevState => ({
            ...prevState,
            [buttonIndex]: true,
          }));
          // Reset other button states
          for (const key in buttonStates) {
            if (key !== buttonIndex.toString()) {
              setButtonStates(prevState => ({
                ...prevState,
                [key]: false,
              }));
            }
          }
        },
        (isFirstRender ? 3000 : 0) + index * 500,
      );
    });

    // Clear timeout to avoid memory leaks
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isFirstRender]); // Add isFirstRender to dependency array

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, delay: 2 }}
      className="grid grid-cols-[1fr_64px_1fr]  max-sm:grid-cols-[1fr_32px_1fr] gap-8 max-md:gap-6 max-sm:gap-4 justify-items-center"
    >
      <Button
        isActive={buttonStates[1]}
        color={ButtonColors.BLUE}
        direction="vertical"
        className="col-start-2"
      />
      <Button
        isActive={buttonStates[2]}
        color={ButtonColors.RED}
        direction="horizontal"
        className="col-start-1"
      />
      <div className="center col-start-2 w-2"></div>
      <Button
        isActive={buttonStates[3]}
        color={ButtonColors.GREEN}
        direction="horizontal"
        className="col-start-3"
      />
      <Button
        isActive={buttonStates[4]}
        color={ButtonColors.VIOLET}
        direction="vertical"
        className="col-start-2"
      />
    </motion.div>
  );
};
export default ButtonsGroup;
