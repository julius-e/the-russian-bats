import * as React from 'react';
import IndexLayout from '../layouts';
import Page from '../components/page';
import Container from '../components/container';

export default () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>
          <h1>About The Russian Bats</h1>
          <p>Founded in 2016, just in time for armageddon.</p>
        </div>
      </Container>
    </Page>
  </IndexLayout>
);
