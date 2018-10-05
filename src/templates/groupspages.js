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
  StickyNav,
  Gallery
} from '../components/layout/index.js';

import {
  FormGroup,
  FormLabel,
  Input,
  TextArea
} from '../components/layout/FormStyles';

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
              <SellingPointHeading>
                Everything you need for your group
              </SellingPointHeading>
              <div dangerouslySetInnerHTML={{ __html: sellingPoints }} />
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
        <Section>
          <Container>
            <form
              name="MAD booking form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div style={{ color: 'red', textAlign: 'right' }}>
                <small>* Required field</small>
              </div>
              {/* Hidden form variables below */}

              <FormGroup>
                <FormLabel htmlFor="name">
                  Your Name:
                  <span className="required">*</span>
                </FormLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Excited Bob"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">
                  Your Email:
                  <span className="required">*</span>{' '}
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="bob@bringonthemadness.com"
                  required
                />
                <Small>We won't share your email with anyone</Small>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="phone">Your Phone Number:</FormLabel>
                <Input
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="+61 420 420 420"
                />
                <Small>
                  It's so much easier for you if we can talk about detais on the
                  phone
                </Small>
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="date">
                  When would you like to go/start:
                  <span className="required">*</span>
                </FormLabel>
                <Input id="date" type="date" name="date" required />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="requirements">
                  Special requirements:
                </FormLabel>
                <TextArea
                  id="requirements"
                  name="requirements"
                  placeholder="I'm a vego aka meat is murder"
                />
              </FormGroup>

              <p style={{ display: 'none' }}>
                <label>
                  Don’t fill this out if you're human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
              <FormGroup>
                <Button primary type="submit">
                  Book it !!!
                </Button>
              </FormGroup>
            </form>
          </Container>
        </Section>
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
