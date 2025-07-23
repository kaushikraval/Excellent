import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NoImageAvailable from '../Assets/Images/notfound2.png';
import recordsNotFound from '../Assets/Images/records-not-found.jpg';
import Trash from '../Assets/Images/trash.svg';
import 'react-loading-skeleton/dist/skeleton.css';
import _ from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  confirmOrder,
  getCartStockCount,
  setIsOrderConfirm,
} from './Redux/reducers/dashboard.slice';
import {
  removeFromCartListInLocal,
  removeFromCartListInLocalJewelery,
} from './Redux/reducers/offlineList.slice';
import Skeleton from 'react-loading-skeleton';
import {
  getJewelleryCartList,
  removeJewelleryFromCart,
} from './Redux/reducers/jewellery.slice';

export default function ShoppingCart() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector(({ auth }) => auth);
  const { cartDiamondList, jewelleryCartListData } = useSelector(
    ({ offlineList }) => offlineList,
  );
  const {
    jewelleryCartList,
    jewelleryDetailLoader,
    isAddToCartJewellery,
    jewelleryCartListDetail,
  } = useSelector(({ jewellery }) => jewellery);
  const { isOrderConfirm, confirmOrderLoading } = useSelector(
    ({ dashboard }) => dashboard,
  );

  useEffect(() => {
    if (userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(getJewelleryCartList(userData.UserID));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (isAddToCartJewellery && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(getJewelleryCartList(userData.UserID));
    }
  }, [dispatch, isAddToCartJewellery, userData]);

  useEffect(() => {
    if (isOrderConfirm && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(getJewelleryCartList(userData.UserID));
      dispatch(setIsOrderConfirm(false));
    }
  }, [dispatch, isOrderConfirm, userData]);

  const cartDetailObj = useMemo(() => {
    if (userData?.UserID) {
      let diamondPriceTotal = 0;
      let jewelleryPriceTotal = 0;
      jewelleryCartList?.forEach(item => {
        if (item?.Stock_ID) {
          diamondPriceTotal += item.Cost_Amt;
        }
        if (item?.Jewellery_Stock_ID) {
          jewelleryPriceTotal += item.Sale_Rate;
        }
      });
      return {
        totalAmtCostInCart: diamondPriceTotal + jewelleryPriceTotal,
        totalItemInCart: jewelleryCartList,
        diamondPriceTotal,
        jewelleryPriceTotal,
      };
    } else {
      let diamondPriceTotal = 0;
      let jewelleryPriceTotal = 0;
      let naturalDiamondArr =
        cartDiamondList?.naturalDiamond?.length > 0
          ? [...cartDiamondList?.naturalDiamond]
          : [];
      let labGrownDiamondArr =
        cartDiamondList?.labGrownDiamond?.length > 0
          ? [...cartDiamondList?.labGrownDiamond]
          : [];
      let jewelleryArr =
        jewelleryCartListData?.length > 0 ? [...jewelleryCartListData] : [];
      jewelleryArr = _.map(jewelleryArr, o =>
        _.extend(
          {
            JWL_Image_URL: o.Img_Video_Url,
            JWL_DM_Shape: o.Shape,
            Gold_Type: o.Metal_PurityColor,
            Jewell_Cart_ID: 1,
            Jewellery_Stock_ID: o.Stock_ID,
          },
          o,
        ),
      );
      naturalDiamondArr = _.map(naturalDiamondArr, o =>
        _.extend({ Diamond_Type: 'NATURAL', Cart_ID: 1 }, o),
      );
      labGrownDiamondArr = _.map(labGrownDiamondArr, o =>
        _.extend({ Diamond_Type: 'LABGROWN', Cart_ID: 1 }, o),
      );
      [...naturalDiamondArr, ...labGrownDiamondArr]?.forEach(item => {
        diamondPriceTotal += item.Cost_Amt;
      });
      jewelleryArr?.forEach(item => {
        jewelleryPriceTotal += item.Sale_Rate;
      });
      const totalItemCart = [
        ...naturalDiamondArr,
        ...labGrownDiamondArr,
        ...jewelleryArr,
      ];
      return {
        totalAmtCostInCart: diamondPriceTotal + jewelleryPriceTotal,
        totalItemInCart: totalItemCart,
        jewelleryPriceTotal,
        diamondPriceTotal,
      };
    }
  }, [
    userData?.UserID,
    cartDiamondList,
    jewelleryCartList,
    jewelleryCartListData,
  ]);
  const deleteFromCartHandler = useCallback(
    (item, type) => {
      if (userData?.UserID) {
        dispatch(
          removeJewelleryFromCart({
            cartIDs: item.Cart_ID,
            Jewellery_Stock_ID: item?.Jewell_Cart_ID,
            Type: '',
            UserID: userData?.UserID,
          }),
        );
      } else {
        if (type === 'diamond') {
          dispatch(
            removeFromCartListInLocal({
              diamondCartObj: item,
              diamondType: item?.Diamond_Type,
            }),
          );
        } else {
          dispatch(removeFromCartListInLocalJewelery({ jeweleryObj: item }));
        }
      }
    },
    [dispatch, userData],
  );
  const onClickPlaceOrder = useCallback(() => {
    if (cartDetailObj?.totalItemInCart?.length > 0) {
      if (userData?.UserID) {
        let diamondId = [];
        let jewelleryId = [];
        cartDetailObj?.totalItemInCart?.forEach(item => {
          if (item?.Cart_ID) {
            diamondId.push(item.Cart_ID);
          } else if (item?.Jewell_Cart_ID) {
            jewelleryId.push(item.Jewell_Cart_ID);
          }
        });
        const object = {
          Customer_ID: userData.UserID,
          Stone_CartID: diamondId?.length > 0 ? diamondId.toString() : '',
          Jewellery_CartID:
            jewelleryId?.length > 0 ? jewelleryId.toString() : '',
          DeviceType: 'web',
          Billing_AddressLine1:
            jewelleryCartListDetail?.Billing_AddressLine1 || '',
          Billing_AddressLine2:
            jewelleryCartListDetail?.Billing_AddressLine2 || '',
          Billing_City: jewelleryCartListDetail?.Billing_City || 0,
          Billing_State: jewelleryCartListDetail?.Billing_State || 0,
          Billing_Country_ID: jewelleryCartListDetail?.Billing_Country_ID || 0,
          Billing_Zip_Code: jewelleryCartListDetail?.Billing_Country_ID || '',
          Shipping_AddressLine1:
            jewelleryCartListDetail?.Shipping_AddressLine1 || '',
          Shipping_AddressLine2:
            jewelleryCartListDetail?.Shipping_AddressLine2 || '',
          Shipping_City: jewelleryCartListDetail?.Shipping_City || 0,
          Shipping_State: jewelleryCartListDetail?.Shipping_State || 0,
          Shipping_Country_ID:
            jewelleryCartListDetail?.Shipping_Country_ID || 0,
          Shipping_Zip_Code: jewelleryCartListDetail?.Shipping_Zip_Code || '',
          Diamond_Type: '',
        };
        dispatch(confirmOrder(object));
      } else {
        navigate('/login');
      }
    }
  }, [dispatch, userData, cartDetailObj, navigate, jewelleryCartListDetail]);

  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);
  const loadingCartDetail = useMemo(() => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(
        <div className="diamond_cart_box" key={`skeleton_${i}`}>
          <Skeleton height={100} style={{ width: '100%' }} />
        </div>,
      );
    }
    return arr;
  }, []);

  return (
    <main>
      <section className="cart_wrapper  pb90 pt0 pb80-lg pb50-md">
        <Container>
          <h2 className="mb25 h3 text-center">My Cart</h2>
          {(jewelleryDetailLoader ||
            cartDetailObj?.totalItemInCart?.length > 0) && (
            <Row>
              <Col xxl={6} xl={7}>
                <div className="cart_product_list_wrapper">
                  <div className="diamond_cart_items">
                    {jewelleryDetailLoader && loadingCartDetail}
                    {cartDetailObj?.totalItemInCart?.map((item, index) => {
                      return item?.Cart_ID ? (
                        <div
                          className="diamond_cart_box"
                          key={`diamond_${index}`}
                        >
                          <h6>
                            {item?.Weight ? `${item?.Weight}-Carat ` : ''}
                            {item?.Color ? `${item?.Color} Color ` : ''}
                            {item?.Clarity ? `${item?.Clarity} Clarity ` : ''}
                            {item?.Shape ? `${item.Shape} ` : ''}
                            {item?.Diamond_Type
                              ? `${item.Diamond_Type} Diamond`
                              : ''}
                          </h6>
                          <Row className="align-items-center">
                            <Col sm={8}>
                              <div className="diamond_product_info">
                                <div className="diamond_img_cart">
                                  <Link
                                    to={`/diamond-detail?stoneNo=${item.Stone_No}&diamondType=${item?.Diamond_Type}`}
                                    target="_blank"
                                  >
                                    <img
                                      src={
                                        item?.Stone_Img_url
                                          ? item?.Stone_Img_url
                                          : NoImageAvailable
                                      }
                                      alt="CartImg"
                                      onError={handleImageError}
                                    />
                                  </Link>
                                </div>
                                <div className="diamond_text_cart">
                                  <p className="fs_14 m0 text_extra_light">
                                    SKU :{' '}
                                    {item?.Stone_No
                                      ? ` ${item?.Stone_No}`
                                      : ' -'}
                                  </p>
                                  <p className="fs_14 m0 text_extra_light">
                                    Diamond Report Number :{' '}
                                    {item?.Lab ? item.Lab : ''}
                                    {item?.Lab_Report_No
                                      ? ` ${item?.Lab_Report_No}`
                                      : '-'}
                                  </p>
                                  <p className="fs_14 m0 text_extra_light">
                                    Cut : {item?.Cut ? item.Cut : ''}
                                  </p>
                                  <p className="fs_14 m0 text_extra_light">
                                    Color : {item?.Color ? item.Color : ''}
                                  </p>
                                  <p className="fs_14 m0 text_extra_light">
                                    Clarity :{' '}
                                    {item?.Clarity ? item.Clarity : ''}
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className="diamond_cart_total_wrap">
                                <div className="diamond_cart_total">
                                  <h5 className="text_primary d-flex align-items-center">
                                    ${item?.Cost_Amt ? item?.Cost_Amt : '0'}
                                  </h5>
                                </div>
                                <Button
                                  variant="light"
                                  className="delete_btn"
                                  onClick={() =>
                                    deleteFromCartHandler(item, 'diamond')
                                  }
                                >
                                  <img src={Trash} alt="Trash" />
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ) : item?.Jewell_Cart_ID ? (
                        <div
                          className="jewelary_cart_box"
                          key={`jewellery_${index}`}
                        >
                          <h6>
                            {item?.Jewellery_Name ? item.Jewellery_Name : ''}
                          </h6>
                          <Row className="align-items-center">
                            <Col sm={8}>
                              <div className="jewellery_product_info d-flex align-items-start align-items-sm-center">
                                <div className="jewellery_img_cart">
                                  <Link
                                    to={`/jewellery-detail?stockId=${item.Jewellery_Stock_ID}`}
                                    target="_blank"
                                  >
                                    <img
                                      src={
                                        item?.JWL_Image_URL
                                          ? item?.JWL_Image_URL
                                          : NoImageAvailable
                                      }
                                      alt="JewelleryImg"
                                      onError={handleImageError}
                                    />
                                  </Link>
                                </div>
                                <div className="jewellery_text_cart pl15">
                                  <p className="fs_14 mb5 text_extra_light">
                                    SKU:{' '}
                                    {item?.Jewellery_No
                                      ? item.Jewellery_No
                                      : ''}
                                  </p>
                                  <p className="fs_14 mb5 text_extra_light">
                                    {item?.Type ? item.Type : ''} Diamond Cut:{' '}
                                    {item?.JWL_DM_Shape
                                      ? item.JWL_DM_Shape
                                      : ''}
                                  </p>
                                  <p className="fs_14 mb5 text_extra_light">
                                    {item?.Type ? item.Type : ''} Material:{' '}
                                    {item?.Gold_Type
                                      ? `${item.Gold_Type} Gold`
                                      : ''}
                                  </p>
                                  <p className="fs_14 mb5 text_extra_light">
                                    Qty : 1
                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className="jewellery_cart_total_wrap">
                                <div className="jewellery_cart_total">
                                  <h5 className="text_primary d-flex align-items-center">
                                    <span className="text_primary fs_22">
                                      ${item?.Sale_Rate ? item?.Sale_Rate : '0'}
                                    </span>
                                  </h5>
                                </div>
                                <Button
                                  variant="light"
                                  className="delete_btn"
                                  onClick={() =>
                                    deleteFromCartHandler(item, 'jewellery')
                                  }
                                >
                                  <img src={Trash} alt="Trash" />
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ) : (
                        ''
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col xxl={6} xl={5} className="border_left">
                <div className="cart_total_wrapper">
                  {jewelleryDetailLoader && (
                    <div className="diamond_cart_box">
                      <Skeleton height={150} style={{ width: '100%' }} />
                    </div>
                  )}
                  {cartDetailObj?.totalItemInCart?.length > 0 && (
                    <>
                      <div className="subTotal_wrapper bg_light mb25">
                        <div className="subTotal_inner p25">
                          <h2 className="h5">Product Info</h2>
                          <ul>
                            <li>
                              Diamond :
                              <span>${cartDetailObj.diamondPriceTotal}</span>
                            </li>
                            <li>
                              Jewellery :
                              <span>${cartDetailObj.jewelleryPriceTotal}</span>
                            </li>
                            <hr />
                            <li>
                              Subtotal :
                              <span>{cartDetailObj?.totalAmtCostInCart}</span>
                            </li>
                            <li>
                              Shipping (Standerd)
                              <span>
                                $
                                {jewelleryCartListDetail?.ShippingAmt
                                  ? jewelleryCartListDetail.ShippingAmt
                                  : 0}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="total_wrapper p25">
                          <ul>
                            <li className="fs_16 fw_600">
                              Total Cost
                              <span className="fs_22">
                                ${cartDetailObj?.totalAmtCostInCart}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        className="rounded-pill btn_shadow w-100"
                        onClick={onClickPlaceOrder}
                        disabled={confirmOrderLoading}
                      >
                        Place Order
                      </Button>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          )}
          {!jewelleryDetailLoader &&
            cartDetailObj?.totalItemInCart?.length === 0 && (
              <div className="empty_cart">
                <h6 className="d-flex justify-content-center flex-column align-items-center data_not_found">
                  <img src={recordsNotFound} alt="Records Not Found" />
                  <h4>Your cart is empty!</h4>
                </h6>
              </div>
            )}
        </Container>
      </section>
    </main>
  );
}
