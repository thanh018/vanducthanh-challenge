import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TableTwoHeaders from './TableTwoHeaders';

storiesOf('Custom Components', module)
  .addDecorator(withKnobs)
  .add('TableTwoHeaders', TableTwoHeaders, TableTwoHeaders.options);
