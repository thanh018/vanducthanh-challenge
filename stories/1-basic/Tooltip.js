import React from 'react';

// Storybook's addon plugins
import { text, select } from '@storybook/addon-knobs';

// Component
import Tooltip from 'components/BasicComponents/Tooltip';

// Change the display name of components for visual purpose
Tooltip.displayName = `Tooltip`;

const placementOptions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
};

const triggerOptions = {
  // eslint-disable-next-line prettier/prettier
  hover: ['hover'],
  // eslint-disable-next-line prettier/prettier
  click: ['click'],
  both: ['hover', 'click'],
};

const story = () => (
  <div style={{ paddingTop: '2em' }}>
    <Tooltip
      title={text('title', 'Tooltip title')}
      placement={select('placement', placementOptions, 'top')}
      trigger={select('trigger', triggerOptions, triggerOptions.hover)}
    >
      <span>{text('text', 'Tooltip will show on mouse enter.')}</span>
    </Tooltip>
  </div>
);

story.options = {
  info: {
    text: `
    View [Antd Tooltip](https://ant.design/components/tooltip/) for detailed description and documentation about <Tooltip> component.
  `,
  },
};

export default story;
