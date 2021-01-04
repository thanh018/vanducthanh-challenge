import React from 'react';

// Storybook's addon plugins
import { text } from '@storybook/addon-knobs';

// Component
import Panel from 'components/BasicComponents/Panel';

const { Header, Footer, Body } = Panel;

const story = () => (
  <Panel>
    <Header>
      {text('header', 'This is the Header, you can use a React Node instead!')}
    </Header>
    <Body>
      {text('body', 'This is the Body, you can use a React Node instead!')}
    </Body>
    <Footer>
      {text('footer', 'This is the Footer, you can use a React Node instead!')}
    </Footer>
  </Panel>
);

export default story;
