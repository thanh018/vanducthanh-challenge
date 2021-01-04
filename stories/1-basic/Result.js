import React from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';

// Component
import Result from 'components/BasicComponents/Result';
import Button from 'components/BasicComponents/Button';

const story = () => (
  <Result
    title={text('title', 'Your operation has been executed')}
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);

story.options = {
  info: {
    text: `
    View [Antd Result](https://ant.design/components/input/#result) for detailed description and documentation about <Result> component.
  `,
  },
};

export default story;
