import React from 'react'
import styled from 'styled-components';

const Foot = styled.footer`
  grid-area: foot;
  background: #ccc;
  padding:1.5rem;
`;

const Footer = ({ siteTitle }) => (
  <Foot>
    Footer text here
  </Foot>
)

export { Footer };
