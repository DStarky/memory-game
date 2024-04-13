
import TextVariant from './components/TextVariant';

const App = () => {
  // const [_isTitleVisible, setIsTitleVisible] = useState(true);

  // const _handleAnimationComplete = () => {
  //   setIsTitleVisible(false);
  // };
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
