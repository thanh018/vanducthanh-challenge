import React from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';

// Component
import DateFormatter from 'components/BasicComponents/DateFormatter';

const story = () => (
  <DateFormatter
    value={text('value', '01/01/2020')}
    fromPattern={text('fromPattern', '')}
    pattern={text('pattern', 'DD-MM-YYYY')}
  />
);

story.options = {
  info: {
    text: `
    The component is based on [Format method of Moment.js](https://momentjs.com/docs/#/displaying/format/).
 
    *Note:* While these date formats are very similar to LDML date formats, there are a few minor differences regarding day of month, day of year, and day of week.
    For a breakdown of a few different date formatting tokens across different locales, see [this chart of date formatting tokens](https://docs.google.com/spreadsheet/ccc?key=0AtgZluze7WMJdDBOLUZfSFIzenIwOHNjaWZoeGFqbWc&amp;hl=en_US#gid=0).
  `,
  },
};

export default story;
