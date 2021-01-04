import React from 'react';

// Component
import Button from 'components/BasicComponents/Button';
import Checkbox from 'components/BasicComponents/Checkbox';
import Input from 'components/BasicComponents/Input';
import Password from 'components/BasicComponents/Password';
import Form from 'components/BasicComponents/Form';

// Change the display name of components for visual purpose
Form.displayName = `Form`;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const story = () => (
  <Form
    {...layout}
    name="basic"
    initialValues={{
      remember: true,
    }}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Password />
    </Form.Item>

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

story.options = {
  info: {
    text: `
    View [Antd Form](https://ant.design/components/form/) for detailed description and documentation about <Form> component.
  `,
  },
};

export default story;
