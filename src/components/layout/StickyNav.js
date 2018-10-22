import React from 'react';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import { Section, Container, Button } from '../common/';

const NavItem = styled.li`
  padding-left: 0;
  display: inline-block;
  margin-right: 1.3rem;
  margin-bottom: 0rem;
  padding-bottom: 0.7rem;
  font-size: 0.9rem;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.secondaryColor};
  }
  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;

const NavButton = styled(NavItem)`
  background: ${props => props.theme.primaryColor};
  padding: 0.5rem;
  color: ${props => props.theme.white};
  cursor: pointer;
  &:hover {
  }
`;

const NavItemLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.secondaryColor};
  }
`;

const StickyNav = () => {
  return (
    <Section
      padding="2rem 0 1rem"
      style={{ position: 'sticky', top: 0, zIndex: 3 }}
    >
      <Container>
        <Scrollspy
          className="ScrollNav"
          items={['rooms', 'activities', 'facilities', 'location', 'faq']}
          currentClassName="is-current"
        >
          <NavItem>
            <NavItemLink href="#rooms">Rooms</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#activities">Activities</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#facilities">Facilities</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#location">Location</NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href="#faq">Yes-A-Q</NavItemLink>
          </NavItem>
          <NavButton primary className="menucta distributor">
            Book Now
          </NavButton>
        </Scrollspy>
      </Container>
    </Section>
  );
};

export { StickyNav };
