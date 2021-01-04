import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Button from 'components/BasicComponents/Button';

// Change the display name of components for visual purpose
Button.displayName = `Button`;

const typeOptions = {
  default: '',
  primary: 'primary',
  ghost: 'ghost',
  dashed: 'dashed',
  danger: 'danger',
  link: 'link',
};

const sizeOptions = {
  small: 'small',
  default: 'default',
  large: 'large',
};

const story = () => (
  <Button
    size={select('size', sizeOptions, 'default')}
    onClick={action('onClick')}
    type={select('type', typeOptions, '')}
    disabled={boolean('disabled', false)}
    className={text('className', '')}
  >
    {text('children', 'Button')}
  </Button>
);

story.options = {
  info: {
    text: `
    View [Antd Button](https://ant.design/components/button/) for detailed description and documentation about <Button> component.
  `,
  },
};

export default story;
