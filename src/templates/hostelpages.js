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
  Gallery,
  Location
} from '../components/layout/index.js';

import Cross from './cross.png';
import yes from '../components/images/yes.mp4';

const ActivityCard = styled.div`
  background: ${props => props.theme.white};
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
`;

const ActivityHeading = styled.h3`
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;
`;

const ActivityText = styled.p`
  color: ${props => props.theme.lightGreyText};
  font-size: 1rem;
  margin-bottom: 0rem;
`;

const Time = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.lightBlueLine};
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

export default class HostelPage extends React.Component {
  render() {
    const { data } = this.props;

    const featureImages = data.datoCmsHostel.featureGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid,
        alt: photo.alt
      })
    );

    const activitiesImages = data.datoCmsHostel.activitiesGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid,
        alt: photo.alt
      })
    );

    const accomGal = data.datoCmsHostel.accommodationType.map(
      (block, index) => {
        const roomGals = block.roomGallery.map(photo =>
          Object.assign({
            srcSet: photo.fluid.srcSet,
            src: photo.fluid.src,
            caption: photo.caption,
            fluid: photo.fluid,
            alt: photo.alt
          })
        );
        return roomGals;
      }
    );

    const combineAccom = [].concat.apply([], accomGal);
    const cominedGallery = featureImages.concat(activitiesImages, combineAccom);

    return (
      <Layout>
        {/* <Gal test={im2}/> */}
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
          poster={data.datoCmsHostel.featuredImage.url}
          pageTitle={data.datoCmsHostel.title}
          tagline="Find the rest of the world with us."
          propertyName="Base Backpackers Sydney"
          caption="Crazy Party Tuesdays - Scary Canary Bar "
          alt={data.datoCmsHostel.featuredImage.alt}
          gal={cominedGallery}
          button="hostel"
        />
        {/* Intro text here */}

        {/* <IntroText
          text="              You’re going to love starting your Australian journey with
              backpackers from all over the world, just like you, in our iconic
              Sydney Hostel. Stay, play, work, study, party or just hang out and
              soak up the local vibe. It's completely up to you."
        /> */}
        {/* Navigation in page here */}

        <StickyNav />

        {/* Accommodation section here */}
        <Section id="rooms" padding="0rem 3rem 3rem">
          <Accom
            source={data.datoCmsHostel.accommodationType}
            hostelName={data.datoCmsHostel.title}
          />
        </Section>

        {/* Activities section here */}
        <Section id="activities" lightBackground>
          <Container>
            <h2>Activities</h2>
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
                <ActivityHeading>{block.day}</ActivityHeading>
                <ActivityText>{block.amActivity}</ActivityText>
                <Time>Mornings</Time>
                <ActivityText>{block.pmActivity}</ActivityText>
                <Time>Evenings</Time>
              </ActivityCard>
            ))}
          </ScrollContainer>

          <Container col="4" gap="1rem" mobcol="1fr 1fr" margin="1rem auto">
            <Gallery images={activitiesImages} />
          </Container>
        </Section>

        {/* Faciliteis section here */}
        <Section id="facilities">
          <Container>
            <h2>Facilities</h2>
          </Container>
          <Container col="4" gap="1rem" mobcol="1fr 1fr">
            <Gallery images={featureImages} />
            <Button primary large className="distributor">
              Check availability and book
            </Button>
          </Container>
        </Section>

        {/* Location section here */}
        <Location
          title={data.datoCmsHostel.title}
          streetAddress={data.datoCmsHostel.streetAddress}
          city={data.datoCmsHostel.city}
          latitude={data.datoCmsHostel.location.latitude}
          longitude={data.datoCmsHostel.location.longitude}
          mapScreenShot={data.datoCmsHostel.mapScreenShot.fluid}
          streetAddress={data.datoCmsHostel.streetAddress}
          phone={data.datoCmsHostel.phone}
          emailAddress={data.datoCmsHostel.emailAddress}
          thingsNearBy={data.datoCmsHostel.thingsNearBy}
        />

        {/* FAQ */}
        <Section id="faq">
          <Container>
            <h2>Yes-A-Q‘s</h2>
          </Container>
          <Container col="2" mobcol="1fr" gap="1rem">
            <div>
              {data.datoCmsHostel.yes.map(block => (
                <div key={block.id} className={block.model.apiKey}>
                  <Faq question={block.question} answer={block.answer} />
                </div>
              ))}
              <p>
                <Button primary large className="distributor">
                  Check availability and book
                </Button>
              </p>
            </div>
            <div>
              <video width="100%" height="auto" autoPlay muted loop>
                <source src={yes} />
              </video>
            </div>
          </Container>
        </Section>
      </Layout>
    );
  }
}
//  code change to push update

export const query = graphql`
  query HostelPageQuery($slug: String!) {
    datoCmsHostel(slug: { eq: $slug }) {
      title
      intro
      mewsId
      featuredImage {
        url
        alt
        fluid(
          maxWidth: 2000
          imgixParams: {
            fm: "jpg"
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
          currency
          features
          roomGallery {
            alt
            caption: title
            src: url
            fluid(
              maxWidth: 500
              imgixParams: {
                fm: "jpg"
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
        alt
        fluid(
          maxWidth: 1000
          maxHeight: 600
          imgixParams: {
            fm: "jpg"
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
        alt
        title
        fluid(
          maxWidth: 600
          maxHeight: 400
          imgixParams: {
            fm: "jpg"
            auto: "format"
            fit: "crop"
            crop: "faces"
            auto: "format"
            q: 40
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

      mapScreenShot {
        fluid(
          maxWidth: 600
          imgixParams: { fm: "jpg", auto: "format", q: 50 }
        ) {
          ...GatsbyDatoCmsFluid
        }
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
