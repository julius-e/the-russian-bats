import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Page from '../components/page';
import Container from '../components/container';
import IndexLayout from '../layouts';
import css from '@emotion/css';

export default ({ data }: any) => {
  console.log(data);
  return (
    <IndexLayout>
      <Page>
        <Container>
          <div>
            <h1
              css={css`
                display: inline-block;
                border-bottom: 1px solid;
              `}
            >
              The Russian Bats
            </h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }: any) => (
              <div key={node.id}>
                <h3>
                  <Link
                    to={node.fields.slug}
                    css={css`
                      text-decoration: none;
                      color: inherit;
                    `}
                  >
                    🔗
                    {node.frontmatter.title}{' '}
                    <span
                      css={css`
                        color: #bbb;
                      `}
                    >
                      — {node.frontmatter.date}
                    </span>
                  </Link>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            ))}
          </div>
        </Container>
      </Page>
    </IndexLayout>
  );
};

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
