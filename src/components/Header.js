import React, { Component } from 'react';
import { LogoIcon, LogoText } from '../utils/svg/Logo';
import { HamburgerIcon } from '../utils/svg/Navigation';
import { HeaderWrapper, AboutLogo, NavigationIcon, NavLinks, TopNavigation, MobileNavWrapper, MobileNav } from '../styled-components/header';


class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
    this.openMenu = this.openMenu.bind(this)
    this.clickListener = this.clickListener.bind(this)
  }
  clickListener(e){
    this.setState({
      menuOpen: false
    })
    document.body.removeEventListener('click', this.clickListener)
  }
  openMenu(){
    this.setState({
      menuOpen: true
    })
    document.body.addEventListener('click', this.clickListener)
  }
  render(){
    const { page } = this.props;
    const { menuOpen } = this.props;
    return (
        <HeaderWrapper className="header">
          <NavigationIcon id="navigation-icon" onClick={this.openMenu}>
            <HamburgerIcon/>
          </NavigationIcon>
          <AboutLogo className="about-logo" aria-label="Navigation Menu">
            <a href="https://www.overstock.com">
              <LogoIcon />
              <LogoText />
            </a>
          </AboutLogo>
          <TopNavigation className="top-navigation">
            <NavLinks>
              <li><a className={page == "careers" ? "pageSelected" : ""} href="/careers">Careers</a></li>
              <li><a className={page == "about" ? "pageSelected" : ""} href="/about">About Us</a></li>
              <li><a className={page == "newsroom" ? "pageSelected" : ""} href="/newsroom">Newsroom</a></li>
              <li><a className={page == "cares" ? "pageSelected" : ""} href="/overstock-cares">Overstock Cares</a></li>
              <li><a className={page == "contact" ? "pageSelected" : ""} href="/contact-us">Contact Us</a></li>
            </NavLinks>
          </TopNavigation>
          {
            this.state.menuOpen ?
            (
              <MobileNavWrapper class="mobileNavWrapper mobile-overlay">
                <MobileNav class="mobileNav mobileNavActive">
                  <ul>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/newsroom">Newsroom</a></li>
                    <li><a href="/overstock-cares">Overstock Cares</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="https://www.overstock.com">Back to Overstock.com</a></li>
                  </ul>
                </MobileNav>
              </MobileNavWrapper>
            ) : ""
          }
        </HeaderWrapper>
    );
  }
}
export default Header;
