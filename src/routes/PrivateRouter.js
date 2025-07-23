import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getSessionData } from '../Helper/AuthTokenHelper';
import { setIsLogin } from '../Components/Redux/reducers/auth.slice';

export default function PrivateRouter({ children }) {
  const dispatch = useDispatch();
  if (!getSessionData()) {
    dispatch(setIsLogin(false));
    return <Navigate to="/login" replace={true} />;
  }
  return <div>{children}</div>;
}
