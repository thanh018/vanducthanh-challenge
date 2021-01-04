import React from 'react';

// Storybook's addon plugins
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Number from 'components/BasicComponents/Number';

// Change the display name of components for visual purpose
Number.displayName = `Number`;

const story = () => (
  <Number
    max={number('max', null)}
    min={number('min', null)}
    precision={number('precision', null)}
    step={number('step', null)}
    onChange={action('onChange')}
    onPressEnter={action('onPressEnter')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd InputNumber](https://ant.design/components/input-number) for detailed description and documentation about <InputNumber> component.
  `,
  },
};

export default story;
