import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const CategoryItem = styled.div`
  box-shadow: ${props => props.theme.shadow};
  margin: 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
  min-height: 200px;
  padding: 0 0 1rem;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    margin: 0px;
    overflow: hidden;
    position: absolute;
    z-index: 2;
    padding: 10px;
    bottom: 0;
    left: 0;
    font-size: 0.9rem;
    letter-spacing: 0.04rem;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.white};
  }
`;

function Category(props) {
  return (
    <CategoryItem>
      <Link to={props.url}>
        <Img
          fluid={props.fluid}
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
        />
        <h3>{props.title}</h3>
      </Link>
    </CategoryItem>
  );
}

Category.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired
};

export { Category };
