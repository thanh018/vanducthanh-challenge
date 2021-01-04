import React, { useState } from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Drawer from 'components/BasicComponents/Drawer';
import Button from 'components/BasicComponents/Button';

Drawer.displayName = `Drawer`;

const placementOptions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Drawer</Button>
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        placement={select('placement', placementOptions, 'right')}
        className={text('className', '')}
        maskClosable={boolean('maskClosable', false)}
      >
        Test
      </Drawer>
    </>
  );
};
story.options = {
  info: {
    text: `
    View [Antd Drawer](https://ant.design/components/drawer/) for detailed description and documentation about <Drawer> component.
  `,
  },
};

export default story;
