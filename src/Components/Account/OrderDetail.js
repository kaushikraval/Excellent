import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import arrowIcon from '../../Assets/Images/accordian-arrow.svg';
import { Link } from 'react-router-dom';
import { getUrlParam } from 'Helper/CommonHelper';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrderDetail } from 'Components/Redux/reducers/order.slice';
import Loader from 'Components/Global/Loader';
import _ from 'lodash';

export default function OrderDetail() {
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const { myOrderDetail, myOrderDetailList, myOrderListLoading } = useSelector(
    ({ order }) => order,
  );
  const [myOrderDetailData, setMyOrderDetailData] = useState({});
  const [myOrderDetailListData, setMyOrderDetailListData] = useState([]);
  useEffect(() => {
    const orderId = getUrlParam(window.location.search, 'orderId');
    if (orderId && userData) {
      const obj = {
        Web_OrderId: orderId,
        UserID: userData.UserID,
        StoneNos: '',
        FromDate: '',
        ToDate: '',
        OrderType: '',
        Sort: '',
      };
      dispatch(getMyOrderDetail(obj));
    }
  }, [dispatch, userData]);
  useEffect(() => {
    if (Object.keys(myOrderDetail)?.length > 0) {
      setMyOrderDetailData(myOrderDetail);
    }
  }, [myOrderDetail]);
  useEffect(() => {
    if (myOrderDetailList?.length > 0) {
      let newMyOrderDetailList = [...myOrderDetailList];
      newMyOrderDetailList = _.map(newMyOrderDetailList, o =>
        _.extend(
          {
            diamondType:
              o.DiamondType === 'NATURAL DIAMOND' ? 'NATURAL' : 'LABGROWN',
          },
          o,
        ),
      );
      setMyOrderDetailListData(newMyOrderDetailList);
    }
  }, [myOrderDetailList]);
  return (
    <main>
      <section className="my_orders_wrapper pb100 pb50-md pb80-lg">
        {/* {myOrderListLoading && <Loader />} */}
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <div className="order_detail_wrap">
                <div className="go_to_btn_wrap mb-4">
                  <Link to="/my-orders" className="d-flex align-items-center">
                    <span className="back_arrow">
                      <img src={arrowIcon} alt="arrowIcon" />
                    </span>
                    <h6 className="ms-2 m-0 d-inline-block">
                      Go back to Order List
                    </h6>
                  </Link>
                </div>
                <div className="summary_wrap">
                  <ul>
                    <li>
                      <label>OrderNO.</label>
                      <span>
                        {myOrderDetailData?.OrderNo
                          ? myOrderDetailData.OrderNo
                          : '-'}
                      </span>
                    </li>
                    <li>
                      <label>Total Ct</label>
                      <span>
                        {myOrderDetailData?.TotalWeight
                          ? `${myOrderDetailData.TotalWeight} Cts`
                          : '-'}
                      </span>
                    </li>
                    <li>
                      <label>Average Price/Ct</label>
                      <span>
                        {myOrderDetailData?.AvgPriceCrt
                          ? myOrderDetailData.AvgPriceCrt
                          : '-'}
                      </span>
                    </li>
                    <li>
                      <label>Avg Disc%</label>
                      <span>
                        {myOrderDetailData?.AvgDisc
                          ? `${myOrderDetailData.AvgDisc}%`
                          : '-'}
                      </span>
                    </li>
                    <li>
                      <label>Total Amount</label>
                      <span>
                        {myOrderDetailData?.Total_Amt
                          ? `${myOrderDetailData.Total_Amt}%`
                          : '-'}
                      </span>
                    </li>
                    <li>
                      <label>Order Status</label>
                      <span
                        className="badge"
                        style={{
                          background: myOrderDetailData._StatusColorCode
                            ? myOrderDetailData._StatusColorCode
                            : '',
                        }}
                      >
                        {myOrderDetailData?.WebOrder_Status
                          ? myOrderDetailData.WebOrder_Status
                          : '-'}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="order_light_box mt10 mb20">
                  <div className="diamond_cart_box">
                    <Row className="align-items-center">
                      {myOrderDetailListData?.map(item => {
                        return (
                          <>
                            <Col xl={6} sm={7}>
                              <div className="diamond_product_info">
                                <div className="diamond_img_cart">
                                  <Link
                                    to={`/diamond-detail?stoneNo=${item.Stone_No}&diamondType=${item?.diamondType}`}
                                    target="_blank"
                                  >
                                    <img
                                      src={
                                        item.Stone_Img_url
                                          ? item.Stone_Img_url
                                          : NoImageAvailable
                                      }
                                      className={
                                        item.Stone_Img_url ? '' : 'no_img'
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="diamond_text_cart">
                                  <h6 className="fs_14 m0">
                                    {item?.Stone_No ? `#${item.Stone_No}` : ''}{' '}
                                    {item?.Weight ? `${item.Weight} Cts,` : ''}{' '}
                                    {item?.Shape ? `${item.Shape}` : ''}{' '}
                                    {item?.Lab ? item.Lab : ''}{' '}
                                    {item?.Lab_Report_No
                                      ? item.Lab_Report_No
                                      : ''}{' '}
                                  </h6>
                                  <ul>
                                    <li>
                                      {item?.Color ? `${item.Color}, ` : ''}{' '}
                                      {item?.Clarity ? `${item.Clarity} ` : ''}{' '}
                                      {item?.Cut ? `${item.Cut}` : ''}
                                      {item?.Polish ? `-${item.Polish}` : ''}
                                      {item?.Symm ? `-${item.Symm}` : ''}{' '}
                                      {item?.FlrIntens
                                        ? `${item.FlrIntens}`
                                        : ''}
                                    </li>
                                    <li>Meas : {item?.Measurement}</li>
                                    <li>{item?.DiamondType}</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col xl={3} sm={2}>
                              <div className="diamond_cart_total_wrap">
                                <div className="diamond_cart_total order_status_wrap">
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
                                </div>
                              </div>
                            </Col>
                            <Col xl={3} sm={3}>
                              <div className="diamond_cart_total_wrap justify-content-end">
                                <div className="diamond_cart_total pe-0">
                                  <h5 className="text_primary d-flex align-items-center justify-content-sm-end">
                                    {item?.Cost_Amt}
                                  </h5>
                                </div>
                              </div>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </div>
                </div>
                <div className="order_address_wrap border_bottom mb-4">
                  <Row>
                    <Col md={6}>
                      <h6>Billing Address</h6>
                      <p className="fs_14">
                        {myOrderDetailData.Billing_First_Name}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.Billing_AddressLine1}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.Billing_AddressLine2}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.BillingCountry}
                      </p>
                      <p className="fs_14">{myOrderDetailData.BillingState}</p>
                      <p className="fs_14">{myOrderDetailData.BillingCity}</p>
                      <p className="fs_14">
                        {myOrderDetailData.Billing_Zip_Code}
                      </p>
                    </Col>
                    <Col md={6}>
                      <h6>Shipping Address</h6>
                      <p className="fs_14">
                        {myOrderDetailData.Shipping_First_Name}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.Shipping_AddressLine1}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.Shipping_AddressLine2}
                      </p>
                      <p className="fs_14">
                        {myOrderDetailData.shippingCountry}
                      </p>
                      <p className="fs_14">{myOrderDetailData.shippingState}</p>
                      <p className="fs_14">{myOrderDetailData.ShippingCity}</p>
                      <p className="fs_14">
                        {myOrderDetailData.Shipping_Zip_Code}
                      </p>
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
