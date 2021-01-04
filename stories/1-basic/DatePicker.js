import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import DatePicker from 'components/BasicComponents/DatePicker';

// Change the display name of forwardRef components for visual purpose
DatePicker.displayName = `DatePicker`;

const sizeOptions = {
  'No value': '',
  middle: 'middle',
  small: 'small',
};

const pickerOptions = {
  date: 'date',
  week: 'week',
  month: 'month',
  quarter: 'quarter',
};

const story = () => (
  <DatePicker
    onOpenChange={action('onOpenChange')}
    disabled={boolean('disabled', false)}
    bordered={boolean('bordered', false)}
    size={select('size', sizeOptions, '')}
    picker={select('picker', pickerOptions, 'date')}
    placeholder={text('placeholder', 'Select a Date')}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd DatePicker](https://ant.design/components/datepicker/) for detailed description and documentation about <DatePicker> component.
  `,
  },
};

export default story;
