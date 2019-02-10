import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/page';
import Container from '../components/container';
import IndexLayout from '../layouts';

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Stats</h1>
        <Link to="/about">About</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
