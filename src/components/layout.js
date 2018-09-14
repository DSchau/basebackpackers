import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, {ThemeProvider} from 'styled-components'

import { Footer } from '../components/layout/index.js'

import baseTheme from './theme/base'

import './layout.css'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(10, auto);
  grid-template-areas:
    
    "body body body body"
    "foot foot foot foot" ;

    @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-areas:
    
    "body body"
    "foot foot"
    "foot foot" ;

  }
    
`;

const Body = styled.main`
 grid-area: body;
 background:#FCFCFC;
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
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={baseTheme}>
        <Container>
            <Body>
              {children}
            </Body>
          <Footer />
        </Container>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
