import React from 'react'
import { graphql } from 'gatsby'

import {  Button, Section, Container, CardImage, CardBody, CardLink, CardHeading, Card  } from '../components/common/index.js';

import Layout from '../components/layout.js'

const BlogPage = ( {data} ) => (
  <Layout>
    <Section lightBackground>
      <Container maxWidth="1400px">
        <h1>Here is a list of blogs</h1>
     
      <Container col="4" gap="20px">
        {data.allDatoCmsBlog.edges.map(({ node: blog }) => (

          <Card key={blog.id}>
            <CardLink url={ `/${blog.destination.slug}/${blog.slug}`}>
              <CardImage image={blog.featuredImage.fluid} />
              <CardBody>
                <CardHeading title={blog.title} />
                <Button primary>Read more</Button>
              </CardBody>  
            </CardLink>
          </Card>

        ))}
     </Container>
    </Container>
    </Section>
  </Layout>
)

export default BlogPage

export const query = graphql`
   { allDatoCmsBlog {
      edges {
        node {
          id
          title
          slug
          destination {
            slug
          }
          featuredImage {
            fluid (maxWidth: 300, maxHeight:200, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces"  }){
              ...GatsbyDatoCmsFluid
            }
            }
        }
      }
    }
  }
`