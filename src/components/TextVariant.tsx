import { useState } from 'react';

import TextButtons from './TextButtons';
import TextOutput from './TextOutput';

const TextVariant = () => {
  const [areButtonsDisabled, setAreButtonsDisabled] = useState<boolean>(true);

  return (
    <div>
      <TextOutput />
      <TextButtons disabled={areButtonsDisabled} />
    </div>
  );
};
export default TextVariant;
