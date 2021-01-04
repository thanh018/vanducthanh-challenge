/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// Storybook's addon plugins

// Component
import { action } from '@storybook/addon-actions';

import Transfer from 'components/BasicComponents/Transfer';

const story = () => {
  const [targetKeys, setTargetKeys] = useState([]);

  const mockData = [
    {
      key: 1,
      title: `content 1`,
      description: `description of content 1`,
    },
    {
      key: 2,
      title: `content 2`,
      description: `description of content 2`,
    },
    {
      key: 3,
      title: `content 3`,
      description: `description of content 3`,
    },
  ];
  const filterOption = (inputValue, option) =>
    option.description.indexOf(inputValue) > -1;

  const handleChange = keys => {
    setTargetKeys(keys);
  };

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      filterOption={filterOption}
      targetKeys={targetKeys}
      onChange={handleChange}
      onSearch={action('handleSearch')}
      render={item => item.title}
    />
  );
};

story.options = {
  info: {
    text: `
    View [Antd Transfer](https://ant.design/components/input/#transfer ) for detailed description and documentation about <Transfer> component.
  `,
  },
};

export default story;
