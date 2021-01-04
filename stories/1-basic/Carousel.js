import React from 'react';

// Storybook's addon plugins
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Carousel from 'components/BasicComponents/Carousel';

// Change the display name of components for visual purpose
Carousel.displayName = `Carousel`;

const positionOptions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const story = () => (
  <Carousel
    style={{
      background: '#364d79',
      height: '100px',
      textAlign: 'center',
      lineHeight: '100px',
    }}
    autoplay={boolean('autoplay', false)}
    dots={boolean('dots', true)}
    dotPosition={select('dotPosition', positionOptions, 'bottom')}
    afterChange={action('afterChange')}
    beforeChange={action('beforeChange')}
  >
    <div>
      <span>1</span>
    </div>
    <div>
      <span>2</span>
    </div>
    <div>
      <span>3</span>
    </div>
    <div>
      <span>4</span>
    </div>
  </Carousel>
);

story.options = {
  info: {
    text: `
    View [Antd Carousel](https://ant.design/components/carousel/) for detailed description and documentation about <Carousel> component.
  `,
  },
};

export default story;
