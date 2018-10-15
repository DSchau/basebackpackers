import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Section, Container, Button } from '../components/common';
import {
  Header,
  Faq,
  Accom,
  IntroText,
  Gallery,
  GroupsForm
} from '../components/layout/index.js';

const SellingPointHeading = styled.h2`
  line-height: 1.8rem;
  margin-bottom: 1.2rem;
`;
const Small = styled.div`
  font-size: 0.7rem;
  color: #00000099;
`;

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
      body
    } = data.datoCmsGroup;

    const groupImages = imageGallery.map(photo =>
      Object.assign({
        srcSet: photo.fluid.srcSet,
        src: photo.fluid.src,
        caption: photo.title,
        fluid: photo.fluid
      })
    );

    return (
      <Layout>
        {/* Header section here */}
        <Header
          backgroundImage={featuredImage.fluid}
          pageTitle={title}
          tagline="Find the rest of the world with us."
          propertyName="Base Backpackers Sydney"
          caption="Crazy Party Tuesdays - Scary Canary Bar "
        />

        <IntroText text={intro} />

        <Section lightBackground>
          <HelmetDatoCms seo={seoMetaTags} />
          <Container col="2" maxWidth="900px" gap="2rem">
            <div>
              <Button primary>Enquire now</Button>
              <Container col="3" gap="1rem">
                <Gallery images={groupImages} />
              </Container>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Container>
        </Section>
        <Section>
          <Container col="4" gap="1rem">
            <Gallery images={groupImages} />
          </Container>
        </Section>
        <GroupsForm sellingPoints={sellingPoints} />
      </Layout>
    );
  }
}

export const query = graphql`
  query GroupPageQuery($slug: String!) {
    datoCmsGroup(slug: { eq: $slug }) {
      title
      body
      intro
      sellingPoints
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
    }
  }
`;
