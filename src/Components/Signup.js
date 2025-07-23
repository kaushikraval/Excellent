import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import googleIcon from '../Assets/Images/google.svg';
import SignupImg from '../Assets/Images/signup-bg.jpg';
import { registration, setIsRegistration } from './Redux/reducers/auth.slice';
import Select from 'react-select';
import {
  getCityList,
  getCountryList,
  getStateList,
} from './Redux/reducers/dashboard.slice';

function Signup() {
  const submitRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistration } = useSelector(({ auth }) => auth);
  const { countryList, stateList, cityList } = useSelector(
    ({ dashboard }) => dashboard,
  );
  const { diamondFilterDetail } = useSelector(({ common }) => common);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const initialValues = {
    companyName: '',
    firstName: '',
    lastName: '',
    natureOfBusiness: '',
    email: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    agree: false,
    country: '',
    state: '',
    city: '',
  };

  useEffect(() => {
    if (countryList?.length === 0) {
      dispatch(getCountryList());
    }
  }, [dispatch, countryList]);

  useEffect(() => {
    if (isRegistration) {
      navigate('/login');
      dispatch(setIsRegistration(false));
    }
  }, [dispatch, isRegistration, navigate]);

  const natureOfOrgListOption = useMemo(() => {
    return (
      diamondFilterDetail?.natureOfOrgList?.map(item => {
        return {
          label: item.MasterTypeValue_Code,
          value: item.MasterTypeValue_Code,
        };
      }) || []
    );
  }, [diamondFilterDetail]);

  const finalCountry = useMemo(() => {
    const countryData =
      countryList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || [];
    return countryData;
  }, [countryList]);

  const finalState = useMemo(() => {
    const stateData =
      stateList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || [];
    return stateData;
  }, [stateList]);

  const finalCity = useMemo(() => {
    const cityData =
      cityList?.map(data => {
        return { label: data.Text, value: data.Value };
      }) || [];
    return cityData;
  }, [cityList]);

  const signUpSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password')], 'Both password need to be the same'),
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    companyName: Yup.string().required('Required'),
    contactNo: Yup.string()
      .required('Required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
    natureOfBusiness: Yup.object().required('Required'),
    country: Yup.object().required('Required'),
    state: Yup.object().required('Required'),
    city: Yup.object().required('Required'),
  });
  return (
    <main>
      <section className="login_wrapper signup_wrapper pb100 pb50-md">
        <Container>
          <Row>
            <Col xl={5} className="d-none d-xl-block">
              <div className="login_img_wrap">
                <img src={SignupImg} alt="" />
              </div>
            </Col>
            <Col xl={7}>
              <div className="login_form_wrapper mt40">
                <Formik
                  initialValues={initialValues}
                  innerRef={submitRef}
                  validationSchema={signUpSchema}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(registration({ ...values }));
                    submitRef && submitRef.current.resetForm();
                  }}
                >
                  {({ handleSubmit, handleChange, values, setFieldValue }) => (
                    <Form onSubmit={handleSubmit}>
                      {/* <div className="google_wrapper">
                        <Button
                          variant="light"
                          className="btn_google"
                          autoFocus
                        >
                          <img src={googleIcon} alt="" /> Log In with Google
                        </Button>

                        <div className="devider">
                          <span>or</span>
                        </div>
                      </div> */}
                      <div className="supplyer_wrap mb25">
                        <Form.Select
                          aria-label="Default select example"
                          className="select_wrapper"
                          name="roll"
                          value="1"
                          disabled
                        >
                          <option>Select Roll</option>
                          <option value="1">For Customer</option>
                          <option value="2">For Supplier</option>
                        </Form.Select>
                      </div>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput0"
                          >
                            <Form.Control
                              type="text"
                              name="companyName"
                              value={values.companyName}
                              onChange={e => {
                                handleChange('companyName')(e.target.value);
                              }}
                              placeholder="Enter Compony Name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="companyName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Select
                              aria-label="Default select example"
                              className="react_custom_select_Wrapper square"
                              value={values?.natureOfBusiness}
                              onChange={e => {
                                let selectedObj = {
                                  target: {
                                    name: 'natureOfBusiness',
                                    value: e,
                                  },
                                };
                                handleChange('natureOfBusiness')(selectedObj);
                              }}
                              options={natureOfOrgListOption}
                              placeholder="Nature of Business"
                            />
                            <span className="text-error">
                              <ErrorMessage name="natureOfBusiness" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput2"
                          >
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={values.firstName}
                              onChange={e =>
                                handleChange('firstName')(e.target.value)
                              }
                              placeholder="Enter first name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="firstName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput3"
                          >
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={values.lastName}
                              onChange={e =>
                                handleChange('lastName')(e.target.value)
                              }
                              placeholder="Enter Last name"
                            />
                            <span className="text-error">
                              <ErrorMessage name="lastName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput4"
                          >
                            <Form.Control
                              type="email"
                              name="email"
                              value={values?.email}
                              onChange={e =>
                                handleChange('email')(e.target.value)
                              }
                              placeholder="Your business email"
                            />
                            <span className="text-error">
                              <ErrorMessage name="email" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput5"
                          >
                            <Form.Control
                              type="number"
                              name="contactNo"
                              value={values?.contactNo}
                              onChange={e => {
                                if (e.target.value?.length < 11) {
                                  handleChange('contactNo')(e.target.value);
                                }
                              }}
                              placeholder="Your Contact no"
                            />
                            <span className="text-error">
                              <ErrorMessage name="contactNo" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput6"
                          >
                            <Form.Control
                              type={showPassword ? 'text' : 'password'}
                              name="password"
                              autoComplete="new-password"
                              value={values?.password}
                              onChange={e => {
                                handleChange('password')(e.target.value);
                              }}
                              placeholder="Password"
                            />
                            <span
                              className="eye_icon"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <i
                                className={
                                  showPassword
                                    ? 'fa-solid fa-eye-slash'
                                    : 'fa-solid fa-eye'
                                }
                              ></i>
                            </span>
                            <span className="text-error">
                              <ErrorMessage name="password" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput7"
                          >
                            <Form.Control
                              type={confirmPassword ? 'text' : 'password'}
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={e =>
                                handleChange('confirmPassword')(e.target.value)
                              }
                            />
                            <span
                              className="eye_icon"
                              onClick={() =>
                                setConfirmPassword(!confirmPassword)
                              }
                            >
                              <i
                                className={
                                  confirmPassword
                                    ? 'fa-solid fa-eye-slash'
                                    : 'fa-solid fa-eye'
                                }
                              ></i>
                            </span>
                            <span className="text-error">
                              <ErrorMessage name="confirmPassword" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput8"
                          >
                            <Select
                              aria-label="Default select example"
                              className="react_custom_select_Wrapper square"
                              value={values.country}
                              options={finalCountry}
                              onChange={async e => {
                                setFieldValue('country', e);
                                if (e?.value) {
                                  dispatch(
                                    getStateList({
                                      CountryID: parseInt(e.value),
                                    }),
                                  );
                                  setFieldValue('state', '');
                                  setFieldValue('city', '');
                                } else {
                                  handleChange('state')('');
                                }
                              }}
                              placeholder="Select Country"
                            />
                            <span className="text-error">
                              <ErrorMessage name="country" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput9"
                          >
                            <Select
                              aria-label="Default select example"
                              className="react_custom_select_Wrapper square"
                              value={values.state}
                              options={finalState}
                              onChange={async e => {
                                setFieldValue('state', e);
                                if (e?.value) {
                                  dispatch(
                                    getCityList({
                                      CountryID: values?.country?.value
                                        ? parseInt(values.country.value)
                                        : '',
                                      StateID: parseInt(e.value),
                                    }),
                                  );
                                  setFieldValue('city', '');
                                } else {
                                  handleChange('city')('');
                                }
                              }}
                              placeholder="Select State"
                            />
                            <span className="text-error">
                              <ErrorMessage name="state" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb25 form_group"
                            controlId="exampleForm.ControlInput10"
                          >
                            <Select
                              aria-label="Default select example"
                              className="react_custom_select_Wrapper square"
                              value={values.city}
                              options={finalCity}
                              onChange={e => setFieldValue('city', e)}
                              placeholder="Select City"
                            />
                            <span className="text-error">
                              <ErrorMessage name="city" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group
                            className="mb40 form_group input_checkbox d-flex"
                            controlId="exampleForm.ControlInput11"
                          >
                            <Form.Check
                              type="checkbox"
                              className="mr10"
                              id="terms_condition"
                              name="agree"
                              checked={values.agree}
                              readOnly
                              onClick={e => {
                                setFieldValue('agree', e.target.checked);
                              }}
                            />
                            <label htmlFor="terms_condition">
                              I accept <Link>terms & condition</Link>
                            </label>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          variant="primary"
                          type="submit"
                          className="rounded-pill btn_shadow large_padding mb25"
                          disabled={!values?.agree}
                        >
                          Sign Up
                        </Button>
                        <p className="m0">
                          Already have an account?{' '}
                          <Link to="/login">Log In</Link>
                        </p>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
export default memo(Signup);
