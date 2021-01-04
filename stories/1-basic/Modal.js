/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Modal from 'components/BasicComponents/Modal';
import Button from 'components/BasicComponents/Button';

// Change the display name of forwardRef components for visual purpose
Modal.displayName = `Modal`;

const story = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title={text('title', 'Basic Modal', 'Modal')}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Button
        onClick={() => {
          const confirmOptions = {
            title: text(
              'title',
              'Do you Want to delete these items?',
              'Confirm',
            ),
            content: text('content', 'Some descriptions', 'Confirm'),
            onOk: action('onOK'),
            onCancel: action('Cancel'),
          };

          Modal.confirm(confirmOptions);
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

story.options = {
  info: {
    text: `
    View [Antd Modal](https://ant.design/components/modal/) for detailed description and documentation about <Modal> component.
  `,
  },
};

export default story;
