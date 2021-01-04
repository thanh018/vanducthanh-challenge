import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';

import Switch from 'components/BasicComponents/Switch';

Switch.displayName = `Switch`;

const story = () => (
  <Switch
    className={text('className', '')}
    autoFocus={boolean('autoFocus', false)}
    checked={boolean('checked', false)}
    defaultChecked={boolean('defaultChecked', false)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    size={text('size', 'default')}
  />
);
story.option = {
  info: {
    text: `
    View [Antd Switch](https://ant.design/components/switch/) for detailed description and documentation about <Switch> component.
  `,
  },
};
export default story;
