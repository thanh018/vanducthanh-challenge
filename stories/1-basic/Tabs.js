/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

// Storybook's addon plugins
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Tabs from 'components/BasicComponents/Tabs';

// Change the display name of components for visual purpose
Tabs.displayName = `Tabs`;

const { Tab } = Tabs;

const initialTabList = [
  {
    tab: 'Tab 1',
    key: 1,
    content: 'Content of Tab Pane 1',
  },
];

const typeOptions = {
  line: 'line',
  card: 'card',
  'editable-card': 'editable-card',
};

const positionOptions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
};

const sizeOptions = {
  large: 'large',
  default: 'default',
  small: 'small',
};

const story = () => {
  const [tabList, setTabList] = useState(initialTabList);
  const [count, setCount] = useState(tabList.length);

  const addTab = (targetKey, editAction) => {
    action('onEdit');
    if (editAction === 'add') {
      setTabList([
        ...tabList,
        {
          tab: `Tab ${count + 1}`,
          key: count + 1,
          content: `Content of Tab Pane ${count + 1}`,
        },
      ]);
      setCount(count + 1);
    } else if (editAction === 'remove') {
      const targetIndex = tabList.findIndex(
        tab => tab.key.toString() === targetKey,
      );
      // eslint-disable-next-line prefer-const
      let newList = [...tabList];
      newList.splice(targetIndex, 1);
      setTabList(newList);
    }
  };

  return (
    <div>
      <Tabs
        defaultActiveKey={`${tabList[0].key}`}
        onChange={action('onChange')}
        onTabClick={action('onTabClick')}
        onEdit={addTab}
        type={select('type', typeOptions, 'line')}
        size={select('size', sizeOptions, 'default')}
        tabPosition={select('tabPosition', positionOptions, 'top')}
        hideAdd={boolean('hideAdd', false)}
      >
        {tabList.map((tab, index) => (
          <Tab
            tab={text(`Title of Tab ${index + 1}`, tab.tab)}
            key={text(`Key of Tab ${index + 1}`, tab.key)}
          >
            {text(`Content of Tab ${index + 1}`, tab.content)}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

story.options = {
  info: {
    text: `
    View [Antd Tabs](https://ant.design/components/tabs/) for detailed description and documentation about <Tabs> component.
  `,
  },
};

export default story;
