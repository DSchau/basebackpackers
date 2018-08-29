
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Layout from '../components/layout'
import { Section, Container } from '../components/common';

export default class productPage extends React.Component {
  render () {
    const { data } = this.props;
    
    return (

  <Layout>
    <Section lightBackground>
        <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} /> 
        <Container maxWidth="900px">
          <h1>{data.datoCmsProduct.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsProduct.body }} />
        </Container>
    </Section>
  </Layout>  

)}}
/*
 export const query = graphql`
  query ProductPageQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      title
      body
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
*/