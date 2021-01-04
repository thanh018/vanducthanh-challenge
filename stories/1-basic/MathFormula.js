import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';

import MathFormula from 'components/BasicComponents/MathFormula';

const MATH_FORMULA_TEXT = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';

const inputTypeOptions = {
  ascii: 'ascii',
  tex: 'tex',
};

const story = () => (
  <MathFormula
    inputType={select('inputType', inputTypeOptions, 'ascii')}
    className={text('className', '')}
    hasText={boolean('hasText', false)}
  >
    {text('children', MATH_FORMULA_TEXT)}
  </MathFormula>
);

export default story;
