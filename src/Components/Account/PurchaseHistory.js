import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';
import CartProduct from '../../Assets/Images/cart-product.jpg';

export default function PurchaseHistory() {
  window.scrollTo(0, 0);
  return (
    <main>
      <section className="take_my_ordeR_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <h6>Purchase History</h6>
              <div className="order_light_box">
                <div className="diamond_cart_box">
                  <Row className="align-items-center">
                    <Col sm={6}>
                      <div className="diamond_product_info">
                        <div className="diamond_img_cart">
                          <img src={CartProduct} alt="" />
                        </div>
                        <div className="diamond_text_cart">
                          <p className="fs_14 m0 text_extra_light">
                            0.30 Carat - K - VS1
                          </p>
                          <h6 className="text_dark mb5">Good Cut- Round</h6>
                          <h5 className="m0 text_dark fs_14">
                            IGI Number
                            <span className="text_extra_light ml15">
                              4578325414
                            </span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="diamond_cart_total_wrap justify-content-end">
                        <div className="diamond_cart_total">
                          <h5 className="text_primary d-flex align-items-center justify-content-sm-end">
                            $350{' '}
                            <span className="text_dark fs_14 ml10">
                              18% below market
                            </span>
                          </h5>
                          <p className="m0 fs_16 text-sm-end">Quantity : 1</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="diamond_cart_box">
                  <Row className="align-items-center">
                    <Col sm={6}>
                      <div className="diamond_product_info">
                        <div className="diamond_img_cart">
                          <img src={CartProduct} alt="" />
                        </div>
                        <div className="diamond_text_cart">
                          <p className="fs_14 m0 text_extra_light">
                            0.30 Carat - K - VS1
                          </p>
                          <h6 className="text_dark mb5">Good Cut- Round</h6>
                          <h5 className="m0 text_dark fs_14">
                            IGI Number
                            <span className="text_extra_light ml15">
                              4578325414
                            </span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="diamond_cart_total_wrap justify-content-end">
                        <div className="diamond_cart_total">
                          <h5 className="text_primary d-flex align-items-center justify-content-sm-end">
                            $350{' '}
                            <span className="text_dark fs_14 ml10">
                              18% below market
                            </span>
                          </h5>
                          <p className="m0 fs_16 text-sm-end">Quantity : 1</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="order_light_box">
                <div className="diamond_cart_box">
                  <Row className="align-items-center">
                    <Col sm={6}>
                      <div className="diamond_product_info">
                        <div className="diamond_img_cart">
                          <img src={CartProduct} alt="" />
                        </div>
                        <div className="diamond_text_cart">
                          <p className="fs_14 m0 text_extra_light">
                            0.30 Carat - K - VS1
                          </p>
                          <h6 className="text_dark mb5">Good Cut- Round</h6>
                          <h5 className="m0 text_dark fs_14">
                            IGI Number
                            <span className="text_extra_light ml15">
                              4578325414
                            </span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="diamond_cart_total_wrap justify-content-end">
                        <div className="diamond_cart_total">
                          <h5 className="text_primary d-flex align-items-center justify-content-sm-end">
                            $350{' '}
                            <span className="text_dark fs_14 ml10">
                              18% below market
                            </span>
                          </h5>
                          <p className="m0 fs_16 text-sm-end">Quantity : 1</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="diamond_cart_box">
                  <Row className="align-items-center">
                    <Col sm={6}>
                      <div className="diamond_product_info">
                        <div className="diamond_img_cart">
                          <img src={CartProduct} alt="" />
                        </div>
                        <div className="diamond_text_cart">
                          <p className="fs_14 m0 text_extra_light">
                            0.30 Carat - K - VS1
                          </p>
                          <h6 className="text_dark mb5">Good Cut- Round</h6>
                          <h5 className="m0 text_dark fs_14">
                            IGI Number
                            <span className="text_extra_light ml15">
                              4578325414
                            </span>
                          </h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="diamond_cart_total_wrap justify-content-end">
                        <div className="diamond_cart_total">
                          <h5 className="text_primary d-flex align-items-center justify-content-sm-end">
                            $350{' '}
                            <span className="text_dark fs_14 ml10">
                              18% below market
                            </span>
                          </h5>
                          <p className="m0 fs_16 text-sm-end">Quantity : 1</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
