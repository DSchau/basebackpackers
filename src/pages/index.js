import React from 'react'
import { Link, graphql } from 'gatsby'
import {  Article  } from '../components/layout/index.js';
import { Section } from '../components/common/index.js';

import Layout from '../components/layout'

const IndexPage = ( {data} ) => (
  <Layout>
    <Section lightbackround>
      <Link to="blog"> Blogs have moved here</Link>
    </Section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsBlog {
      edges {
        node {
          id
          title
          slug
          destination {
            slug
          }
        }
      }
    }
  }
`