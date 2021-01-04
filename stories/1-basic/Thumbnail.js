import React from 'react';

// Storybook's addon plugins
import { text, number } from '@storybook/addon-knobs';

// Component
import Thumbnail from 'components/BasicComponents/Thumbnail';

const story = () => (
  <Thumbnail
    src={text(
      'src',
      'https://cdn.shopify.com/s/files/1/2580/0020/files/TontonHouse-______180221_3b75508e-934d-4158-84d2-704f0d5eb1a8_300x.png?v=1529488745',
    )}
    width={number('height', 160)}
    height={number('height', 160)}
    alt={text('alt', '')}
    caption={text('caption', 'Thumbnail')}
  />
);

export default story;

story.options = {
  info: {
    text:
      '`Thumbnail` is a small image, similar to avatar, used inline with text in lists, paragraphs or just about any layout component.',
  },
};
