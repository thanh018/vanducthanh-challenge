import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import ConfirmButton from 'components/BasicComponents/ConfirmButton';

const story = () => (
  <ConfirmButton
    isDisabled={boolean('isDisabled', false)}
    text={text('text', 'ConfirmButton')}
    message={text('text', 'Modal Message')}
    onOK={action('onOK')}
  />
);

export default story;
