import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';

// Component
import Dropdown from 'components/BasicComponents/Dropdown';

// Change the display name of components for visual purpose
Dropdown.displayName = `Dropdown`;

const triggerOptions = {
  // eslint-disable-next-line prettier/prettier
  hover: ['hover'],
  // eslint-disable-next-line prettier/prettier
  click: ['click'],
  both: ['hover', 'click'],
};

const overlay = (
  <div style={{ backgroundColor: '#f3f3f3', padding: 16 }}>Example Overlay</div>
);

const story = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Dropdown
      disabled={boolean('disabled', false)}
      overlay={overlay}
      className={text('className', '')}
      trigger={select('trigger', triggerOptions, ['hover'])}
    >
      <a>Hover Me</a>
    </Dropdown>
    <Dropdown.Button
      disabled={boolean('disabled', false)}
      overlay={overlay}
      className={text('className', '')}
      trigger={select('trigger', triggerOptions, 'hover')}
    >
      Hover Me
    </Dropdown.Button>
  </div>
);

story.options = {
  info: {
    text: `
    View [Antd Dropdown](https://ant.design/components/dropdown/) for detailed description and documentation about <Dropdown> component.
  `,
  },
};

export default story;
