import React from 'react';

// Storybook's addon plugins
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import showMessage from 'components/BasicComponents/Message';
import Button from 'components/BasicComponents/Button';

const story = () => (
  <Button
    type="primary"
    onClick={() =>
      showMessage({
        type: select(
          'type',
          ['success', 'info', 'error', 'warning'],
          'success',
        ),
        duration: number('duration', 3),
        onClose: action('onClose'),
        content: text('description', 'This is the content of the message.'),
      })
    }
  >
    Show Message
  </Button>
);

story.options = {
  info: {
    text: `
    View [Antd Message](https://ant.design/components/message/) for detailed description and documentation about <Message> component.
  `,
  },
};

export default story;
