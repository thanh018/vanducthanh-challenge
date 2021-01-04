import React from 'react';

import TableTwoHeaders from 'components/CustomComponents/TableTwoHeaders';
import {
  dataSourceMock,
  columnsHoriziontal,
  columnsVertical,
} from 'components/CustomComponents/TableTwoHeaders/mock';

const story = () => (
  <TableTwoHeaders
    dataSource={dataSourceMock}
    columnsHoriziontal={columnsHoriziontal}
    columnsVertical={columnsVertical}
  />
);

export default story;
