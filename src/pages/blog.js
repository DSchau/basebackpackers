import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  Section,
  Container,
  CardImage,
  CardBody,
  CardLink,
  CardHeading,
  Card
} from '../components/common/index.js';
import { Header } from '../components/layout/index.js';

import Layout from '../components/layout.js';

const BlogPage = ({ data }) => (
  <Layout>
    <Header
      backgroundImage={data.file.childImageSharp.fluid}
      pageTitle="Something to intro the blog goes here"
      propertyName="Base Magnetic Island"
      caption="Sunset Walking Tour"
    />
    <Section lightBackground>
      <Container maxWidth="1400px">
        <h2>Featured Articles</h2>
      </Container>

      <Container col="4" gap="20px">
        {data.featured.edges.map(({ node: blog }) => (
          <Card key={blog.id}>
            <CardLink url={`/${blog.destination.slug}/${blog.slug}`}>
              <CardImage image={blog.featuredImage.fluid} />
              <CardBody>
                <CardHeading title={blog.title} />
                <Button primary>Read more</Button>
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </Container>
      <Container maxWidth="1400px">
        <h2>Latest Articles</h2>
      </Container>
      <Container col="4" gap="20px">
        {data.recent.edges.map(({ node: blog }) => (
          <Card key={blog.id}>
            <CardLink url={`/${blog.destination.slug}/${blog.slug}`}>
              <CardImage image={blog.featuredImage.fluid} />
              <CardBody>
                <CardHeading title={blog.title} />
                <Button primary>Read more</Button>
              </CardBody>
            </CardLink>
          </Card>
        ))}
      </Container>
    </Section>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "base-magentic-island.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featured: allDatoCmsBlog(filter: { featuredPost: { eq: "Yes" } }) {
      edges {
        node {
          id
          title

          slug
          destination {
            slug
          }
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
    recent: allDatoCmsBlog(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          destination {
            slug
          }
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
