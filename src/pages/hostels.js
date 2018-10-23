import React from 'react';
import { Link, graphql } from 'gatsby';

import { Header } from '../components/layout/index.js';
import {
  Section,
  Container,
  CardImage,
  CardBody,
  CardLink,
  CardHeading,
  Card,
  Button
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
      <Container col="3" gap="2rem">
        {data.australia.edges.map(({ node: hostel }) => (
          <Card key={hostel.id}>
            <CardLink url={`hostels/${hostel.slug}`}>
              <CardImage image={hostel.featuredImage.fluid} />
              <CardBody>
                <CardHeading title={hostel.title} />
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </Container>
    </Section>
    <Section>
      {/* <Container>
        <h2>New Zealand Hostels</h2>
      </Container>
      <Container col="3" gap="2rem">
        {data.nz.edges.map(({ node: hostel }) => (
          <Card key={hostel.id} lightBackground>
            <CardLink url={`hostels/${hostel.slug}`}>
              <CardImage image={hostel.featuredImage.fluid} />
              <CardBody>
                <CardHeading title={hostel.title} />
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </Container> */}
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
    nz: allDatoCmsHostel(filter: { country: { eq: "NZ" } }) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
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
  }
`;
