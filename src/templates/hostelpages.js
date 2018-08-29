
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Layout from '../components/layout'
import { Section, Container } from '../components/common';

export default ({ data }) => (

  <Layout>
    <Section lightBackground>
        <HelmetDatoCms seo={data.datoCmsHostel.seoMetaTags} /> 
        <Container maxWidth="900px">
          <h1>{data.datoCmsHostel.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsHostel.body }} />
        </Container>
    </Section>
  </Layout>  

)
/*
export const query = graphql`
  query HostelPageQuery($slug: String!) {
    datoCmsHostel(slug: { eq: $slug }) {
      title
      body
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
*/