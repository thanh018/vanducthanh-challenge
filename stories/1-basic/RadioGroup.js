import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import RadioGroup, { Radio } from 'components/BasicComponents/RadioGroup';

// Change the display name of forwardRef components for visual purpose
RadioGroup.displayName = `RadioGroup`;

const story = () => (
  <RadioGroup
    buttonStyle={select(
      'buttonStyle',
      { outline: 'outline', solid: 'solid' },
      'outline',
    )}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  >
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </RadioGroup>
);

story.options = {
  info: {
    text: `
    View [Antd Radio](https://ant.design/components/radio/) for detailed description and documentation about <Radio> component.
  `,
  },
};

export default story;
