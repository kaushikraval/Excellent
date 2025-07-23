import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loader from '../Components/Global/Loader';
import {
  getLoginInfo,
  setIsLogin,
} from '../Components/Redux/reducers/auth.slice';
import { getSessionData } from '../Helper/AuthTokenHelper';
import { checkIsEmpty } from '../Helper/CommonHelper';
import Routes from './../routes/index';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let sessionData = getSessionData();
    if (!checkIsEmpty(sessionData)) {
      dispatch(setIsLogin(true));
      dispatch(getLoginInfo(sessionData));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {/* <Helmet
        titleTemplate="%s - Excellent Corporation"
        defaultTitle="Excellent Corporation"
        htmlAttributes={{ lang: i18n.language }}
      > */}
        <meta name="description" content="A React Excellent Corporation" />
        {/* </Helmet> */}
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}
