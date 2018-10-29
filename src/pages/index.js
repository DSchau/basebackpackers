import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Header } from '../components/layout/index.js';
import { Section, Container } from '../components/common/index.js';

import Layout from '../components/layout';

const BookingForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  max-width: ${props => props.theme.maxwidth};
  margin: 2rem auto;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Header
      backgroundImage={data.file.childImageSharp.fluid}
      pageTitle="Find the rest of the world with us"
      tagline="Awesome backpacker hostels in Australia and New Zealands top locations"
      propertyName="Base Magnetic Island"
      caption="Sunset Walking Tour"
    />
    <BookingForm>
      <div>Where you heading?</div>
      <div>form here</div>
    </BookingForm>
    <Section lightBackground>
      <Container>
        <p>
          I'm the home page but I'm not finished and ugly. Don't look at me, I
          will blush
        </p>
      </Container>
      <Container col="4">
        <div>
          <h2>Blog pages</h2>
          <Link to="blog"> Blogs have moved here</Link>
        </div>
        <div>
          <h2>Hostel Pages</h2>
          <div>
            {data.allDatoCmsHostel.edges.map(({ node: hostel, index }) => (
              <div key={index}>
                <Link to={`hostels/${hostel.slug}`}>{hostel.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Groups Pages</h2>
          {data.allDatoCmsGroup.edges.map(({ node: group, index }) => (
            <div key={index}>
              <Link to={`groups/${group.slug}`}>{group.title}</Link>
            </div>
          ))}
        </div>
        <div>
          <h2>Product pages</h2>
        </div>
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "base-magentic-island.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allDatoCmsHostel {
      edges {
        node {
          slug
          title
        }
      }
    }
    allDatoCmsGroup {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
