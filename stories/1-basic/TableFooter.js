import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import TableFooter from 'components/BasicComponents/TableFooter';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    footerTitle: 'rowkey',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
    footerTitle: 'name',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    width: 100,
    footerTitle: '',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    width: 100,
    footerTitle: 'balance',
  },
];

const dataSource = {
  list: [
    {
      id: 1,
      name: 'John',
      mobile: '12345678',
      balance: 10,
    },
    {
      id: 2,
      name: 'Mathew',
      mobile: '12345678',
      balance: 20,
    },
  ],
  pagination: {
    total: 2,
    pageSize: 1,
    current: 1,
  },
  totalRow: {
    rowkey: 'Total',
    name: 2,
    balance: 30,
  },
};

const story = () => (
  <TableFooter
    columns={columns}
    dataSource={dataSource}
    showTotal={boolean('showTotal', true)}
    defaultFooterTitle={text('defaultFooterTitle', '-')}
  />
);

export default story;
