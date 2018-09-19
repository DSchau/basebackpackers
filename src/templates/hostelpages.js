
import React from 'react'
import {Helmet} from "react-helmet";  
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy'

import Layout from '../components/layout'
import { Section, Container, ScrollContainer } from '../components/common';
import { Navigation, Faq, Accom } from '../components/layout/index.js'
import GoogleApiWrapper from '../components/layout/GoogleMapsContainer.js'
import Cross from './cross.png';

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

const NavItem = styled.li`
    padding-left: 0;
    display: inline-block;
    margin-right: 1.3rem;
    margin-bottom:0rem;
    padding-bottom:.7rem;
    font-size:.9rem;
`;

const ActivityCard =styled.div`
  background:${props => props.theme.white};
  padding: 1.5rem;
`;

const ActivityText = styled.p`
  color:${props => props.theme.lightGreyText};
  font-size:.8rem;
  border-bottom:1px solid ${props => props.theme.lightBlueLine}; 
  padding-bottom:1rem;
`;

const ActivityHeading = styled.h3`
  color:${props => props.theme.secondaryColor};
  margin-bottom:0;
`;

const Time = styled.span`
  font-weight: normal;
`;

const ActivityLeadCard = styled(ActivityCard)`
  background:  ${props => props.theme.secondaryColor};
  color:#fff;
  position:relative;
`;

const ActivityLeadText = styled.p`
  color:${props => props.theme.lightBlueText};
  font-size:1.286rem;
  line-height:2rem;
`;

const Crossimage = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 0;
`;

const FacilityTitle = styled.p` 
  color: ${props => props.theme.secondaryColor};
  margin-top:.5rem;
  margin-bottom:0rem;
  
`;

const Mapbox = styled.div`
  position:relative;
  height:16rem;
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
      <Section id="header" padding="0rem" style={{ margin: 0, overflow:"hidden", position:"relative", zIndex:2, minHeight:"25rem" }}>
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
      <Section padding="2rem 0 1rem" style={{position:"sticky", top:0, zIndex:3,}}>
        <Container>
          
          <Scrollspy style={{ marginLeft: 0, marginBottom:0 }} items={ ['rooms','activities', 'facilities', 'location', 'faq' ] } currentClassName="is-current">
            <NavItem>Rooms</NavItem>
            <NavItem>Activities</NavItem>
            <NavItem>Facilities</NavItem>
            <NavItem>Location</NavItem>
            <NavItem>FAQ</NavItem>
            </Scrollspy>
          
        </Container>
      </Section>

      {/* Accommodation section here */}
      <Section id="rooms" padding="1rem 3rem 3rem">
       <Accom source={data.datoCmsHostel.accommodationType}/>
      </Section>

      {/* Activities section here */}
      <Section id="activities" lightBackground>
        <Container>
          <h2>Activities</h2>
        </Container>  
        <ScrollContainer padding="0" maxwidth="960px" colwidth="16rem">
            <ActivityLeadCard>
              <h3>The Spot to be social</h3>
              <ActivityLeadText>Loads of daytime activities and a pumping bar to help you make new mates.</ActivityLeadText>
              <Crossimage src={Cross} />
            </ActivityLeadCard>

        {
          data.datoCmsHostel.activities.map((block) => (
            <ActivityCard key={block.id}>  
              <ActivityHeading>{block.day} <Time>Morning</Time></ActivityHeading>
              <ActivityText>{block.amActivity}</ActivityText>
              <ActivityHeading>{block.day} <Time>Evening</Time></ActivityHeading>
              <ActivityText>{block.pmActivity}</ActivityText>
            </ActivityCard>              
            ))
          }                
        </ScrollContainer>

        <Container col="6" gap="10px">

        </Container>
      </Section>
      
      {/* Faciliteis section here */}
      <Section id="facilities">
        <Container>
          <h2>Facilities</h2>
        </Container>
        <Container col="4" gap="1rem" mobcol="1fr 1fr">
        {data.datoCmsHostel.featureGallery.map(( photo, index ) => {
                    return <div key={index}>
                      <Img fluid={photo.fluid} />
                      <FacilityTitle>{photo.title}</FacilityTitle>
                    </div>
                    }
                  )}
        </Container>
      </Section>  

      {/* Location section here */}
      <Section id="location" lightBlueBackground>
        <Container>
          <h2>Location</h2>
        </Container>
        <Container col="2" mobcol="1fr 1fr" gap="2rem">
        <div>
          <Mapbox>
            <GoogleApiWrapper 
              title={data.datoCmsHostel.title}
              street={data.datoCmsHostel.streetAddress}
              city={data.datoCmsHostel.city}
              lat={data.datoCmsHostel.location.latitude}  
              long={data.datoCmsHostel.location.longitude}  
              />
          </Mapbox> 
          <div>
            <div>Get directions</div>
            <div>Phone: {data.datoCmsHostel.phone}</div>
            <div>Email: {data.datoCmsHostel.emailAddress}</div>
          </div>  
          </div>

        
        <div>
          <h3>Things near by</h3>
          {
          data.datoCmsHostel.thingsNearBy.map((near) => (
            <div key={near.id}>
              <h4>{near.time} {near.tripType}</h4>
              <p>{near.name}</p>
            </div>   
           
            ))
          } 

        </div>

        </Container>
      </Section>  

      {/* FAQ */}
      <Section id="faq">
        <Container>
          <h2>Yes-A-Q‘s</h2>
        </Container>
        <Container>
        {
          data.datoCmsHostel.yes.map((block) => (
            <div key={block.id} className={block.model.apiKey}>
              <Faq question={block.question} answer={block.answer}/>
            </div>                
            ))
          } 
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
      
      featureGallery {
        id
        title
        fluid (maxWidth: 500, maxHeight: 300, imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces"  }){
          ...GatsbyDatoCmsFluid 
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
      location {
        latitude
        longitude
      }
      streetAddress
      suburb
      city
      phone
      emailAddress
      thingsNearBy {
        id
        name
        time
        tripType
      }

      yes {
        ... on DatoCmsQA {
          model { apiKey }
          id
          question
          answer
        }
      }  
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
