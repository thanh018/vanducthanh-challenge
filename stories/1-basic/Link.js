import React from 'react';

// Storybook's addon plugins
import { text, boolean } from '@storybook/addon-knobs';

// Component
import Link from 'components/BasicComponents/Link';

const story = () => (
  <Link
    to={text('to', 'https://metanet.co.kr/')}
    target={text('target', '_blank')}
    routing={boolean('routing', true)}
  >
    {text('children', 'Metanet')}
  </Link>
);

story.options = {
  info:
    'When using this component as the <Link> in react-router-dom, (`routing` property is true), please ensure that the component is inside the <Router> component.',
};

export default story;
