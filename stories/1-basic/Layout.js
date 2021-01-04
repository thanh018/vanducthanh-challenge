import React from 'react';

import logo from 'public/images/logo-inverse-mobile.png';
import Layout from 'components/BasicComponents/Layout';
import Footer from 'components/LayoutComponents/Footer';
const story = () => (
  <>
    <Layout>
      <Footer
        logoImage={logo}
        homeUrl="http://www.metanet.co.kr/"
        brandName="Metanet"
        copyright="Copyright © 2020 Metanet. All rights reserved."
        privacyPolicy="Privacy Policy"
        ppUrl="http://www.metanet.co.kr/"
      />
    </Layout>
  </>
);

story.options = {
  info: {
    text: `
    View [Antd Layout](https://ant.design/components/layout/) for detailed description and documentation about <Layout> component.
  `,
  },
};

export default story;
