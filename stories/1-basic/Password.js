import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Password from 'components/BasicComponents/Password';

// Change the display name of forwardRef components for visual purpose
Password.displayName = `Password`;

const story = () => (
  <Password
    visibilityToggle={boolean('visibilityToggle', false)}
    onChange={action('onChange')}
    onPressEnter={action('onPressEnter')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Input.Password](https://ant.design/components/input/#password) for detailed description and documentation about <Input.Password> component.
  `,
  },
};

export default story;
