import React, { useState } from 'react';

// Component
import AutoComplete from 'components/BasicComponents/AutoComplete';

const { Option } = AutoComplete;

const story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result, setResult] = useState([]);
  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        domain => `${value}@${domain}`,
      );
    }
    setResult(res);
  };
  return (
    <AutoComplete
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder="AutoComplete here"
    >
      {result.map((email: string) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};

story.options = {
  info: {
    text: `
    View [Antd AutoComplete](https://ant.design/components/auto-complete) for detailed description and documentation about <AutoComplete> component.
  `,
  },
};

export default story;
