
import React from 'react'
import {Helmet} from "react-helmet";  
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components';

import Layout from '../components/layout'
import { Section, Container, ScrollContainer, Card, CardHeading, CardText } from '../components/common';
import { Navigation } from '../components/layout/index.js'

const HeaderContainer = styled(Container)`
  z-index:1;
  position:relative;
  color:${props => props.theme.white};
  margin-top: 5rem;
`;

const PageTitle = styled.h1`
  width:20rem;
  font-size:2.63rem;
  
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

const RoomTitle = styled.div`
    margin: 0px; 
    overflow: hidden; 
    position: absolute; 
    z-index: 2;
    padding:10px;
    bottom:0;
    right:0;
    font-size:.8rem;
    background:${props => props.theme.secondaryColor};
    color:${props => props.theme.white};
    
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
        (document,'script','https://www.mews.com/distributor/distributor.min.js',[['${data.datoCmsHostel.mewsId}']]);`}
        </script>
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
      <Section padding="2rem 0 1rem">
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
      <Section padding="0">
        <Container>
          <h2>Where you're staying</h2>
          <p>Get ready to make new friends in our spacious dorm rooms.</p>
        </Container>
          {
          data.datoCmsHostel.accommodationType.map((block) => (
            <div key={block.id} className={block.model.apiKey}>
              {
                block.model.apiKey === 'accom' &&
                  <>
                  <ScrollContainer padding="0" maxwidth="960px">
                  
                  {/* Hostel image Gallery here */}
                  {block.roomGallery.map(( photo, index) => {
                    return <div key={index} style={{ margin: 0, overflow:"hidden", position:"relative", zIndex:2, minHeight:"140px" }}>
                      <Img fluid={photo.fluid} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden", zIndex:1,}}/>
                      <RoomTitle>{photo.title}</RoomTitle>
                    </div>
                    }
                  )}
                  </ScrollContainer>
                          <Container col="2">
                          <h2>Where you're staying</h2>
                          <p>Get ready to make new friends in our spacious dorm rooms.</p>
                        </Container>
                        </>
              }
            </div>                
            ))
          }

      </Section>

      {/* Activities section here */}
      <Section lightBackground>
        <Container>
          <h2>Activities</h2>
        </Container>  
        <ScrollContainer padding="0" maxwidth="960px">
        {
          data.datoCmsHostel.activities.map((block) => (
            <div key={block.id} className={block.model.apiKey}>
                <Card>
                  <CardHeading title={block.day}/>
                    <CardText>
                      <h5>AM</h5>
                      <div>{block.amActivity}</div>
                      <h5>PM</h5>
                      <div>{block.pmActivity}</div>
                    </CardText>
                </Card>
            </div>                
            ))
          }                
        </ScrollContainer>



        <Container col="6" gap="10px">

      </Container>
      </Section>
      
      {/* Faciliteis section here */}
      <Section>
        <Container>
          <h2>Facilities</h2>
        </Container>
      </Section>  

      {/* Location section here */}
      <Section lightBlueBackground>
        <Container>
          <h2>Location</h2>
        </Container>
      </Section>  

      {/* FAQ */}
      <Section>
      <Container>
        <h2>Yes-A-Q's</h2>
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
      accommodationType {
        ... on DatoCmsAccom {
          model { apiKey }
          name
          id
          roomGallery {
            title
            fluid (maxWidth: 500){
              ...GatsbyDatoCmsFluid 
            }
          }
        }
      }
      
      activities {
        ... on DatoCmsActivitiesByDay {
          model { apiKey }
          id
          day
          amActivity
          pmActivity
        }
      }  
      
      activitiesGallery {
        id
        fluid (maxWidth: 500){
          ...GatsbyDatoCmsFluid 
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
