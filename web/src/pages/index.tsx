import * as React from 'react';
import Container from '../components/container';
import Page from '../components/page';
import IndexLayout from '../layouts';
import { Link, graphql } from 'gatsby';

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <p>Welcome to The Russian Bats 2019! We are a baseball league.</p>
        <p>
          <a href="https://baseball.fantasysports.yahoo.com/b1/42719">
            League @ Yahoo
          </a>
        </p>
        <p>
          2019 Changes <Link to={'/trb-2019-intro'}>here</Link>
        </p>
        <p>
          You can find the scoring rules <Link to={'/scoring'}>here</Link>.
        </p>
        <p>
          You can find the keeper rules <Link to={'/keepers'}>here</Link>.
        </p>
        <p>
          You can find the payout rules <Link to={'/payouts'}>here</Link>.
        </p>

        <h2>Previous Champions:</h2>
        <ul>
          <li>2018: MakeJoshGreatAgain</li>
          <li>2017: MakeJoshGreatAgain</li>
          <li>2016: A Team Has No Name</li>
          <li>2015: Don't Bring Me Down, Bruce</li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
