import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

const Foot = styled.footer`
  grid-area: foot;
  color: #333;
  padding: 1.5rem 3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  display: -ms-grid;
  grid-column-gap: 1.5rem;
  background: ${props => props.theme.lightGrey};

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr 1fr;
    -ms-grid-columns: 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  margin-top: 1.5rem;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.9rem;
  color: #333;
`;
const FooterLinka = styled.a`
  display: block;
  font-size: 0.9rem;
  color: #333;
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsAbout {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Foot>
        <FooterColumn className="footcol1">
          <h4>Quick Links</h4>
          <FooterLinka href="http://www.stayatbase.com">Home</FooterLinka>

          <FooterLinka href="http://www.stayatbase.com/packages">
            Deals
          </FooterLinka>
        </FooterColumn>
        <FooterColumn className="footcol3">
          <h4>About us</h4>
          {data.allDatoCmsAbout.edges.map(({ node }, index) => (
            <FooterLink key={index} to={`/about/${node.slug}`}>
              {node.title}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn className="footcol4">
          <p>Copyright Base Backpackers 2018.</p>
        </FooterColumn>
      </Foot>
    )}
  />
);

export { Footer };
