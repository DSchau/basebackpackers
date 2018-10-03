import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import {
  Section,
  Container,
  ScrollContainer,
  Button
} from '../components/common';
import {
  Header,
  Faq,
  Accom,
  IntroText,
  StickyNav,
  Gallery
} from '../components/layout/';
import GoogleApiWrapper from '../components/layout/GoogleMapsContainer.js';
import Cross from './cross.png';
import Giffy from './giphy.gif';

const HeadingSpan = styled.span`
  color: #a2a2a2;
  font-size: 1.4rem;
  margin-left: 0.3rem;
  font-weight: 400;
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

const Contact = styled.div`
  margin-top: 1rem;
`;
const ContactDetails = styled.div`
  margin-bottom: 0.5rem;
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
        <Header
          backgroundImage={data.datoCmsHostel.featuredImage.fluid}
          pageTitle={data.datoCmsHostel.title}
          tagline="Find the rest of the world with us."
          propertyName="Base Backpackers Sydney"
          caption="Crazy Party Tuesdays - Scary Canary Bar "
        />
        {/* Intro text here */}

        <IntroText
          text="              You’re going to love starting your Australian journey with
              backpackers from all over the world, just like you, in our iconic
              Sydney Hostel. Stay, play, work, study, party or just hang out and
              soak up the local vibe. It's completely up to you."
        />
        {/* Navigation in page here */}

        <StickyNav />

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
          <ScrollContainer
            padding="0 0 1rem"
            maxwidth="960px"
            colwidth="16rem"
            className="scroll"
          >
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

          <Container col="4" gap="1rem" mobcol="1fr 1fr">
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
            <Button primary large className="distributor">
              Check availability and book
            </Button>
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
              <Mapbox>
                <GoogleApiWrapper
                  title={data.datoCmsHostel.title}
                  street={data.datoCmsHostel.streetAddress}
                  city={data.datoCmsHostel.city}
                  lat={data.datoCmsHostel.location.latitude}
                  long={data.datoCmsHostel.location.longitude}
                />
              </Mapbox>
              <Contact>
                <ContactDetails>
                  <a
                    target="_blank"
                    rel="noopener noreferrer "
                    href="https://www.google.com/maps/dir/?api=1&destination=base+backpackers+sydney"
                  >
                    Get directions
                  </a>
                </ContactDetails>
                <ContactDetails>
                  Address: {data.datoCmsHostel.streetAddress},{' '}
                  {data.datoCmsHostel.city}
                </ContactDetails>
                <ContactDetails>
                  Phone: {data.datoCmsHostel.phone}
                </ContactDetails>
                <ContactDetails>
                  Email: {data.datoCmsHostel.emailAddress}
                </ContactDetails>
              </Contact>
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
              Yes-A-Q‘s <HeadingSpan>Everything else..</HeadingSpan>
            </h2>
          </Container>
          <Container col="2" mobcol="1fr">
            <div>
              {data.datoCmsHostel.yes.map(block => (
                <div key={block.id} className={block.model.apiKey}>
                  <Faq question={block.question} answer={block.answer} />
                </div>
              ))}
              <Button primary large className="distributor">
                Check availability and book
              </Button>
            </div>
            <div>
              <img src={Giffy} />
            </div>
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
