import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { contactDetail } from './Redux/reducers/auth.slice';
import { Link } from 'react-router-dom';
import Address from '../Assets/Images/footer-address.svg';
import Phone from '../Assets/Images/footer-phone.svg';
import Mail from '../Assets/Images/footer-mail.svg';
import Facebook from '../Assets/Images/facebook.svg';
import Instagram from '../Assets/Images/instagram.svg';
import Linkedin from '../Assets/Images/linkedin.svg';
import Pinterest from '../Assets/Images/pinterest.svg';
import Youtube from '../Assets/Images/youtube.svg';

export default function ContactUs2() {
  window.scrollTo(0, 0);
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const initialValues = {
    Id: 0,
    Fname: '',
    Lname: '',
    Email: '',
    Message: '',
    CreatedOn: Date.now().toString(),
    PhoneNo: '',
  };
  const SubmitSchma = Yup.object().shape({
    Email: Yup.string().email('Invalid email').required('Required'),
    Fname: Yup.string().required('Required'),
    Lname: Yup.string().required('Required'),
    PhoneNo: Yup.string()
      .required('Required')
      .matches(/^[0-9]{10}$/, 'Mobile number must contain 10 digits'),
    Message: Yup.string().required('Required'),
  });

  return (
    <main>
      <div className="contact_us_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <div className="contact_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.4814179475406!2d72.8319678!3d21.2039666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04efe662a1ad9%3A0x5fbb6f7ccc113970!2sExcellent%20Corporation!5e0!3m2!1sen!2sin!4v1706782685441!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact_form_wrap">
            <Row className="justify-content-center">
              <Col md={10}>
                <div className="contact_form_inner_wrap">
                  <Row>
                    <Col lg={5}>
                      <h4 className="text_primary mb25 mb15-xs">Contact Us</h4>
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
                                  EXCELLENT CORPORATION B2-B3 SECOND FLOOR,
                                  Rajpushp Apartment, behind Diamond Village,
                                  Mahidharpura, Begampura, Surat, Gujarat 395003
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
                                  EXCELLENT CORPORATION HK LIMITED RM 1035,
                                  Beverley Commercial Centre 87 to 105 Chatham
                                  Road South, TST, Hong Kong
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
                      <div className="follow_us_wrapper mb30-md">
                        <h4 className="text_primary mb25 mb15-xs">
                          Follow us on
                        </h4>
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
                    <Col lg={7}>
                      <h4 className="text_primary mb25 mb15-xs">
                        Get in touch
                      </h4>
                      <Formik
                        initialValues={initialValues}
                        innerRef={submitRef}
                        validationSchema={SubmitSchma}
                        onSubmit={async (values, { resetForm }) => {
                          dispatch(contactDetail(values));
                          submitRef && submitRef.current.resetForm();
                        }}
                      >
                        {({ handleSubmit, handleChange, values }) => (
                          <Form onSubmit={handleSubmit}>
                            <Row>
                              <Col md={6}>
                                <Form.Group
                                  className="form_group custom_form_group mb25 mb15-xs"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>First name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter First Name"
                                    name="Fname"
                                    value={values.Fname}
                                    onChange={e => {
                                      handleChange('Fname')(e.target.value);
                                    }}
                                  />
                                  <span className="text-error">
                                    <ErrorMessage name="Fname" />
                                  </span>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group
                                  className="form_group custom_form_group mb25 mb15-xs"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Last name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    name="Lname"
                                    value={values.Lname}
                                    onChange={e => {
                                      handleChange('Lname')(e.target.value);
                                    }}
                                  />
                                  <span className="text-error">
                                    <ErrorMessage name="Lname" />
                                  </span>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group
                                  className="form_group custom_form_group mb25 mb15-xs"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    name="Email"
                                    value={values.Email}
                                    onChange={e => {
                                      handleChange('Email')(e.target.value);
                                    }}
                                  />
                                  <span className="text-error">
                                    <ErrorMessage name="Email" />
                                  </span>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group
                                  className="form_group custom_form_group mb25 mb15-xs"
                                  controlId="exampleForm.ControlInput1"
                                >
                                  <Form.Label>Contact</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter Contact"
                                    name="PhoneNo"
                                    value={values.PhoneNo}
                                    onChange={e => {
                                      handleChange('PhoneNo')(e.target.value);
                                    }}
                                  />
                                  <span className="text-error">
                                    <ErrorMessage name="PhoneNo" />
                                  </span>
                                </Form.Group>
                              </Col>
                              <Col md={12}>
                                <Form.Group
                                  className="form_group custom_form_group mb25 mb15-xs"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Message</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter Here..."
                                    name="Message"
                                    value={values.Message}
                                    onChange={e => {
                                      handleChange('Message')(e.target.value);
                                    }}
                                  />
                                  <span className="text-error">
                                    <ErrorMessage name="Message" />
                                  </span>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Button
                              type="submit"
                              variant="primary"
                              className="rounded btn_shadow w-100"
                            >
                              Send message
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </main>
  );
}
