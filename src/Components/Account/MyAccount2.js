import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import {
  changePassword,
  editMyProfileDetail,
  getMyProfileDetail,
  setIsPasswordChanged,
  setIsProfileEdit,
} from '../Redux/reducers/myAccount.slice';
import * as Yup from 'yup';

export default function MyAccount2() {
  window.scrollTo(0, 0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const myProfileEditRef = useRef(null);
  const changePassEditRef = useRef(null);
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const {
    myProfileDetailList,
    isProfileEdit,
    isPasswordChanged,
    editMyProfileLoading,
  } = useSelector(({ myAccount }) => myAccount);

  const initialValues = {
    loginName: '',
    fName: '',
    lName: '',
    contactNo: '',
    contactNo2: '',
    emailID: '',
    emailID2: '',
    companyName: '',
    shppingAddress: '',
  };
  const passwordValue = {
    Login_Pass: '',
    Login_Pass_New: '',
    Login_Pass_Confirm: '',
  };
  const [myProfileData, setMyProfileData] = useState(initialValues);
  useEffect(() => {
    if (userData?.UserID) {
      dispatch(getMyProfileDetail({ UserID: userData?.UserID }));
    }
  }, [dispatch, userData]);
  useEffect(() => {
    if (Object.keys(myProfileDetailList)?.length > 0) {
      const name =
        myProfileDetailList?.Full_Name &&
        myProfileDetailList?.Full_Name?.split(' ');
      setMyProfileData({
        loginName: myProfileDetailList?.Login_Name,
        fName: name[0] ? name[0] : '',
        lName: name[1] ? name[1] : '',
        contactNo: myProfileDetailList?.Contact_No,
        contactNo2: myProfileDetailList?.Contact_No2
          ? myProfileDetailList.Contact_No2
          : '',
        emailID: myProfileDetailList?.Email_ID,
        emailID2: myProfileDetailList?.Email_ID2
          ? myProfileDetailList.Email_ID2
          : '',
        companyName: myProfileDetailList?.Company_Name,
        shppingAddress: myProfileDetailList?.Address_1,
      });
    }
  }, [myProfileDetailList]);
  useEffect(() => {
    if (isProfileEdit) {
      dispatch(setIsProfileEdit(false));
      myProfileEditRef && myProfileEditRef.current.resetForm();
    }
  }, [dispatch, isProfileEdit]);
  useEffect(() => {
    if (isPasswordChanged) {
      dispatch(setIsPasswordChanged(false));
      changePassEditRef && changePassEditRef.current.resetForm();
    }
  }, [dispatch, isPasswordChanged]);

  const SubmitSchma = Yup.object().shape({
    fName: Yup.string().required('Required'),
    lName: Yup.string().required('Required'),
    contactNo: Yup.string()
      .required('Required')
      .matches(/^[0-9]{10}$/, 'Mobile number must contain 10 digits'),
    contactNo2: Yup.string()
      .required('Required')
      .matches(/^[0-9]{10}$/, 'Mobile number must contain 10 digits'),
    companyName: Yup.string().required('Required'),
    emailID: Yup.string().email('Invalid email').required('Required'),
    emailID2: Yup.string().email('Invalid email').required('Required'),
    shppingAddress: Yup.string().required('Required'),
  });
  const PasswordSubmitSchma = Yup.object().shape({
    Login_Pass: Yup.string().required('Required'),
    Login_Pass_New: Yup.string()
      .required('Required')
      .min(5, 'Your password is too short.')
      .matches(/^[a-zA-Z0-9@#!$*^&]/, 'Password can length must ne 9.'),
    Login_Pass_Confirm: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('Login_Pass_New')], 'Passwords must match'),
  });
  return (
    <main>
      <section className="my_account_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <Formik
                enableReinitialize={true}
                innerRef={myProfileEditRef}
                initialValues={myProfileData}
                validationSchema={SubmitSchma}
                onSubmit={values => {
                  dispatch(
                    editMyProfileDetail({
                      ...myProfileDetailList,
                      Full_Name: values.fName + ' ' + values.lName || '',
                      FName: values.fName || '',
                      LName: values.lName || '',
                      Email_ID: values.emailID || '',
                      Contact_No: values.contactNo || '',
                      Company_Name: values.companyName || '',
                      Contact_No2: values.contactNo2 || '',
                      Email_ID2: values.emailID2 || '',
                      Address_1: values.shppingAddress || '',
                    }),
                  );
                }}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="edit_profile_wrap mb10">
                      <h6 className="mb30 mb15-xs">Edit Profile</h6>
                      <Row>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Login Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="loginName"
                              value={values.loginName}
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Company Name"
                              name="companyName"
                              value={values.companyName}
                              onChange={e =>
                                handleChange('companyName')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="companyName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter First Name"
                              name="fName"
                              value={values.fName}
                              onChange={e =>
                                handleChange('fName')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="fName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Last Name"
                              name="lName"
                              value={values.lName}
                              onChange={e =>
                                handleChange('lName')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="lName" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter Phone Number"
                              name="contactNo"
                              onKeyDown={event => {
                                if (
                                  event.key === '-' ||
                                  event.key === '+' ||
                                  event.key === '*' ||
                                  event.key === '/' ||
                                  event.key === '.'
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              value={values.contactNo}
                              onChange={e =>
                                handleChange('contactNo')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="contactNo" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              name="emailID"
                              placeholder="Enter the Email"
                              value={values.emailID}
                              onChange={e =>
                                handleChange('emailID')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="emailID" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Alternative Phone Number</Form.Label>
                            <Form.Control
                              type="number"
                              onKeyDown={event => {
                                if (
                                  event.key === '-' ||
                                  event.key === '+' ||
                                  event.key === '*' ||
                                  event.key === '/' ||
                                  event.key === '.'
                                ) {
                                  event.preventDefault();
                                }
                              }}
                              placeholder="Enter Alternative Phone Number"
                              name="contactNo2"
                              value={values.contactNo2}
                              onChange={e =>
                                handleChange('contactNo2')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="contactNo2" />
                            </span>
                          </Form.Group>
                        </Col>

                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>
                              Add Alternative Email address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter Email address"
                              name="emailID2"
                              value={values.emailID2}
                              onChange={e =>
                                handleChange('emailID2')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="emailID2" />
                            </span>
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group className="form_group custom_form_group mb25 mb15-sm">
                            <Form.Label>Shipping Address</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter Address Here..."
                              value={values.shppingAddress}
                              name="shppingAddress"
                              onChange={e =>
                                handleChange('shppingAddress')(e.target.value)
                              }
                            />
                            <span className="text-error">
                              <ErrorMessage name="shppingAddress" />
                            </span>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        className="rounded btn_shadow"
                        type="submit"
                        name="profileSave"
                        disabled={editMyProfileLoading}
                      >
                        Save Profile
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
              <Formik
                initialValues={passwordValue}
                innerRef={changePassEditRef}
                validationSchema={PasswordSubmitSchma}
                onSubmit={values => {
                  dispatch(
                    changePassword({
                      ...values,
                      Cust_ID: userData?.UserID,
                      WebStore_ID: userData?.WebStore_ID,
                    }),
                  );
                }}
              >
                {({ handleSubmit, handleChange, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="change_passward_wrap mb10">
                      <h6 className="mb30 mb15-xs">Change Passward</h6>
                      <Row>
                        <Col sm={6}>
                          <Form.Group
                            className="custom_form_group mb25 mb15-sm"
                            id="password"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Old Passward</Form.Label>
                            <Form.Control
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              name="Login_Pass"
                              value={values.Login_Pass}
                              onChange={e => {
                                handleChange(e.target.name)(e.target.value);
                              }}
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
                              <ErrorMessage name="Login_Pass" />
                            </span>
                          </Form.Group>
                          <Form.Group
                            className="custom_form_group mb25 mb15-sm"
                            id="password"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              name="Login_Pass_New"
                              value={values.Login_Pass_New}
                              onChange={e => {
                                handleChange(e.target.name)(e.target.value);
                              }}
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
                              <ErrorMessage name="Login_Pass_New" />
                            </span>
                          </Form.Group>
                          <Form.Group
                            className="mb25 mb15-sm custom_form_group"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                              type={confirmPassword ? 'text' : 'password'}
                              placeholder="Confirm Password"
                              name="Login_Pass_Confirm"
                              value={values.Login_Pass_Confirm}
                              onChange={e => {
                                handleChange(e.target.name)(e.target.value);
                              }}
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
                          </Form.Group>
                          <span className="text-error">
                            <ErrorMessage name="Login_Pass_Confirm" />
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        className="rounded btn_shadow"
                        type="submit"
                        name="passwordSave"
                      >
                        Save Password
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
