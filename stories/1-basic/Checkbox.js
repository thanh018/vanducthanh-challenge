import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Checkbox from 'components/BasicComponents/Checkbox';

// Change the display name of forwardRef components for visual purpose
Checkbox.displayName = `Checkbox`;

const story = () => (
  <Checkbox
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  >
    {text('children', 'Checkbox')}
  </Checkbox>
);

story.options = {
  info: {
    text: `
    View [Antd Checkbox](https://ant.design/components/checkbox/) for detailed description and documentation about <Checkbox> component.
  `,
  },
};

export default story;
