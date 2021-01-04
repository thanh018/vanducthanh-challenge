import React from 'react';

// Storybook's addon plugins
import { boolean, text } from '@storybook/addon-knobs';

// Component
import Loader from 'components/LayoutComponents/Loader';

const story = () => (
  <div
    style={{
      position: 'relative',
      width: text('Width of the container', '100%'),
      height: text('Height of the container', '400px'),
    }}
  >
    <Loader
      spinning={boolean('spinning', true)}
      fullScreen={boolean('fullScreen', false)}
    />
  </div>
);

export default story;
