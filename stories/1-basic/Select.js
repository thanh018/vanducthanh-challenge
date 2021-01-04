import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Select, { Option } from 'components/BasicComponents/Select';

// Change the display name of forwardRef components for visual purpose
Select.displayName = `Select`;

const modeOptions = {
  'No Value': '',
  multiple: 'multiple',
  tags: 'tags',
};

const story = () => (
  <Select
    defaultValue="option1"
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
    showArrow={boolean('showArrow', false)}
    className={text('className', '')}
    mode={select('mode', modeOptions, '')}
  >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
  </Select>
);

story.options = {
  info: {
    text: `
    View [Antd Select](https://ant.design/components/select/) for detailed description and documentation about <Select> component.
  `,
  },
};

export default story;
