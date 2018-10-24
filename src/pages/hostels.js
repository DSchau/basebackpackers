import React from 'react';
import { Link, graphql } from 'gatsby';

import { Header, Category } from '../components/layout/index.js';
import {
  Section,
  Container,
  CardImage,
  CardBody,
  CardLink,
  CardHeading,
  Card
} from '../components/common/index.js';

import Layout from '../components/layout';

const DestinationsPage = ({ data }) => (
  <Layout>
    <Header
      backgroundImage={data.file.childImageSharp.fluid}
      pageTitle="Base yourself in awesome locations"
      propertyName="Base Magnetic Island"
      caption="Sunset Walking Tour"
    />

    <Section lightBackground>
      <Container>
        <h2>Australian hostels</h2>
      </Container>
      <Container col="3" gap="2rem" mobcol="1fr">
        {data.australia.edges.map(({ node: hostel }) => (
          <Category
            title={hostel.title}
            fluid={hostel.featuredImage.fluid}
            key={hostel.id}
            alt={hostel.alt}
            url={`hostels/${hostel.slug} `}
          />
        ))}
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>New Zealand Hostels</h2>
      </Container>
      <Container col="3" gap="2rem" mobcol="1fr">
        {data.nz.edges.map(({ node: hostel }) => (
          <Category
            title={hostel.title}
            fluid={hostel.featuredImage.fluid}
            key={hostel.id}
            alt={hostel.alt}
            url={`hostels/${hostel.slug} `}
          />
        ))}
      </Container>
    </Section>
  </Layout>
);

export default DestinationsPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "backpacker-destinations-australia-nz.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    australia: allDatoCmsHostel(filter: { country: { eq: "Australia" } }) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            alt
            fluid(
              maxWidth: 300
              maxHeight: 200
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                fit: "crop"
                crop: "faces"
              }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    nz: allDatoCmsHostel(filter: { country: { eq: "New Zealand" } }) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            fluid(
              maxWidth: 300
              maxHeight: 300
              imgixParams: {
                fm: "jpg"
                auto: "compress"
                fit: "crop"
                crop: "faces"
              }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
