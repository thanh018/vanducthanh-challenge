import React from 'react';

// Storybook's addon plugins
import { boolean } from '@storybook/addon-knobs';

// Component
import Table from 'components/BasicComponents/Table';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const story = () => (
  <Table
    dataSource={dataSource}
    columns={columns}
    bordered={boolean('bordered', false)}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Table](https://ant.design/components/table/) for detailed description and documentation about <Table> component.
  `,
  },
};

export default story;
