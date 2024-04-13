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
  const [areButtonsDisabled, _setAreButtonsDisabled] = useState(false);

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
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="text-3xl absolute top-12 left-1/2 -translate-x-1/2 font-title"
      >
        Уровень: <strong>{seq.length}</strong>
      </motion.h1>
      <div className="grid grid-cols-[1fr_64px_1fr]  max-sm:grid-cols-[1fr_32px_1fr] gap-8 max-md:gap-6 max-sm:gap-4 justify-items-center">
        <Button
          isActive={buttonStates[1]}
          color={ButtonColors.BLUE}
          direction="vertical"
          className="col-start-2"
          disabled={areButtonsDisabled}
        />
        <Button
          isActive={buttonStates[2]}
          color={ButtonColors.RED}
          direction="horizontal"
          className="col-start-1"
          disabled={areButtonsDisabled}
        />
        <div className="center col-start-2 w-2"></div>
        <Button
          isActive={buttonStates[3]}
          color={ButtonColors.GREEN}
          direction="horizontal"
          className="col-start-3"
          disabled={areButtonsDisabled}
        />
        <Button
          isActive={buttonStates[4]}
          color={ButtonColors.VIOLET}
          direction="vertical"
          className="col-start-2"
          disabled={areButtonsDisabled}
        />
      </div>
    </motion.div>
  );
};
export default ButtonsGroup;
