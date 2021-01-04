import React from 'react';

// Storybook's addon plugins
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Input from 'components/BasicComponents/Input';

// Change the display name of forwardRef components for visual purpose
Input.displayName = `Input`;

const story = () => (
  <Input
    maxLength={number('maxLength', null)}
    onChange={action('onChange')}
    onPressEnter={action('onPressEnter')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Input](https://ant.design/components/input/) for detailed description and documentation about <Input> component.
  `,
  },
};

export default story;
