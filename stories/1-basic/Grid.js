import * as React from 'react';

import { select } from '@storybook/addon-knobs';

// Component
import Grid from 'components/BasicComponents/Grid';

const { Col, Row } = Grid;

const story = () => {
  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Row
      gutter={[
        select('gutters', [8, 16, 24, 32, 40, 48], 8),
        select('vgutters', [8, 16, 24, 32, 40, 48], 8),
      ]}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  );
};

story.options = {
  info: {
    text: `
    View [Antd Grid](https://ant.design/components/grid/) for detailed description and documentation about <Grid> component.
  `,
  },
};

export default story;
