import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Email from 'components/BasicComponents/Email';

// Change the display name of components for visual purpose
Email.displayName = `Email`;

const story = () => (
  <Email
    onChange={action('onChange')}
    onPressEnter={action('onPressEnter')}
    disabled={boolean('disabled', false)}
    allowClear={boolean('allowClear', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Input](https://ant.design/components/input) for detailed description and documentation about <Input> component with email type .
  `,
  },
};

export default story;
