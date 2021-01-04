import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Search from 'components/BasicComponents/Search';

// Change the display name of components for visual purpose
Search.displayName = `Search`;

const story = () => (
  <Search
    onSearch={action('onSearch')}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    enterButton={boolean('enterButton', false)}
    className={text('className', '')}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Input.Search](https://ant.design/components/input/#search) for detailed description and documentation about <Input.Search> component.
  `,
  },
};

export default story;
