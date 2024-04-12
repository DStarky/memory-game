import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import ButtonsGroup from './components/ButtonsGroup';
import Title from './components/Title';
import TextVariant from './components/TextVariant';

const App = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const handleAnimationComplete = () => {
    setIsTitleVisible(false);
  };
  return (
    <section className="flex h-screen items-center justify-center">
      {/* <AnimatePresence>
        {isTitleVisible ? (
          <Title
            key="title"
            onFinish={handleAnimationComplete}
            isTitleVisible={isTitleVisible}
          />
        ) : (
          <ButtonsGroup key="butons" />
        )}
      </AnimatePresence> */}
      <TextVariant />
    </section>
  );
};
export default App;
