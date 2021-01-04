import React from 'react';

// Storybook's addon plugins
import { text, boolean, select } from '@storybook/addon-knobs';

// Component
import Text from 'components/BasicComponents/Text';

const typeOptions = {
  secondary: 'secondary',
  warning: 'warning',
  danger: 'danger',
  default: '',
};

const story = () => (
  <Text
    code={boolean('code', false)}
    copyable={boolean('copyable', false)}
    delete={boolean('delete', false)}
    disabled={boolean('disabled', false)}
    ellipsis={boolean('ellipsis', false)}
    mark={boolean('mark', false)}
    underline={boolean('underline', false)}
    strong={boolean('strong', false)}
    type={select('type', typeOptions, '')}
    className={text('className', '')}
  >
    {text('children', 'Text')}
  </Text>
);

story.options = {
  info: {
    text: `
    View [Antd Typography.Text](https://ant.design/components/typography/#text) for detailed description and documentation about <Typography.Text> component.
  `,
  },
};

export default story;
