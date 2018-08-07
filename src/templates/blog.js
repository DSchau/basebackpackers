
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components'
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

const BlogHeading = styled.h1`
  margin-top:1rem;
  @media (max-width: 500px) {
    margin:0;
`;

const Attribution = styled.p`
  font-size: .7rem;
`;

export default ({ data }) => (

  <Layout>
  <script async defer src="https://www.instagram.com/embed.js"></script>
    <Article>
        <HelmetDatoCms seo={data.datoCmsBlog.seoMetaTags} /> 
        <BodyContainer className="article" >
          <Img fixed={data.datoCmsBlog.featuredImage.fixed} />
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
                    <figure>
                      <Img fixed={block.image.fixed} />
                      <figcaption>{block.caption}</figcaption>
                      <Attribution dangerouslySetInnerHTML={{ __html: block.attribution }} />
                    </figure>
                  }
                </div>
              ))
            }
            
        </BodyContainer>

    </Article>

      
  </Layout>  

)


export const query = graphql`
  query ($slug: String!) {
    datoCmsBlog(slug: { eq: $slug }) {
      title
      author {
        name
      }
      featuredImage {
        fixed (width: 1000, height:400, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "entropy"  }){
          ...GatsbyDatoCmsFixed
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
            fixed (width: 1000, height:400, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "entropy"  }){
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`