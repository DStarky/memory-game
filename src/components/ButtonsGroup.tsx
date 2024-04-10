import { motion } from 'framer-motion';

import Button from './Button';

const ButtonsGroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, delay: 2 }}
      className="grid grid-cols-2 gap-8"
    >
      <Button color="blue" />
      <Button color="green" />
      <Button color="red" />
      <Button color="violet" />
    </motion.div>
  );
};
export default ButtonsGroup;
