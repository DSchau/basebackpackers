import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/layout';
import { Section, Container, ScrollContainer } from '../components/common';
import { Navigation, Faq, Accom } from '../components/layout/index.js';
import Gallery from '../components/layout/Gallery';
// import GoogleApiWrapper from '../components/layout/GoogleMapsContainer.js';
import Cross from './cross.png';
import Xo from './xo.png';
// import Giffy from './giphy.gif';

const HeaderContainer = styled(Container)`
  z-index: 1;
  position: relative;
  color: ${props => props.theme.white};
  margin-top: 5rem;
`;

const PageTitle = styled.h1`
  width: 50%;
  font-size: 3.63rem;
  line-height: 4rem;

  @media (max-width: 500px) {
    width: 20rem;
    font-size: 2.63rem;
  }
`;

const TagNavItemne = styled.p`
  font-size: 1.286rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
`;

const HeaderImageName = styled.div`
  z-index: 1;
  position: relative;
  color: ${props => props.theme.white};
  text-align: right;
  padding-right: 3rem;
  padding-bottom: 2rem;
  font-size: 0.75rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Intro = styled.div`
  font-size: 1.343rem;
  line-height: 2rem;
`;

const Heart = styled.img`
  position: absolute;
  bottom: -20px;
  right: 35px;
  float: right;
  text-align: right;
`;

const HeadingSpan = styled.span`
  color: #a2a2a2;
  font-size: 1.4rem;
  margin-left: 0.3rem;
  font-weight: 400;
`;

const NavItem = styled.li`
  padding-left: 0;
  display: inline-block;
  margin-right: 1.3rem;
  margin-bottom: 0rem;
  padding-bottom: 0.7rem;
  font-size: 0.9rem;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.secondaryColor};
  }
`;

const NavItemLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

const ActivityCard = styled.div`
  background: ${props => props.theme.white};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
`;

const ActivityText = styled.p`
  color: ${props => props.theme.lightGreyText};
  font-size: 0.8rem;
  border-bottom: 1px solid ${props => props.theme.lightBlueLine};
  padding-bottom: 1rem;
`;

const ActivityHeading = styled.h3`
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 0;
`;

const Time = styled.span`
  font-weight: normal;
`;

const ActivityLeadCard = styled(ActivityCard)`
  background: ${props => props.theme.secondaryColor};
  color: #fff;
  position: relative;
  box-shadow: ${props => props.theme.shadow};
`;

const ActivityLeadText = styled.p`
  color: ${props => props.theme.lightBlueText};
  font-size: 1.286rem;
  line-height: 2rem;
`;

const Crossimage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0;
`;

const Mapbox = styled.div`
  position: relative;
  height: 16rem;
`;

export default class HostelPage extends React.Component {
  render() {
    const { data } = this.props;

    const featureImages = data.datoCmsHostel.featureGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid
      })
    );

    const activitiesImages = data.datoCmsHostel.activitiesGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid
      })
    );

    return (
      <Layout>
        <HelmetDatoCms seo={data.datoCmsHostel.seoMetaTags} />
        <Helmet>
          <script>
            {`(function(m,e,w,s){c=m.createElement(e);c.onload=function(){
        Mews.D.apply(null,s)};c.async=1;c.src=w;t=m.getElementsByTagName(e)[0];t.parentNode.insertBefore(c,t);})
        (document,'script','https://www.mews.li/distributor/distributor.min.js',[['${
          data.datoCmsHostel.mewsId
        }']]);`}
          </script>
        </Helmet>

        {/* Header section here */}
        <Section
          id="header"
          padding="0rem"
          style={{
            margin: 0,
            overflow: 'hidden',
            position: 'relative',
            zIndex: 2,
            minHeight: '25rem'
          }}
        >
          <Img
            fluid={data.datoCmsHostel.featuredImage.fluid}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              zIndex: 1
            }}
          />
          <Navigation />

          <HeaderContainer padding="0rem">
            <PageTitle>{data.datoCmsHostel.title}</PageTitle>
            <TagNavItemne>Find the rest of the world here</TagNavItemne>
          </HeaderContainer>

          <HeaderImageName>
            <div>Crazy Party Tuesdays - Scary Canary Bar </div>
            <div>@ Base Backpackers Sydeny</div>
          </HeaderImageName>
        </Section>

        {/* Intro text here */}
        <Section lightBlueBackground>
          <Container style={{ position: 'relative' }}>
            <Intro>
              You’re going to love starting your Australian journey with
              backpackers from all over the world, just like you, in our iconic
              Sydney Hostel. Stay, play, work, study, party or just hang out and
              soak up the local vibe. It's completely up to you.
            </Intro>
            <Heart src={Xo} alt="base hearts and cross" />
          </Container>
        </Section>

        {/* Navigation in page here */}
        <Section
          padding="2rem 0 0rem"
          style={{ position: 'sticky', top: 0, zIndex: 3 }}
        >
          <Container>
            <Scrollspy
              style={{ marginLeft: 0, marginBottom: 0 }}
              items={['rooms', 'activities', 'facilities', 'location', 'faq']}
              currentClassName="is-current"
            >
              <NavItem>
                <NavItemLink href="#rooms">Rooms</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#activities">Activities</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#facilities">Facilities</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#location">Location</NavItemLink>
              </NavItem>
              <NavItem>
                <NavItemLink href="#faq">FAQ</NavItemLink>
              </NavItem>
            </Scrollspy>
          </Container>
        </Section>

        {/* Accommodation section here */}
        <Section id="rooms" padding="1rem 3rem 3rem">
          <Accom
            source={data.datoCmsHostel.accommodationType}
            hostelName={data.datoCmsHostel.title}
          />
        </Section>

        {/* Activities section here */}
        <Section id="activities" lightBackground>
          <Container>
            <h2>
              Activities <HeadingSpan>Never be lonely</HeadingSpan>{' '}
            </h2>
          </Container>
          <ScrollContainer padding="0 0 1rem" maxwidth="960px" colwidth="16rem">
            <ActivityLeadCard>
              <h3>The Spot to be social</h3>
              <ActivityLeadText>
                Loads of daytime activities and a pumping bar to help you make
                new mates.
              </ActivityLeadText>
              <Crossimage src={Cross} alt="base cross" />
            </ActivityLeadCard>

            {data.datoCmsHostel.activities.map(block => (
              <ActivityCard key={block.id}>
                <ActivityHeading>
                  {block.day} <Time>Morning</Time>
                </ActivityHeading>
                <ActivityText>{block.amActivity}</ActivityText>
                <ActivityHeading>
                  {block.day} <Time>Evening</Time>
                </ActivityHeading>
                <ActivityText>{block.pmActivity}</ActivityText>
              </ActivityCard>
            ))}
          </ScrollContainer>

          <Container col="4" gap="1rem" mobcol="1fr 1fr 1fr 1fr">
            <Gallery images={activitiesImages} />
          </Container>
        </Section>

        {/* Faciliteis section here */}
        <Section id="facilities">
          <Container>
            <h2>
              Facilities <HeadingSpan>Everything you need</HeadingSpan>
            </h2>
          </Container>
          <Container col="4" gap="1rem" mobcol="1fr 1fr">
            <Gallery images={featureImages} />
          </Container>
        </Section>

        {/* Location section here */}
        <Section id="location" lightBlueBackground>
          <Container>
            <h2>
              Location <HeadingSpan>The perfect spot in town</HeadingSpan>
            </h2>
          </Container>
          <Container col="2" mobcol="1fr 1fr" gap="2rem">
            <div>
              {/* <Mapbox>
                <GoogleApiWrapper
                  title={data.datoCmsHostel.title}
                  street={data.datoCmsHostel.streetAddress}
                  city={data.datoCmsHostel.city}
                  lat={data.datoCmsHostel.location.latitude}
                  long={data.datoCmsHostel.location.longitude}
                />
              </Mapbox> */}
              <div>
                <div>Get directions</div>
                <div>Phone: {data.datoCmsHostel.phone}</div>
                <div>Email: {data.datoCmsHostel.emailAddress}</div>
              </div>
            </div>

            <div>
              <h3>Things near by</h3>
              {data.datoCmsHostel.thingsNearBy.map(near => (
                <div key={near.id}>
                  <h4>
                    {near.time} {near.tripType}
                  </h4>
                  <p>{near.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <Container>
            <h2>
              Yes-A-Q‘s{' '}
              <HeadingSpan>Everything else you should know</HeadingSpan>
            </h2>
          </Container>
          <Container col="2" mobcol="1fr">
            <div>
              {data.datoCmsHostel.yes.map(block => (
                <div key={block.id} className={block.model.apiKey}>
                  <Faq question={block.question} answer={block.answer} />
                </div>
              ))}
            </div>
            <div>{/* <Img src={Giffy} /> */}</div>
          </Container>
        </Section>
      </Layout>
    );
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
        fluid(
          maxWidth: 1000
          imgixParams: {
            fm: "jpg"
            auto: "compress"
            fit: "crop"
            crop: "faces"
            auto: "format"
            q: 40
          }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      accommodationType {
        ... on DatoCmsAccom {
          model {
            apiKey
          }
          name
          intro
          id
          priceFrom
          features
          roomGallery {
            caption: title
            src: url
            fluid(
              maxWidth: 500
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                fit: "crop"
                crop: "faces"
                auto: "format"
                q: 50
              }
            ) {
              srcSet
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }

      featureGallery {
        id
        title
        fluid(
          maxWidth: 1000
          maxHeight: 600
          imgixParams: {
            fm: "jpg"
            auto: "compress"
            fit: "crop"
            crop: "faces"
            auto: "format"
            q: 50
          }
        ) {
          srcSet
          ...GatsbyDatoCmsFluid
        }
      }

      activities {
        ... on DatoCmsActivitiesByDay {
          model {
            apiKey
          }
          id
          day
          amActivity
          pmActivity
        }
      }

      activitiesGallery {
        id
        title
        fluid(
          maxWidth: 300
          maxHeight: 200
          imgixParams: {
            fm: "jpg"
            auto: "compress"
            fit: "crop"
            crop: "faces"
            auto: "format"
          }
        ) {
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
          model {
            apiKey
          }
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
`;
