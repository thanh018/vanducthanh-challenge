import React from 'react';

// Storybook's addon plugins
import { number, boolean, text } from '@storybook/addon-knobs';

// Component
import Sticky from 'components/BasicComponents/Sticky';

const story = () => (
  <div
    style={{
      backgroundColor: '#f3f3f3',
      position: 'relative',
      width: text('Width of the container', '100%'),
      height: text('Height of the container', '200px'),
    }}
  >
    <Sticky
      offsetTop={number('offsetTop', 30)}
      offsetBottom={number('offsetBottom', null)}
      isAbsolute={boolean('isAbsolute', false)}
      top={number('top', null)}
      left={number('left', null)}
      bottom={number('bottom', null)}
      right={number('right', null)}
    >
      <div
        style={{
          width: 100,
          height: 40,
          background: 'lightblue',
          textAlign: 'center',
        }}
      >
        I am a Sticky Component
      </div>
    </Sticky>
  </div>
);

export default story;
