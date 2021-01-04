import React from 'react';

// Plugins
import { action } from '@storybook/addon-actions';

// Component
import LanguageSelector from 'components/LayoutComponents/TopBar/LanguageSelector';

const story = () => (
  <LanguageSelector locale="en" onChangeLang={action('onChangeLang')} />
);

export default story;
