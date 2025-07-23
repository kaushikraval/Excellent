import React from 'react';
import { Link } from 'react-router-dom';

export default function PolicySidebar() {
  window.scrollTo(0, 0);
  return (
    <div className="sidebar_wrapper education_sidebar_wrapper">
      <ul>
        <li
          className={
            window.location.pathname === '/return-and-refund-policy'
              ? 'active'
              : ''
          }
        >
          <Link to="/return-and-refund-policy">Return & Refund Policy</Link>
        </li>
        <li
          className={
            window.location.pathname === '/privacy-policy' ? 'active' : ''
          }
        >
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li
          className={
            window.location.pathname === '/shipping-policy' ? 'active' : ''
          }
        >
          <Link to="/shipping-policy">Shipping Policy</Link>
        </li>
        <li
          className={
            window.location.pathname === '/terms-and-conditions' ? 'active' : ''
          }
        >
          <Link to="/terms-and-conditions">Terms & Condition</Link>
        </li>
      </ul>
    </div>
  );
}
