
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Layout from '../components/layout'
import { Section, Container } from '../components/common/index.js';

export default ({ data }) => (

  <Layout>
    <Section lightBackground>
        <HelmetDatoCms seo={data.datoCmsAbout.seoMetaTags} /> 
        <Container maxWidth="900px">
          <h1>{data.datoCmsAbout.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.body }} />
        </Container>
    </Section>
      
      
  </Layout>  

)

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    datoCmsAbout(slug: { eq: $slug }) {
      title
      body
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
