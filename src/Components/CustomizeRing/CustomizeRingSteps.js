import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DiamondIcon from '../../Assets/Images/diamond-icon.svg';
import RignIcon from '../../Assets/Images/ring.svg';
import RingWithDiamondIcon from '../../Assets/Images/ring-with-diamond.svg';

export default function CustomizeRingSteps() {
  return (
    <Container>
      <Row className="g-2 g-sm-4">
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/choose-diamond' ||
              window.location.pathname === '/choose-diamond-detail' ||
              window.location.pathname === '/choose-your-setting' ||
              window.location.pathname === '/choose-your-setting-detail' ||
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <div className="step_text">
              <span>1</span>
              <div className="step_price_detail">
                <h3>
                  Choose Your Diamond
                  <span className="mobile_text">Diamond</span>
                </h3>
                {(window.location.pathname === '/choose-your-setting' ||
                  window.location.pathname === '/choose-your-setting-detail' ||
                  window.location.pathname === '/view-completed') && (
                  <div className="selected_item_wrap">
                    <h6>
                      <span className="product_title">
                        6.11 Carat - D - IF ID Cut - ROUND -
                      </span>
                      <span className="product_price">$157.00</span>
                    </h6>
                    <ul>
                      <li>
                        <Link to="/">View</Link>
                      </li>
                      <li>
                        <Link to="/">Change</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="step_icon">
              <img src={DiamondIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/choose-your-setting' ||
              window.location.pathname === '/choose-your-setting-detail' ||
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <div className="step_text">
              <span>2</span>
              <div className="step_price_detail">
                <h3>
                  Choose Your Setting
                  <span className="mobile_text">Setting</span>
                </h3>
                {window.location.pathname === '/view-completed' && (
                  <div className="selected_item_wrap">
                    <h6>
                      <span className="product_title">
                        0.09ct 10kt white gold studs earring DEF/ VVS VS/ HPHT
                        10K WHITE Gold (1.85 Ct.) -
                      </span>
                      <span className="product_price">$145.00</span>
                    </h6>
                    <ul>
                      <li>
                        <Link to="/">View</Link>
                      </li>
                      <li>
                        <Link to="/">Change</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="step_icon">
              <img src={RignIcon} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className={
              window.location.pathname === '/view-completed'
                ? 'customize_ring_step active'
                : 'customize_ring_step'
            }
          >
            <div className="step_text">
              <span>3</span>
              <div className="step_price_detail">
                <h3>
                  View Completed
                  <span className="mobile_text">Preview</span>
                </h3>
                {window.location.pathname === '/view-completed' && (
                  <div className="selected_item_wrap">
                    <h6>
                      <span className="product_title">
                        0.09ct 10kt white gold studs earring DEF/ VVS VS/ HPHT
                        10K WHITE Gold (1.85 Ct.) -
                      </span>
                      <span className="product_price">$302.00</span>
                    </h6>
                    <ul>
                      <li>
                        <Link to="/">View</Link>
                      </li>
                      <li>
                        <Link to="/">Change</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="step_icon">
              <img src={RingWithDiamondIcon} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
