import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import JewelleryImgSlider from '../Jewellery/JewelleryImgSlider';
import SimilarJewellery from '../Jewellery/SimilarJewellery';
import CustomizeRingSteps from './CustomizeRingSteps';
import CartIcon from '../../Assets/Images/cart.svg';
import Star from '../../Assets/Images/star.svg';
import ShieldIcon from '../../Assets/Images/shield-check.svg';
import TruckIcon from '../../Assets/Images/truck.svg';
import SelectedRing from '../../Assets/Images/selected-ring.svg';
import SelectedDiamond from '../../Assets/Images/selected-diamond.svg';
import { Link, useNavigate } from 'react-router-dom';
import ItemReview from '../Jewellery/ItemReview';

export default function ViewCompleted() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50">
        <CustomizeRingSteps />
      </section>
      <section className="jewellety_detail_wrapper pb80">
        <Container>
          <Row>
            <Col md={4}>
              <JewelleryImgSlider />
            </Col>
            <Col md={8}>
              <div className="jewellery_price_wrapper">
                <h5 className="fs_20 mb20 text_dark">
                  0.09ct 10kt white gold studs earring DEF/ VVS VS/ HPHT 10K
                  WHITE Gold (1.85 Ct.) With 6.11 Carat - D - IF ID Cut - ROUND
                  Diamond
                </h5>
                {/* <div className="rating d-flex mb20">
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                </div> */}
                <h4 className="fw_700 mb10 text_primary">$2,499.00</h4>
                <h6 className="text-uppercase text_light mb25">
                  1.01 Total Carat weight
                </h6>
                <div className="selected_diamond_wrap">
                  <div className="selected_diamond_in d-flex mb25">
                    <div className="select_img">
                      <img src={SelectedRing} alt="" />
                    </div>
                    <div className="selected_diamond_info">
                      <p className="mb10 fw_300 fs_16">
                        14K White Gold 2mm Comfort Fit Solitaire Engagement Ring
                      </p>
                      <h6 className="fs_16">
                        $1130.00 <Link to="/">Change</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="selected_diamond_in d-flex mb25">
                    <div className="select_img">
                      <img src={SelectedDiamond} alt="" />
                    </div>
                    <div className="selected_diamond_info">
                      <p className="mb10 fw_300 fs_16">
                        1.01 Carat G-SI1 Excellent Cut Round Diamond
                      </p>
                      <h6 className="fs_16">
                        $2430.00 <Link to="/">Change</Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="ring_size mb25">
                  <h6 className="fs_16 mb15 text_light">Ring Size</h6>
                  <Form.Group
                    controlId="exampleForm.ControlInput1"
                    className="form_group"
                  >
                    <Form.Select aria-label="Default select example">
                      <option value="1">Select Size</option>
                      <option value="2">6</option>
                      <option value="3">6.5</option>
                      <option value="4">7</option>
                      <option value="5" selected>
                        7.5
                      </option>
                      <option value="6">8</option>
                      <option value="7">8.5</option>
                      <option value="8">9</option>
                      <option value="9">9.5</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <ul className="action_button_wrap d-flex align-items-center mt25">
                  <li className="mr10">
                    <Button
                      variant="primary"
                      className="rounded-pill pl20 pr20 btn_shadow"
                      onClick={() => navigate('/cart')}
                    >
                      <img src={CartIcon} className="white_img" alt="" />
                      Add To Cart
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="shiping_info_wrap">
                <ul>
                  <li>
                    <img src={ShieldIcon} alt="" /> Risk-Free Retail
                  </li>
                  <li>
                    <img src={TruckIcon} alt="" />
                    14K White Gold 2mm Comfort Fit Solitaire Engagement Ring
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="product_detail_tab_wrapper pb100">
        <Container>
          <div className="tab_design_two">
            <Tabs defaultActiveKey="SettingDetails" id="product_detail">
              <Tab eventKey="SettingDetails" title="Setting Details">
                <div class="stone_detail_wrapper">
                  <h4>Setting Information</h4>
                  <div class="stone_detail_wrapper_inner">
                    <div class="g-2 row">
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Sku Number</td>
                                <td>14</td>
                              </tr>
                              <tr>
                                <td>Ring Designs</td>
                                <td>Solitaire</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Metal</td>
                                <td>10K WHITE Gold</td>
                              </tr>
                              <tr>
                                <td>Ring Styles</td>
                                <td>Plain Band</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="DiamondDetails" title="Diamond Details">
                <div class="stone_detail_wrapper">
                  <h4>Grading Details</h4>
                  <div class="stone_detail_wrapper_inner">
                    <div class="g-2 row">
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Shape</td>
                                <td>ROUND</td>
                              </tr>
                              <tr>
                                <td>Carat</td>
                                <td>6.11</td>
                              </tr>
                              <tr>
                                <td>Color</td>
                                <td>D</td>
                              </tr>
                              <tr>
                                <td>Clarity</td>
                                <td>IF</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Cut</td>
                                <td>ID</td>
                              </tr>
                              <tr>
                                <td>Polish</td>
                                <td>EX</td>
                              </tr>
                              <tr>
                                <td>Symmetry</td>
                                <td>EX</td>
                              </tr>
                              <tr>
                                <td>Fluorescence</td>
                                <td>NONE</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stone_detail_wrapper">
                  <h4>Measurement Mapping</h4>
                  <div class="stone_detail_wrapper_inner">
                    <div class="g-2 row">
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Measurements</td>
                                <td>11.72 - 11.80 * 7.16</td>
                              </tr>
                              <tr>
                                <td>Table %</td>
                                <td>58.00%</td>
                              </tr>
                              <tr>
                                <td>Depth %</td>
                                <td>60.80%</td>
                              </tr>
                              <tr>
                                <td>CA-CH</td>
                                <td>0.00°- 0.00</td>
                              </tr>
                              <tr>
                                <td>PA-PH</td>
                                <td>0.00° - 0.00</td>
                              </tr>
                              <tr>
                                <td>Key To Symbol</td>
                                <td>TYPE 2</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Star/LH</td>
                                <td>0.00°/0.00°</td>
                              </tr>
                              <tr>
                                <td>Girdle</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Girdle Condition</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Culet</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Girdle %</td>
                                <td>0.00%</td>
                              </tr>
                              <tr>
                                <td>Report Comment</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="stone_detail_wrapper">
                  <h4>Inclusion Details</h4>
                  <div class="stone_detail_wrapper_inner">
                    <div class="g-2 row">
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>Tinge</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Milky</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Eyeclean</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>BIC</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>H&amp;A</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="additional_detail_box">
                          <table>
                            <tbody>
                              <tr>
                                <td>BIS</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>WIC</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>WIS</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td>Growth Type</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>

      {/* <section className="review_wrapper pb80">
        <ItemReview />
      </section>

      <section className="similar_stone_wrapper pb100">
        <SimilarJewellery />
      </section> */}
    </main>
  );
}
