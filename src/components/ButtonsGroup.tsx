import { motion } from 'framer-motion';

import Button from './Button';

const ButtonsGroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, delay: 2 }}
      className="grid grid-cols-[1fr_64px_1fr] gap-8 justify-items-center"
    >
      <Button
        color="blue"
        direction="vertical"
        className="col-start-2"
      />
      <Button
        color="green"
        direction="horizontal"
        className="col-start-1"
      />
      <div className='center col-start-2 w-2'></div>
      <Button
        color="red"
        direction="horizontal"
        className="col-start-3"
      />
      <Button
        color="violet"
        direction="vertical"
        className="col-start-2"
      />
    </motion.div>
  );
};
export default ButtonsGroup;
