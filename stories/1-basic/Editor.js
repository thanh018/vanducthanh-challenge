import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Editor from 'components/BasicComponents/Editor';

const previewStyleOptions = {
  tab: 'tab',
  vertical: 'vertical',
  none: '',
};

const initialEditTypeOptions = {
  markdown: 'markdown',
  wysiwyg: 'wysiwyg',
};

const story = () => (
  <Editor
    value="Editor"
    handleChange={action('handleChange')}
    previewStyle={select('previewStyle', previewStyleOptions, 'tab')}
    height={number('height', 160)}
    initialEditType={select(
      'initialEditType',
      initialEditTypeOptions,
      'markdown',
    )}
    hideModeSwitch={boolean('hideModeSwitch', false)}
  />
);
export default story;
