import React from 'react';

// Storybook's addon plugins
import { select, boolean } from '@storybook/addon-knobs';

// Component
import List from 'components/BasicComponents/List';
import Text from 'components/BasicComponents/Text';

// Change the display name of components for visual purpose
List.displayName = `List`;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const sizeOptions = {
  small: 'small',
  default: 'default',
  large: 'large',
};

const story = () => (
  <List
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered={boolean('bordered', false)}
    split={boolean('split', false)}
    size={select('size', sizeOptions, 'default')}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Text mark>[ITEM]</Text> {item}
      </List.Item>
    )}
  />
);

story.options = {
  info: {
    text: `
    View [Antd List](https://ant.design/components/list/) for detailed description and documentation about <List> component.
  `,
  },
};

export default story;
