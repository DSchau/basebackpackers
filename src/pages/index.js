import React from 'react'
import { Link, graphql } from 'gatsby'

import { Section, Container } from '../components/common/index.js';

import Layout from '../components/layout'

const IndexPage = ( {data} ) => (
  <Layout>
    <Section lightBackground>
      <Container col="4">
        <div>
          <h2>Blog pages</h2>
          <Link to="blog"> Blogs have moved here</Link></div>
        <div>
          <h2>Hostel Pages</h2>
          <div>
            
          {data.allDatoCmsHostel.edges.map(({ node: hostel, index}) => (
            <div key={index}>
                  <Link to={`hostels/${hostel.slug}`} >{hostel.title}</Link>
            </div>
                )
              )}
          </div>
        </div>
        <div>
          <h2>Groups Pages</h2>
          {data.allDatoCmsGroup.edges.map(({ node: group, index}) => (
            <div key={index}>
                  <Link to={`groups/${group.slug}`} >{group.title}</Link>
            </div>
                )
              )}
        </div>
        <div>
          <h2>Product pages</h2>
        </div>
      </Container>

      
    </Section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsHostel {
      edges {
        node {
          slug
          title
        }
      }
    }
    allDatoCmsGroup {
        edges {
          node {
            slug
            title
          }
        }
      }
    


  }
`
