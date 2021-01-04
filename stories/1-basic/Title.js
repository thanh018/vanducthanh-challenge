import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';

// Component
import Title from 'components/BasicComponents/Title';

const typeOptions = {
  secondary: 'secondary',
  warning: 'warning',
  danger: 'danger',
  default: '',
};

const levelOptions = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
};

const story = () => (
  <Title
    code={boolean('code', false)}
    copyable={boolean('copyable', false)}
    delete={boolean('delete', false)}
    disabled={boolean('disabled', false)}
    ellipsis={boolean('ellipsis', false)}
    mark={boolean('mark', false)}
    underline={boolean('underline', false)}
    strong={boolean('strong', false)}
    type={select('type', typeOptions, '')}
    level={select('level', levelOptions, 1)}
    className={text('className', '')}
  >
    {text('children', 'Title')}
  </Title>
);

story.options = {
  info: {
    text: `
    View [Antd Typography.Title](https://ant.design/components/typography/#title) for detailed description and documentation about <Typography.Title> component.
  `,
  },
};

export default story;
