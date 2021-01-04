import React, { useState } from 'react';

// Component
import Badge from 'components/BasicComponents/Badge';
import Button from 'components/BasicComponents/Button';

const story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <Badge count={count}>
      <Button onClick={() => addCount()}>Click here</Button>
    </Badge>
  );
};

story.options = {
  info: {
    text: `
    View [Antd Badge](https://ant.design/components/badge/) for detailed description and documentation about <Badge> component.
  `,
  },
};

export default story;
