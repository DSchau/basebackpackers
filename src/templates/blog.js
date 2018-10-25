import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Article, Header } from '../components/layout/index.js';

import Layout from '../components/layout';

const BodyContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: 2rem auto;
  grid-template-columns: 3fr 12fr 3fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin: 0;
  }
`;

const Figure = styled.figure`
  max-width: 900px;
  margin: 0 auto;
  figcaption {
    margin-top: 0.7rem;
  }
`;

const Attribution = styled.p`
  font-size: 0.7rem;
`;

export default class BlogPost extends React.Component {
  render() {
    const { data } = this.props;
    const {
      featuredImage,
      title,
      slug,
      destination,
      seoMetaTags,
      author,
      body
    } = data.datoCmsBlog;
    const rootUrl = `${data.site.siteMetadata.siteUrl}`;
    const pagePath = `/${destination.slug}/${slug}`;
    const postURL = rootUrl + pagePath;
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: postURL,
        image: `${featuredImage.url}`,
        headline: `${title}`
      }
    ];

    return (
      <Layout>
        {/* <script async defer src="https://www.instagram.com/embed.js" /> */}
        <Header
          backgroundImage={featuredImage.fluid}
          poster={featuredImage.url}
          pageTitle={title}
          tagline={`Written by: ${author.name}`}
          darken="true"
          // propertyName="Base Backpackers Sydney"
          // caption="Crazy Party Tuesdays - Scary Canary Bar "
          // alt={data.datoCmsHostel.featuredImage.alt}
          // gal={cominedGallery}
          // button="hostel"
        />
        <Article>
          <HelmetDatoCms seo={seoMetaTags} />
          <Helmet>
            {/* Schema.org tags */}
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
          </Helmet>

          <BodyContainer className="article">
            {body.map(block => (
              <div key={block.id} className={block.model.apiKey}>
                {block.model.apiKey === 'text' && (
                  <div dangerouslySetInnerHTML={{ __html: block.text }} />
                )}
                {block.model.apiKey === 'image_block' && (
                  <Figure>
                    <Img fluid={block.image.fluid} />
                    <figcaption>{block.caption}</figcaption>
                    <Attribution
                      dangerouslySetInnerHTML={{ __html: block.attribution }}
                    />
                  </Figure>
                )}
              </div>
            ))}
          </BodyContainer>
        </Article>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    datoCmsBlog(slug: { eq: $slug }) {
      title
      slug
      destination {
        slug
      }
      author {
        name
      }
      featuredImage {
        url
        fluid(
          maxWidth: 1000
          maxHeight: 400
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      body {
        ... on DatoCmsText {
          model {
            apiKey
          }
          text
        }
        ... on DatoCmsImageBlock {
          model {
            apiKey
          }
          caption
          attribution
          image {
            fluid(
              maxWidth: 800

              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
