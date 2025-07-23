import React from 'react';
import LogoIcon from '../../Assets/Images/logo-icon.svg';

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader_inner">
        <img src={LogoIcon} alt="" />
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
