import React from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';

// Component
import Image from 'components/BasicComponents/Image';

const story = () => (
  <Image
    alt={text('alt', '')}
    src={text(
      'src',
      'https://lh3.googleusercontent.com/proxy/WnM0CXjfakGrIiUpOdMGE61a3MZzjpEwfRahk3hYEKf8N86dgOCm0EsND6vW1wCFlXlUdUitsESt35vOnqzQceNrAhrhWWqxVw',
    )}
    width={419}
    height={144}
  />
);

export default story;
