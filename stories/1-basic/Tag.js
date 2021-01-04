import React from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';

// Component
import Tag from 'components/BasicComponents/Tag';

const story = () => (
  <Tag color={text('color', '')} className={text('className', '')}>
    {text('children', 'Tag')}
  </Tag>
);

export default story;
