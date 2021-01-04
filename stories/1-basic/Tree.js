import React from 'react';

// Component
import { action } from '@storybook/addon-actions';

import Tree from 'components/BasicComponents/Tree';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

const story = () => (
  <Tree
    checkable
    defaultExpandedKeys={['0-0-0', '0-0-1']}
    defaultSelectedKeys={['0-0-0', '0-0-1']}
    defaultCheckedKeys={['0-0-0', '0-0-1']}
    onSelect={action('onSelect')}
    onCheck={action('onCheck')}
    treeData={treeData}
  />
);

story.options = {
  info: {
    text: `
    View [Antd Tree](https://ant.design/components/tree/) for detailed description and documentation about <Tree> component.
  `,
  },
};

export default story;
