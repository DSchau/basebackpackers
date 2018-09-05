
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Section, Container } from '../components/common'



export default class groupPage extends React.Component {
  render () {
    const { data } = this.props;
    
    return (
    
    <Layout>
      <Section lightBackground>
          <HelmetDatoCms seo={data.datoCmsGroup.seoMetaTags} /> 
          <Container maxWidth="900px">
            <Img fluid={data.datoCmsGroup.featuredImage.fluid} />
            <h1>{data.datoCmsGroup.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsGroup.intro }} />
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsGroup.sellingPoints }} />
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsGroup.body }} />
            
            
            
            

          </Container>

          <Container maxWidth="900px" col="4" gap="10px">
              {data.datoCmsGroup.imageGallery.map(( photo, index) => {
                return <div key={index}>
                  <Img sizes={photo.fluid} />
                </div>
                }
              )}
          </Container>
      </Section>
    </Layout>  
    )
  }
}



export const query = graphql`
  query GroupPageQuery($slug: String!) {
    datoCmsGroup(slug: { eq: $slug }) {
      title
      body
      intro
      sellingPoints
      featuredImage {
        url
        fluid (maxWidth: 1000){
          ...GatsbyDatoCmsFluid 
        }
      }
      imageGallery {
        id
        fluid (maxWidth: 1000){
          ...GatsbyDatoCmsFluid 
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`