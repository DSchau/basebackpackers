import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Section, Container, Button } from '../components/common';
import {
  Header,
  Faq,
  IntroText,
  Gallery,
  GroupsForm,
  Location
} from '../components/layout/index.js';

export default class groupPage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      featuredImage,
      title,
      intro,
      imageGallery,
      sellingPoints,
      seoMetaTags,
      body,
      featureList,
      hostel
    } = data.datoCmsGroup;

    const groupImages = imageGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid
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
    const cominedGallery = groupImages.concat(combineAccom);

    return (
      <Layout>
        <HelmetDatoCms seo={seoMetaTags} />
        {/* Header section here */}
        <Header
          backgroundImage={featuredImage.fluid}
          pageTitle={title}
          tagline=""
          propertyName=""
          caption=" "
          gal={cominedGallery}
          button="group"
        />

        <IntroText text={intro} />

        <Section lightBackground>
          <Container col="2" mobcol="1fr" maxWidth="900px" gap="2rem">
            <div>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <div>
              <h2>Facilities</h2>
              <div dangerouslySetInnerHTML={{ __html: featureList }} />
            </div>
            <Button primary>Enquire now</Button>
          </Container>
        </Section>
        <Section>
          <Container>
            <h2>Our Rooms</h2>
          </Container>
          <Container col="4" gap="1rem">
            <Gallery images={combineAccom} />
          </Container>
        </Section>

        {/* Form here */}
        <GroupsForm
          sellingPoints={sellingPoints}
          link={data.datoCmsHostel.slug}
          propertyName={hostel.title}
        />

        {/* Location section here */}
        <Location
          title={data.datoCmsHostel.title}
          streetAddress={data.datoCmsHostel.streetAddress}
          city={data.datoCmsHostel.city}
          latitude={data.datoCmsHostel.location.latitude}
          longitude={data.datoCmsHostel.location.longitude}
          mapScreenShot={data.datoCmsHostel.mapScreenShot.fluid}
          phone={data.datoCmsHostel.phone}
          emailAddress={data.datoCmsHostel.emailAddress}
          thingsNearBy={data.datoCmsHostel.thingsNearBy}
        />

        {/* FAQ */}
        <Section id="faq">
          <Container>
            <h2>FAQ's</h2>
          </Container>
          <Container>
            <div>
              {data.datoCmsGroup.faq.map(block => (
                <div key={block.id} className={block.model.apiKey}>
                  <Faq question={block.question} answer={block.answer} />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </Layout>
    );
  }
}

export const query = graphql`
  query GroupPageQuery($slug: String!, $hostel: String!) {
    datoCmsGroup(slug: { eq: $slug }) {
      title
      body
      intro
      sellingPoints
      featureList
      hostel {
        title
      }
      featuredImage {
        url
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid
        }
      }
      imageGallery {
        id
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      faq {
        ... on DatoCmsQA {
          model {
            apiKey
          }
          id
          question
          answer
        }
      }
    }

    datoCmsHostel(slug: { eq: $hostel }) {
      title
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
      accommodationType {
        ... on DatoCmsAccom {
          model {
            apiKey
          }
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
      mapScreenShot {
        fluid(
          maxWidth: 600
          imgixParams: { fm: "jpg", auto: "format", q: 50 }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
