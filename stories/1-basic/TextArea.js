import React from 'react';

// Storybook's addon plugins
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import TextArea from 'components/BasicComponents/TextArea';

// Change the display name of forwardRef components for visual purpose
TextArea.displayName = `TextArea`;

const story = () => (
  <TextArea
    rows={number('rows', null)}
    onChange={action('onChange')}
    onPressEnter={action('onPressEnter')}
    onResize={action('onResize')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    For multi-line input.

    View [Antd Input.TextArea](https://ant.design/components/input/#textarea) for detailed description and documentation about <Input.TextArea> component.
  `,
  },
};

export default story;
