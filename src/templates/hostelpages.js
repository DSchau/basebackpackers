
import React from 'react'
import {Helmet} from "react-helmet";  
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components';

import Layout from '../components/layout'
import { Section, Container } from '../components/common';
import { Navigation } from '../components/layout/index.js'

const HeaderContainer = styled(Container)`
  z-index:1;
  position:relative;
  color:${props => props.theme.white};
  margin-top: 5rem;
`;

const PageTitle = styled.h1`
  width:20rem;
  
`;

const TagNavItemne = styled.p`
  font-size:1.286rem;
  font-weight:bold;
`;

const Intro = styled.div`
  font-size:1.143rem;
  
`;

const StickyNav = styled.ul`
    margin:0;
    
  
`;

const NavItem = styled.li`
    padding-left: 0;
    display: inline-block;
    padding-right: 15px;
  
`;

export default class HostelPage extends React.Component {
  render () {
    const { data } = this.props;
    
    return (
    
    <Layout>
      <HelmetDatoCms seo={data.datoCmsHostel.seoMetaTags} /> 
      <Helmet>
        <script>{`(function(m,e,w,s){c=m.createElement(e);c.onload=function(){
        Mews.D.apply(null,s)};c.async=1;c.src=w;t=m.getElementsByTagName(e)[0];t.parentNode.insertBefore(c,t);})
        (document,'script','https://www.mews.NavItem/distributor/distributor.min.js',[['${data.datoCmsHostel.mewsId}']]);`}</script>
      </Helmet>

      {/* Header section here */}
      <Section paddningNone style={{ margin: 0, overflow:"hidden", position:"relative", zIndex:2, minHeight:"25rem" }}>
        <Img fluid={data.datoCmsHostel.featuredImage.fluid} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", zIndex:1,}}/>
        <Navigation />
        <HeaderContainer padding="1.5rem">
          <PageTitle>{data.datoCmsHostel.title}</PageTitle>
          <TagNavItemne>Find the rest of the world here</TagNavItemne>
        </HeaderContainer>
      </Section> 
      
      {/* Intro text here */}
      <Section lightBlueBackground>
        <Container>
          <Intro dangerouslySetInnerHTML={{ __html: data.datoCmsHostel.intro }} />
        </Container>
      </Section>

      {/* Navigation in page here */}
      <Section>
        <Container>
          <StickyNav>
            <NavItem>Rooms</NavItem>
            <NavItem>Activities</NavItem>
            <NavItem>Facilities</NavItem>
            <NavItem>Location</NavItem>
          </StickyNav>
        </Container>
      </Section>

      {/* Accommodation section here */}
      <Section>
        <Container>
          <h2>Where you're staying</h2>
          <p>Get ready to make new friends in our spacious dorm rooms.</p>
        </Container>
      </Section>

      {/* Activities section here */}
      <Section lightgreybackground>
        <h2>Activities</h2>
      </Section>
      
      {/* Location section here */}
      <Section>
        <div>Location</div>
      </Section>
      



          <Container maxWidth="900px" col="4" gap="10px">
              {data.datoCmsHostel.activitiesGallery.map(( photo, index) => {
                return <div key={index}>
                  <Img sizes={photo.fluid} />
                </div>
                }
              )}
          </Container>
      
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
