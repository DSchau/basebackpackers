import React from 'react'
import { Link, graphql } from 'gatsby'
import {  Article  } from '../components/layout/index.js';
import {  Card  } from '../components/common/index.js';

import Layout from '../components/layout'

const IndexPage = ( {data} ) => (
  <Layout>
    <Article>
      <h1>Here is a list of blogs</h1>
      <Card>Test</Card>
      {data.allDatoCmsBlog.edges.map(({ node: blog }) => (
      
      <div key={blog.id}>
      
     
     <h3><Link to={`/${blog.destination.slug}/${blog.slug}`}>{blog.title}</Link></h3>   

      </div>
    ))}
    </Article>
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