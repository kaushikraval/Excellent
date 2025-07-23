import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FooterLogoWhite from '../../Assets/Images/logo-white.svg';
import Facebook from '../../Assets/Images/facebook.svg';
import Instagram from '../../Assets/Images/instagram.svg';
import Linkedin from '../../Assets/Images/linkedin.svg';
import Pinterest from '../../Assets/Images/pinterest.svg';
import Twitter from '../../Assets/Images/twitter.svg';
import Youtube from '../../Assets/Images/youtube.svg';
import Address from '../../Assets/Images/footer-address.svg';
import Phone from '../../Assets/Images/footer-phone.svg';
import Mail from '../../Assets/Images/footer-mail.svg';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Footer() {
  return (
    <>
      <footer>
        <section className="newsletter_wrapper">
          <Container>
            <div className="newsletter_wrapper_inner px20 pt60 pb60 pt50-md pb50-md pt30-xs pb30-xs">
              <div className="newsletter_wrapper_form">
                <h2 className="mb25">
                  Sign up for our <span>Newsletter</span>
                </h2>
                <div className="newsletter_Form_wrap mb20">
                  <Form>
                    <Form.Group
                      controlId="exampleForm.ControlInput1"
                      className="form_group_wrap"
                    >
                      <Form.Control
                        type="email"
                        placeholder="Email address..."
                      />
                    </Form.Group>
                    <Button variant="primary">Explore</Button>
                  </Form>
                </div>
                <p className="m0">
                  Sign up for our Newsletter and immerse yourself in a world of
                  brilliance. Be the one to discover New Arrivals, exclusive
                  diamonds, and captivating jewelry designs.Receive the latest
                  updates and access the best deals, ensuring you stay adorned
                  with the epitome of elegance.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="main_footer bg_secondary">
          <div className="footer_link_wrapper">
            <Container>
              <Row>
                <Col lg={2}>
                  <div className="footer_logo">
                    <img src={FooterLogoWhite} alt="" />
                  </div>
                </Col>
                <Col lg={7}>
                  <Row className="pt30-md pb30-md">
                    <Col sm={6}>
                      <div className="footer_link">
                        <h6>Contact Us</h6>
                        <div className="tab_wrap">
                          <Tabs
                            defaultActiveKey="india"
                            id="uncontrolled-tab-example"
                          >
                            <Tab eventKey="india" title="India">
                              <ul>
                                <li>
                                  <span className="icon_add">
                                    <img src={Address} alt="Addressicon" />
                                  </span>
                                  <Link
                                    to="https://maps.app.goo.gl/3Yt1DLyxLc7JTk4H7"
                                    target="_blank"
                                  >
                                    EXCELLENT CORPORATION <br />
                                    B2-B3 SECOND FLOOR, Rajpushp Apartment,
                                    behind Diamond Village, Mahidharpura,
                                    Begampura, Surat, Gujarat 395003
                                  </Link>
                                </li>
                                <li>
                                  <span className="icon_add">
                                    <img src={Phone} alt="Phoneicon" />
                                  </span>
                                  <Link to="tel:+918200127828">
                                    +91-8200127828
                                  </Link>
                                </li>
                                <li>
                                  <span className="icon_add">
                                    <img src={Mail} alt="Phoneicon" />
                                  </span>
                                  <Link to="mailto:excellentcorporation1@gmail.com">
                                    excellentcorporation1@gmail.com
                                  </Link>
                                </li>
                              </ul>
                            </Tab>
                            <Tab eventKey="hongKong" title="Hong Kong">
                              <ul>
                                <li>
                                  <span className="icon_add">
                                    <img src={Address} alt="Addressicon" />
                                  </span>
                                  <Link
                                    to="https://maps.app.goo.gl/1vFMr3Cq3hUMmJyP9"
                                    target="_blank"
                                  >
                                    EXCELLENT CORPORATION HK LIMITED <br />
                                    RM 1035, Beverley Commercial Centre 87 to
                                    105 Chatham Road South, TST, Hong Kong
                                  </Link>
                                </li>
                                <li>
                                  <span className="icon_add">
                                    <img src={Phone} alt="Phoneicon" />
                                  </span>
                                  <Link
                                    to="tel:+85262634864"
                                    className="w-auto me-1"
                                  >
                                    +852-6263 4864
                                  </Link>
                                  {' / '}
                                  <Link
                                    to="tel:+85246833011"
                                    className="w-auto ms-1"
                                  >
                                    +852 46833011
                                  </Link>
                                </li>
                                <li>
                                  <span className="icon_add">
                                    <img src={Mail} alt="Phoneicon" />
                                  </span>
                                  <Link to="mailto:excellentcorporation1@gmail.com">
                                    excellentcorporation1@gmail.com
                                  </Link>
                                </li>
                              </ul>
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </Col>
                    {/* <Col sm={3}>
                      <div className="footer_link">
                        <h6>COMPANY</h6>
                        <ul>
                          <li>
                            <Link to="/">Our Stores</Link>
                          </li>
                          <li>
                            <Link to="/">Our Materials</Link>
                          </li>
                          <li>
                            <Link to="/">Sustainability</Link>
                          </li>
                          <li>
                            <Link to="/">Careers</Link>
                          </li>
                          <li>
                            <Link to="/">Sitemap</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="footer_link">
                        <h6>HELP</h6>
                        <ul>
                          <li>
                            <Link to="/">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/">Size Guide</Link>
                          </li>
                          <li>
                            <Link to="/">Delivery & Returns</Link>
                          </li>
                          <li>
                            <Link to="/">Warranty</Link>
                          </li>
                          <li>
                            <Link to="/">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </Col> */}
                    <Col sm={3}>
                      <div className="footer_link">
                        <h6>About</h6>
                        <ul>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/education">Education</Link>
                          </li>
                          <li>
                            <Link to="/faqs">Faqs</Link>
                          </li>
                          <li>
                            <Link to="/">Events</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="footer_link">
                        <h6>Quick Links</h6>
                        <ul>
                          <li>
                            <Link to="/return-and-refund-policy">
                              Return & Refund Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="/shipping-policy">Shipping Policy</Link>
                          </li>
                          <li>
                            <Link to="/terms-and-conditions">
                              Terms & Condition
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3}>
                  <div className="footer_link social_icon_wrap">
                    <h6>Follow us On</h6>
                    <ul className="social_icon">
                      <li>
                        <Link
                          to="https://www.facebook.com/profile.php?id=100093144622388"
                          target="_blank"
                        >
                          <img src={Facebook} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.instagram.com/excellent_corporation"
                          target="_blank"
                        >
                          <img src={Instagram} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="http://linkedin.com/in/gaurang-vasoya-509953bb"
                          target="_blank"
                        >
                          <img src={Linkedin} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="http://in.pinterest.com/excellentcorporationlgd"
                          target="_blank"
                        >
                          <img src={Pinterest} alt="" />
                        </Link>
                      </li>
                      {/* <li>
                      <Link to="/">
                        <img src={Twitter} alt="" />
                      </Link>
                    </li> */}
                      <li>
                        <Link
                          to="http://www.youtube.com/@ExcellentCorporationlgd"
                          target="_blank"
                        >
                          <img src={Youtube} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="copyright_wrapper">
            <Container>
              <p className="text-center m0">
                Copyright © 2023 Excellent Corporation. All Rights Reserved
              </p>
            </Container>
          </div>
        </section>
      </footer>
      <div className="chat-wrapper">
        <TawkMessengerReact
          propertyId="https://tawk.to/chat/65b37b018d261e1b5f5829c5/1hl2hh02j"
          widgetId="1hl2hh02j"
        />
      </div>
    </>
  );
}
