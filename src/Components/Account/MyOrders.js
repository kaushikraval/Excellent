import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import ViewCart from '../../Assets/Images/view-cart.svg';
import AccountSidebar from './AccountSidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getMyOrderList } from 'Components/Redux/reducers/order.slice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function MyOrders() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const { myOrderList, myOrderListLoading } = useSelector(({ order }) => order);

  const [myOrderFilter, setMyOrderFilter] = useState({
    stoneNos: '',
    fromDate: '',
    toDate: '',
    orderType: '',
    sort: 'desc',
    diamondType: '',
  });
  useEffect(() => {
    if (userData?.UserID) {
      dispatch(getMyOrderList({ ...myOrderFilter, UserID: userData?.UserID }));
    }
  }, [dispatch, userData]);

  const orderTypeOption = [
    { label: 'Pending', value: 'pending' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Approved', value: 'approved' },
    { label: 'Approved (RFP)', value: 'approved (rfp)' },
    { label: 'Delivered', value: 'delivered' },
  ];
  const handleSubmit = useCallback(() => {
    dispatch(
      getMyOrderList({
        ...myOrderFilter,
        UserID: userData?.UserID,
        orderType: myOrderFilter.orderType ? myOrderFilter.orderType.value : '',
      }),
    );
  }, [dispatch, myOrderFilter, userData]);
  return (
    <main>
      <section className="my_orders_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <div className="my_order_wrap">
                <h6 class="mb30 mb15-xs">My Order</h6>
                <div className="my_order_top mb-4">
                  <ul>
                    <li>
                      <label className="mb5">From</label>
                      <Form.Control
                        type="date"
                        placeholder="From"
                        name="fromDate"
                        value={myOrderFilter.fromDate}
                        max={
                          myOrderFilter.toDate
                            ? myOrderFilter.toDate
                            : new Date().toISOString().split('T')[0]
                        }
                        onChange={e => {
                          if (e.target.value) {
                            setMyOrderFilter({
                              ...myOrderFilter,
                              fromDate: e.target.value,
                            });
                          }
                        }}
                      />
                    </li>
                    <li>
                      <label className="mb5">To</label>
                      <Form.Control
                        type="date"
                        placeholder="To"
                        name="toDate"
                        value={myOrderFilter.toDate}
                        min={myOrderFilter.fromDate && myOrderFilter.fromDate}
                        max={new Date().toISOString().split('T')[0]}
                        onChange={e => {
                          if (e.target.value) {
                            setMyOrderFilter({
                              ...myOrderFilter,
                              toDate: e.target.value,
                            });
                          }
                        }}
                      />
                    </li>
                    <li className="custom_status">
                      <label>Status</label>
                      <Select
                        aria-label="Default select example"
                        className="react_custom_select_Wrapper square"
                        value={myOrderFilter.orderType}
                        onChange={e => {
                          setMyOrderFilter({
                            ...myOrderFilter,
                            orderType: e,
                          });
                        }}
                        options={orderTypeOption}
                        placeholder="Status"
                      />
                    </li>
                    <li>
                      <label className="mb5">Order No.</label>
                      <Form.Control
                        type="text"
                        name="orderNo"
                        value={myOrderFilter.stoneNos}
                        onChange={e =>
                          setMyOrderFilter({
                            ...myOrderFilter,
                            stoneNos: e.target.value,
                          })
                        }
                      />
                    </li>
                    <li>
                      <Button
                        variant="primary"
                        size="sm"
                        className="rounded-pill btn_shadow"
                        onClick={handleSubmit}
                      >
                        Search
                      </Button>
                    </li>
                  </ul>
                </div>
                {myOrderListLoading && (
                  <div className="product_list_wrapper my_order_table_wrap">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Date</th>
                            <th>Pcs</th>
                            <th className="text-end">Total Ct</th>
                            <th className="text-end">Avg Disc</th>
                            <th className="text-end">Avg Price/Ct</th>
                            <th className="text-end">Total Amt</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={9} style={{ paddingRight: '10px' }}>
                              <div className="skelleton_Wrapper">
                                <Skeleton
                                  height={60}
                                  count={6}
                                  style={{
                                    width: '100%',
                                    marginBottom: '10px',
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {myOrderList?.length > 0 && (
                  <div className="product_list_wrapper my_order_table_wrap">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Order No.</th>
                            <th>Date</th>
                            <th>Pcs</th>
                            <th className="text-end">Total Ct</th>
                            <th className="text-end">Avg Disc</th>
                            <th className="text-end">Avg Price/Ct</th>
                            <th className="text-end">Total Amt</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {myOrderList?.map(item => {
                            return (
                              <tr>
                                <td>{item?.OrderNo ? item.OrderNo : '-'}</td>
                                <td>
                                  {item?.OrderDate ? item.OrderDate : '-'}
                                </td>
                                <td>
                                  {item?.Total_Pcs ? item.Total_Pcs : '-'}
                                </td>
                                <td className="text-end">
                                  {item?.TotalWeight
                                    ? `${item.TotalWeight} crt`
                                    : '-'}
                                </td>
                                <td className="text-end">
                                  {item?.AvgDisc ? `${item.AvgDisc} %` : '-'}
                                </td>
                                <td className="text-end">
                                  {item?.AvgPriceCrt ? item.AvgPriceCrt : '-'}
                                </td>
                                <td className="text-end">
                                  {item?.Total_Amt ? item.Total_Amt : '-'}
                                </td>
                                <td className="text-center">
                                  <span
                                    className="badge"
                                    style={{
                                      background: item._StatusColorCode
                                        ? item._StatusColorCode
                                        : '',
                                    }}
                                  >
                                    {item?.WebOrder_Status
                                      ? item.WebOrder_Status
                                      : '-'}
                                  </span>
                                </td>
                                <td className="text-center view_img">
                                  <Link
                                    to={`/order-detail?orderId=${item.WebOrder_ID}`}
                                  >
                                    <img src={ViewCart} alt="ViewCart" />
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              {/* <div className="my_order_wrap">
                <h6 className="mb30 mb15-xs">My Orders</h6>
                <div className="tab_design_two">
                  <Tabs defaultActiveKey="HoldStones" id="my_order">
                    <Tab eventKey="HoldStones" title="Hold Stones">
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col xxl={4} sm={6}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col xxl={8} sm={6}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="ConfirmStones" title="Confirm Stones">
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab
                      eventKey="NotAvailableStones"
                      title="Not Available Stones"
                    >
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="diamond_cart_box">
                        <Row className="align-items-center">
                          <Col sm={4}>
                            <div className="diamond_product_info">
                              <div className="diamond_img_cart">
                                <img src={CartProduct} alt="" />
                              </div>
                              <div className="diamond_text_cart">
                                <p className="fs_14 m0 text_extra_light">
                                  0.30 Carat - K - VS1
                                </p>
                                <h6 className="text_dark mb5">
                                  Good Cut- Round
                                </h6>
                                <h5 className="m0 text_dark fs_14">
                                  IGI Number
                                  <span className="text_extra_light ml15">
                                    4578325414
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </Col>
                          <Col sm={8}>
                            <div className="diamond_cart_total_wrap">
                              <div className="diamond_cart_total">
                                <h5 className="text_primary d-flex align-items-center">
                                  $350{' '}
                                  <span className="text_dark fs_14 ml10">
                                    18% below market
                                  </span>
                                </h5>
                                <p className="m0 fs_16">Quantity : 1</p>
                              </div>
                              <Button variant="light" className="delete_btn">
                                <img src={Trash} alt="" />
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
