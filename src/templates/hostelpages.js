
import React from 'react'
import {Helmet} from "react-helmet";  
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Section, Container } from '../components/common';
import { Navigation } from '../components/layout/index.js'



export default class HostelPage extends React.Component {
  render () {
    const { data } = this.props;
    
    return (
    
    <Layout>
      <Section paddningNone>
      <div style={{ margin: 0, overflow:"hidden", position:"relative", zIndex:2, minHeight:"25rem" }} >
        <Img fluid={data.datoCmsHostel.featuredImage.fluid} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", zIndex:1,}}/>
        <Navigation />
        <h1>{data.datoCmsHostel.title}</h1>
      </div>      
      

          <HelmetDatoCms seo={data.datoCmsHostel.seoMetaTags} /> 
          <Helmet>

            <script>{`(function(m,e,w,s){c=m.createElement(e);c.onload=function(){
Mews.D.apply(null,s)};c.async=1;c.src=w;t=m.getElementsByTagName(e)[0];t.parentNode.insertBefore(c,t);})
(document,'script','https://www.mews.li/distributor/distributor.min.js',[['${data.datoCmsHostel.mewsId}']]);`}</script>

          </Helmet>
          <Container maxWidth="900px">
            
            
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsHostel.intro }} />
            <button className="distributor">Book now</button>
          </Container>
          <Container maxWidth="900px" col="4" gap="10px">
              {data.datoCmsHostel.activitiesGallery.map(( photo, index) => {
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
      activitiesGallery {
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
