
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Section, Container } from '../components/common';


export default class HostelPage extends React.Component {
  render () {
    const { data } = this.props;
    
    return (
    
    <Layout>
      <Section lightBackground>
          <HelmetDatoCms seo={data.datoCmsHostel.seoMetaTags} /> 
          <Container maxWidth="900px">
            <Img fluid={data.datoCmsHostel.featuredImage.fluid} />
            <h1>{data.datoCmsHostel.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsHostel.intro }} />
          </Container>
          <Container maxWidth="900px" col="4" gap="10px">
              {data.datoCmsHostel.hostelGallery.map(( photo, index) => {
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
  query HostelPageQuery($slug: String!) {
    datoCmsHostel(slug: { eq: $slug }) {
      title
      intro
      mewsId
      featuredImage {
        url
        fluid (maxWidth: 1000){
          ...GatsbyDatoCmsFluid 
        }
      }
      hostelGallery {
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
