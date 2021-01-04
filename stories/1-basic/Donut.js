import React from 'react';

// Storybook's addon plugins
import { text, select } from '@storybook/addon-knobs';

// Component
import Donut from 'components/BasicComponents/Donut';

const typeOptions = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
};

const story = () => (
  <Donut
    name={text('name', 'Donut')}
    type={select('type', typeOptions, 'default')}
    color={text('color', '')}
  />
);

export default story;
