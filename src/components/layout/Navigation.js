import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import SiteLogo from '../base-logo-white.png';
import { Button } from '../common';

const Nav = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: 120px auto;
  color: #fff;
  z-index: 1;
  position: relative;
  padding: 1.5rem;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Logo = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 110px;
  @media (max-width: 500px) {
    left: 0;
  }
`;

const Menu = styled.div`
  text-align: left;
  padding: 0.8rem;
  justify-self: end;
`;

const NavLink = styled(Link)`
  display: inline-block;
  color: #fff;
  text-align: left;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 1rem;
  float: left;
`;
const NavLinka = styled.a`
  display: inline-block;
  color: #fff;
  text-align: left;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 1rem;
  float: left;
`;

const NavButton = styled.a`
  float: left;
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 0px 10px;
  text-decoration: none;
  font-size: 1rem;
`;

class Navigation extends React.Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    const burgerActive = this.state.showMenu ? 'responsive' : '';
    return (
      <Nav>
        <Logo>
          <LogoWrapper>
            <a href="http://www.stayatbase.com">
              <img
                src={SiteLogo}
                style={{ width: 110 }}
                alt="Mad Backpacker Travel Agency Australia"
              />
            </a>
          </LogoWrapper>
        </Logo>
        <Menu id="Topnav" className={`topnav ${burgerActive}`}>
          {/* <NavLink to="/destinations/">Destinations</NavLink> */}
          <NavLink to="/hostels">Locations</NavLink>
          <NavLink to="/groups">Groups</NavLink>
          <NavLinka href="http://www.stayatbase.com/packages">Deals</NavLinka>
          <NavLink to="/blog">Guides</NavLink>

          <div className="dropdown">
            <button className="dropbtn">Social</button>
            <div className="dropdown-content">
              <a
                href="https://www.instagram.com/basehostels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/BaseBackpackers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.pinterest.com/basebackpackers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </div>
          </div>

          <Button primary className="menucta distributor">
            Book Now
          </Button>
          <NavButton className="icon" href="#" onClick={this.toggleMenu}>
            &#9776;
          </NavButton>
        </Menu>
      </Nav>
    );
  }
}

export { Navigation };
