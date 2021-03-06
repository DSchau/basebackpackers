import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import { Footer, GlobalStyle } from '../components/layout/index.js';
import DataLayer from './layout/DataLayer';

import baseTheme from './theme/base';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(10, auto);
  grid-template-areas:
    'body body body body'
    'foot foot foot foot';

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-areas:
      'body body'
      'foot foot'
      'foot foot';
  }
`;

const Body = styled.main`
  grid-area: body;
  background: #fcfcfc;
  position: relative;
  width: 100%;
  border-top: 3px solid ${props => props.theme.primaryColor};
`;

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />

          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//connect.facebook.net" />
          <link rel="dns-prefetch" href="//script.tapfiliate.com" />
        </Helmet>

        <ThemeProvider theme={baseTheme}>
          <>
            <GlobalStyle />
            <Body>{children}</Body>
            <Footer />
            {/* <DataLayer /> */}
          </>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
