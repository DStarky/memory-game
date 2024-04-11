import { motion } from 'framer-motion';

import { ButtonColors } from '../types';

import Button from './Button';

const ButtonsGroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, delay: 2 }}
      className="grid grid-cols-[1fr_64px_1fr]  max-sm:grid-cols-[1fr_32px_1fr] gap-8 max-md:gap-6 max-sm:gap-4 justify-items-center"
    >
      <Button
        order={1}
        isActive={false}
        color={ButtonColors.BLUE}
        direction="vertical"
        className="col-start-2"
      />
      <Button
        order={2}
        isActive={false}
        color={ButtonColors.RED}
        direction="horizontal"
        className="col-start-1"
      />
      <div className="center col-start-2 w-2"></div>
      <Button
        order={3}
        isActive={true}
        color={ButtonColors.GREEN}
        direction="horizontal"
        className="col-start-3"
      />
      <Button
        order={4}
        isActive={false}
        color={ButtonColors.VIOLET}
        direction="vertical"
        className="col-start-2"
      />
    </motion.div>
  );
};
export default ButtonsGroup;
