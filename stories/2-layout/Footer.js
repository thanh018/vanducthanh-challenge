import React from 'react';

import { text } from '@storybook/addon-knobs';

import logo from 'public/images/logo-inverse-mobile.png';

// Component
import Footer from 'components/LayoutComponents/Footer';

const story = () => (
  <Footer
    logoImage={logo}
    homeUrl={text('homeUrl', 'http://www.metanet.co.kr/')}
    brandName={text('brandName', 'Metanet')}
    copyright={text(
      'copyright',
      'Copyright © 2020 Metanet. All rights reserved.',
    )}
    privacyPolicy={text('privacyPolicy', 'Privacy Policy')}
    ppUrl={text('ppUrl', 'http://www.metanet.co.kr/')}
  />
);

story.options = {
  info:
    'This component uses `<FormattedMessage>` as the default values of `brandName`, `copyright` and `privacyPolicy`. Checkout `react-intl` Docs (https://github.com/formatjs/react-intl) for more details.',
};

export default story;
