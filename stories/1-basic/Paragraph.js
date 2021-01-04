import React from 'react';

// Storybook's addon plugins
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import Paragraph from 'components/BasicComponents/Paragraph';

const typeOptions = {
  secondary: 'secondary',
  warning: 'warning',
  danger: 'danger',
  default: '',
};

const paragraph =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.';

const story = () => (
  <Paragraph
    code={boolean('code', false)}
    copyable={boolean('copyable', false)}
    delete={boolean('delete', false)}
    disabled={boolean('disabled', false)}
    // ellipsis={boolean('ellipsis', false)}
    ellipsis={{
      rows: number('rows', 4),
      expandable: boolean('expandable', true),
      suffix: text('suffix', '...More'),
      onExpand: action('onExpand'),
    }}
    mark={boolean('mark', false)}
    underline={boolean('underline', false)}
    strong={boolean('strong', false)}
    type={select('type', typeOptions, '')}
    className={text('className', '')}
  >
    {text('children', paragraph)}
  </Paragraph>
);

story.options = {
  info: {
    text: `
    View [Antd Typography.Paragraph](https://ant.design/components/typography/#paragraph) for detailed description and documentation about <Typography.Paragraph> component.
  `,
  },
};

export default story;
