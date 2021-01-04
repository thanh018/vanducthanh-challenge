import React from 'react';

// Storybook's addon plugins
import { text, select } from '@storybook/addon-knobs';

// Component
import Avatar from 'components/BasicComponents/Avatar';

// Change the display name of components for visual purpose
Avatar.displayName = `Avatar`;

const sizeOptions = {
  default: 'default',
  small: 'small',
  large: 'large',
  '20': 20,
  '25': 25,
  '35': 35,
  '50': 50,
  '70': 70,
  '90': 90,
  '110': 110,
};

const shapeOptions = {
  circle: 'circle',
  square: 'square',
};

const story = () => (
  <Avatar
    src={text(
      'src',
      'https://www.cbns.org.au/wp-content/uploads/2017/05/img_placeholder_avatar.jpg',
    )}
    shape={select('shape', shapeOptions, 'circle')}
    size={select('size', sizeOptions, 'default')}
  />
);

export default story;
