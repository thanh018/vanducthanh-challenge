/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from 'react';

// Storybook's addon plugins
import { boolean, text } from '@storybook/addon-knobs';

// Component
import EditableTable from 'components/BasicComponents/EditableTable';
import Button from 'components/BasicComponents/Button';
import Modal from 'components/BasicComponents/Modal';

EditableTable.displayName = 'EditableTable';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    index: 0,
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    index: 1,
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    editable: true,
    width: 120,
    editFilter: record => record.newCell === true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    editable: true,
    width: 60,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    editable: true,
    width: 200,
  },
];

const story = () => {
  const [count, setCount] = useState(dataSource.length);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const tableRef = useRef(null);

  const handleAdd = () => {
    const newData = {
      key: `${count + 1}`,
      age: 0,
      name: '',
      address: '',
      index: count,
      newCell: true, // This field will be removed after saving
    };
    setCount(count + 1);
    tableRef.current.onAdd(newData);
  };

  const handleSave = () => {
    const newDataSource = tableRef.current.onSave().map(data => ({
      key: data.key,
      age: data.age,
      name: data.name,
      address: data.address,
      index: data.index,
    }));
    tableRef.current.onUpdate(newDataSource);
  };

  const handleDelete = () => {
    if (selectedRowKeys.length > 0) {
      Modal.confirm({
        title: 'Are you sure to Delete?',
        onOk: () => {
          tableRef.current.onDelete(selectedRowKeys);
        },
      });
    }
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: keys => {
      setSelectedRowKeys(keys);
    },
  };

  return (
    <div>
      <Button style={{ marginRight: 8 }} onClick={handleAdd}>
        Add Row
      </Button>
      <Button style={{ marginRight: 8 }} onClick={handleSave}>
        Save
      </Button>
      <Button onClick={handleDelete}>Delete</Button>
      <EditableTable
        ref={tableRef}
        rowSelection={rowSelection}
        data={dataSource}
        reorderable={boolean('reorderable', false)}
        columns={columns}
        rowKey={text('rowKey', 'key')}
      />
    </div>
  );
};
export default story;
