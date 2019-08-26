import React, { Component } from 'react';
import { FooterWrapper, FooterComponent, FooterLine, FooterNav, FooterNavLinks, FooterIcons, FooterSocial, FooterAppIcons, FooterConnect } from './../styled-components/footer';

class Footer extends Component {
  render(){
    return (
        <FooterWrapper className="footer">
            <FooterNav className="footer-nav">
                <FooterNavLinks className="footer-nav-links">
                    <li>
                        <a href="https://www.overstock.com/careers?tid=Careers:07:FooterNav-1:Careers">CAREERS</a>
                    </li>
                    <li>
                        <a href="https://www.overstock.com/about?tid=Careers:07:FooterNav-2:AboutUs">ABOUT US</a>
                    </li>
                    <li>
                        <a href="https://www.overstock.com/contact-us?tid=Careers:07:FooterNav-3:ContactUs">CONTACT US</a>
                    </li>
                    <li className="last-item-no-border">
                        <a href="https://www.overstock.com?tid=Careers:07:FooterNav-4:Overstock">SHOP OVERSTOCK.COM</a>
                    </li>
                </FooterNavLinks>
            </FooterNav>
            <FooterLine className="footer-line" />
            <FooterIcons className="footer-icons">
                <div>
                    <FooterConnect id="footer-connect">CONNECT</FooterConnect>
                    <FooterSocial className="footer-social">
                        <li>
                            <a href="https://www.facebook.com/overstock.comcareers/?tid=Careers:08:Footer-1:Facebook" rel="noopener noreferrer" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-social-fb.png" alt="Visit us on Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/overstock-com?tid=Careers:08:Footer-2:LinkedIn" rel="noopener noreferrer" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-social-linked-in.png" alt="Visit us on LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/overstockcareers/?tid=Careers:08:Footer-3:Instagram" rel="noopener noreferrer" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-social-instagram.png" alt="Visit us on Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indeed.com/cmp/Overstock.com?tid=Careers:08:Footer-4:Indeed" rel="noopener noreferrer" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-social-indeed.png" alt="Visit us on Indeed" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/Overstock?feature=guide?tid=Careers:08:Footer-5:Youtube" rel="noopener noreferrer" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-social-youtube.png" alt="Visit us on YouTube" />
                            </a>
                        </li>
                    </FooterSocial>
                </div>
                <div>
                    <h5>GET OUR APPS</h5>
                    <FooterAppIcons className="footer-app-icons">
                        <li>
                            <a href="https://itunes.apple.com/us/app/overstock.com-mobile-shopping/id339883869?mt=8?tid=Careers:08:Footer-6:iTunes" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-apple.png" alt="Download our App for iOS on the App Store" />
                                <p> Download on the App Store</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.overstock&amp;hl=en?tid=Careers:08:Footer-7:GooglePlay" target="_blank">
                                <img src="https://images-common.test.overstock.com/img/mxc/20170817-careers-footer-android.png" alt="Download our App for Android on the Google Play Store" />
                                <p>Download on Google Play</p>
                            </a>
                        </li>
                    </FooterAppIcons>
                </div>
            </FooterIcons>
            <FooterLine className="footer-line" />
            <FooterComponent>
                <p>© Copyright 1999-{new Date().getFullYear()}, Overstock.com<sup>®</sup></p>
            </FooterComponent>
        </FooterWrapper>
    );
  }
}
export default Footer;
