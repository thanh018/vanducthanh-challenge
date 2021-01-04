import React from 'react';

// Storybook's addon plugins
import { text, select, number } from '@storybook/addon-knobs';

// Component
import showNotification from 'components/BasicComponents/Notification';
import Button from 'components/BasicComponents/Button';

const typeOptions = {
  success: 'success',
  info: 'info',
  error: 'error',
  warning: 'warning',
};

const placementOptions = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight',
};

const notificationOptions = {
  type: select('type', typeOptions, 'success'),
  duration: number('duration', 3),
  className: text('className', ''),
  placement: select('placement', placementOptions, ''),
  message: text('message', 'Notification Title'),
  description: text(
    'description',
    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  ),
};

const story = () => (
  <Button type="primary" onClick={() => showNotification(notificationOptions)}>
    Show Notification
  </Button>
);

story.options = {
  info: {
    text: `
    View [Antd Notification](https://ant.design/components/notification/) for detailed description and documentation about <Notification> component.
  `,
  },
};

export default story;
