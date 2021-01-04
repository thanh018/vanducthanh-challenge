import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Footer from './Footer';
import Loader from './Loader';

storiesOf('Layout Components', module)
  .addDecorator(withKnobs)
  .add('Footer', Footer, Footer.options)
  .add('Loader', Loader);
