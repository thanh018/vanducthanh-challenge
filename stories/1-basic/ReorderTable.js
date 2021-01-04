/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import ReorderTable from 'components/BasicComponents/ReorderTable';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const mockData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

const story = () => {
  const [data, setData] = useState(mockData);
  const onSortEnd = sortedData => {
    setData(sortedData);
  };
  return (
    <ReorderTable
      dataSource={data}
      columns={columns}
      rowKey="key"
      onSortEnd={onSortEnd}
    />
  );
};

export default story;
