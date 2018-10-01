import React from 'react'
import Link  from 'gatsby-link'
import styled from 'styled-components';
import SiteLogo from '../base-logo-white.png';



const Nav = styled.nav`
  grid-area: nav;
  display:grid;
  grid-template-columns: 200px auto;
  color: #fff;
  z-index:1;
  position:relative;
  padding:1.5rem;
  @media (max-width: 500px) {
    padding:0;
  }
`;

const Logo = styled.div`
  position:relative;
`;

const LogoWrapper = styled.div`
 position: absolute;
 top:10px;
 left:20px;
 width:110px;
 @media (max-width: 500px) {
    left:0;
  }
`;

const Menu = styled.div`
 text-align:right;
 padding:1.2rem;
`;

const NavLink = styled(Link)`
  display: inline-block; 
  color: #fff; 
  text-align: right; 
  padding: 0px 10px; 
  text-decoration: none; 
  font-size: 1rem;
  
`;
const NavButton = styled.a`
  float:right;
  display: inline-block; 
  color: #f2f2f2; 
  text-align: center; 
  padding: 0px 10px; 
  text-decoration: none; 
  font-size: 1rem;
  
`;


class Navigation extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }


  render() {
    const burgerActive = this.state.showMenu ? 'responsive' : '';
    return (
  <Nav>
    <Logo>
      <LogoWrapper>
      <Link to="/"><img src={SiteLogo} style={{width:110}} alt='Mad Backpacker Travel Agency Australia' /></Link>
      </LogoWrapper>
    </Logo>
    <Menu id="Topnav" className={`topnav ${burgerActive}`}>
      <NavLink to="/destinations/">Destinations</NavLink>
      <NavLink to="#">Deals</NavLink>
      <NavLink to="/about/about-us">About us</NavLink>
      <NavButton className="icon" href="#" onClick={this.toggleMenu}>&#9776;</NavButton>
    </Menu>
  </Nav>
  )
  }
};


export { Navigation };
