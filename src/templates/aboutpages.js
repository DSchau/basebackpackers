
import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 

import {  Article  } from '../components/layout/index.js';

import Layout from '../components/layout'

export default ({ data }) => (

  <Layout>
    <Article>
        <HelmetDatoCms seo={data.datoCmsAboutPage.seoMetaTags} /> 
        <h1>{data.datoCmsAboutPage.heading}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsAboutPage.childDatoCmsAboutPageBodyTextNode.childMarkdownRemark.html }} />
        
    </Article>
      
      
  </Layout>  

)

