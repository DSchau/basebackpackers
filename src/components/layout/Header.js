import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Section, Container, Button } from '../common/';
import { Navigation, Gal } from '../layout/';
import vid from '../images/base.mp4';

// Header Section used on hostel pages includes navigation component

const HeaderContainer = styled(Container)`
  z-index: 1;
  position: relative;
  color: ${props => props.theme.white};
  margin-top: 5rem;
`;

const PageTitle = styled.h1`
  width: 50%;
  font-size: 3.63rem;
  line-height: 4rem;

  @media (max-width: 500px) {
    width: 20rem;
    font-size: 2.63rem;
    line-height: 3rem;
  }
`;

const HeaderButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  @media (min-width: 500px) {
    width: 200px;
  }
`;

const HeaderTag = styled.p`
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
`;

const HeaderCaption = styled.div`
  z-index: 1;
  position: relative;
  color: ${props => props.theme.white};
  text-align: right;
  padding-right: 3rem;
  padding-bottom: 2rem;
  font-size: 0.75rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Header = props => {
  return (
    <Section
      id="header"
      padding="0rem"
      style={{
        margin: 0,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
        minHeight: '25rem'
      }}
    >
      {/* <Img
        fluid={props.backgroundImage}
        alt={props.alt}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1 
        }}
      /> */}

      <video
        width="100%"
        height="auto"
        autoPlay
        poster={props.poster}
        muted
        loop
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          objectFit: 'cover'
        }}
      >
        <source src={vid} />
      </video>
      <Navigation />

      <HeaderContainer padding="0rem">
        <PageTitle>{props.pageTitle}</PageTitle>
        <HeaderTag>{props.tagline}</HeaderTag>
        <p>
          <HeaderButton primary className="distributor">
            Book now
          </HeaderButton>
          &nbsp;
          <Gal images={props.gal} />
        </p>
      </HeaderContainer>

      <HeaderCaption>
        <div>{props.caption}</div>
        <div>@ {props.propertyName}</div>
      </HeaderCaption>
    </Section>
  );
};

Header.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
  tagline: PropTypes.string,
  propertyName: PropTypes.string,
  caption: PropTypes.string
};

export { Header };
