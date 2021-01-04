import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';

// Component
import Spinner from 'components/BasicComponents/Spinner';

const sizeOptions = {
  small: 'small',
  default: 'default',
  large: 'large',
};

const story = () => (
  <Spinner
    tip={text('tip', 'Loading')}
    size={select('size', sizeOptions, 'default')}
    spinning={boolean('spinning', true)}
  />
);

story.options = {
  info: {
    text: `
    When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

    View [Antd Spin](https://ant.design/components/spin/) for detailed description and documentation about <Spin> component.
  `,
  },
};

export default story;
