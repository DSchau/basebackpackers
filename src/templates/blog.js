
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {  Article  } from '../components/layout/index.js';

import Layout from '../components/layout'



const BodyContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: 2rem auto;
  grid-gap: 10px 50px;
  grid-template-columns: 3fr 12fr 5fr;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding:1rem;
    margin: 0;
  }
`;

const Author = styled.div`
  grid-column: span 1 / -1 !important;
  border-left: 2px solid yellow;
  font-size: 0.85rem;
  padding: 10px;
  margin-top:1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin:0;

  }
`;

const Figure= styled.figure`
  max-width:900px;
  margin: 0 auto;
`;


const BlogHeading = styled.h1`
  margin-top:1rem;
  @media (max-width: 500px) {
    margin:0;
`;

const Attribution = styled.p`
  font-size: .7rem;
`;


export default class BlogPost extends React.Component {
  
  render () {
    const { data } = this.props;
    const rootUrl = `${data.site.siteMetadata.siteUrl}`;
    const pagePath = `/${data.datoCmsBlog.destination.slug}/${data.datoCmsBlog.slug}`;
    const postURL = rootUrl+pagePath;
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "Blog",
        "url": postURL,
        "image":`${data.datoCmsBlog.featuredImage.url}`,
        "name":`${data.datoCmsBlog.title}`,
        
      }
    ]; 

    return (

  <Layout>
  <script async defer src="https://www.instagram.com/embed.js"></script>
    <Article>
        <HelmetDatoCms seo={data.datoCmsBlog.seoMetaTags} /> 
        <Helmet>       
       {/* Schema.org tags */}
       <script type="application/ld+json">
       {JSON.stringify(schemaOrgJSONLD)}    
       </script>
       </Helmet>
        
        
        <BodyContainer className="article" >
          <Img fluid={data.datoCmsBlog.featuredImage.fluid} />
          <BlogHeading>{data.datoCmsBlog.title}</BlogHeading>
           <Author>Written by: {data.datoCmsBlog.author.name} </Author>      
            {
              data.datoCmsBlog.body.map((block) => (
                <div key={block.id} className={block.model.apiKey}>
                  {
                    block.model.apiKey === 'text' &&
                      <div dangerouslySetInnerHTML={{ __html: block.text }} />
                  }
                  {
                    block.model.apiKey === 'image_block' &&
                    <Figure>
                      <Img fluid={block.image.fluid} />
                      <figcaption>{block.caption}</figcaption>
                      <Attribution dangerouslySetInnerHTML={{ __html: block.attribution }} />
                    </Figure>
                  }
                </div>
              ))
            }
            
        </BodyContainer>

    </Article>
  </Layout>  

)}
}


export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    datoCmsBlog(slug: { eq: $slug }) {
      title
      slug
      destination {
        slug
      }
      author {
        name
      }
      featuredImage {
        url
        fluid (maxWidth: 1000, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces"  }){
          ...GatsbyDatoCmsFluid
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      body {
        ... on DatoCmsText {
          model { apiKey }
          text
        }
        ... on DatoCmsImageBlock {
          model { apiKey }
          caption
          attribution
          image {
            fluid (maxWidth: 900, maxHeight: 450, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces"  }){
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`