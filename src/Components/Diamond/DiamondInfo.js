import React, { useCallback, useEffect, useState } from 'react';
import CartIcon from '../../Assets/Images/cart.svg';
import HeartIcon from '../../Assets/Images/wishliat.svg';
import PhoneIcon from '../../Assets/Images/call-expert.svg';
import MessangerIcon from '../../Assets/Images/messanger.svg';
import availabilityIcon from '../../Assets/Images/check-availability.svg';
import WhatsappIcon from '../../Assets/Images/whatsapp.svg';
import CompareIcon from '../../Assets/Images/compare.svg';
import PlusIcon from '../../Assets/Images/plusicon.svg';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCartList,
  addToHoldList,
  addToWatchList,
  addToCompareList,
  setIsAddToCartList,
  setIsAddToWatchList,
  getWatchStockListCount,
} from 'Components/Redux/reducers/myAccount.slice';
import {
  getCartStockCount,
  sendDiamondDetailMail,
  getStockCopytoClipboardString,
} from 'Components/Redux/reducers/dashboard.slice';
import {
  addToCartListInLocal,
  addToWishListInLocalList,
  addToComapareListInLocalList,
} from 'Components/Redux/reducers/offlineList.slice';

export default function DiamondInfo({
  stoneNo,
  stoneId,
  diamondType,
  stockDetailDnaList,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector(({ auth }) => auth);
  const [whatsAppHref, setWhatsAppHref] = useState('#');
  const { isAddToCartList, isAddToWatchList } = useSelector(
    ({ myAccount }) => myAccount,
  );
  const handleShareToWhatsApp = useCallback(
    async e => {
      const { payload } = await dispatch(
        getStockCopytoClipboardString({
          UserID: userData?.UserID ? userData.UserID : 0,
          StoneNo: stoneNo,
        }),
      );
      if (payload?.data) {
        const message = encodeURIComponent(payload?.data);
        const phoneNumber = '+919998555772';
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
        setWhatsAppHref(whatsappLink);
      }
    },
    [dispatch, stoneNo, userData],
  );
  useEffect(() => {
    if (stoneNo) {
      handleShareToWhatsApp(stoneNo);
    }
  }, [stoneNo, handleShareToWhatsApp]);

  useEffect(() => {
    if (isAddToWatchList && userData?.UserID) {
      dispatch(getWatchStockListCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToWatchList(false));
    }
  }, [dispatch, userData, isAddToWatchList]);
  useEffect(() => {
    if (isAddToCartList && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartList(false));
    }
  }, [dispatch, isAddToCartList, userData]);
  const onAddToCartHandler = useCallback(() => {
    if (stoneId && diamondType) {
      if (userData?.UserID) {
        dispatch(
          addToCartList({
            StockIDs: stoneId,
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      } else {
        dispatch(
          addToCartListInLocal({
            diamondCartList: [{ ...stockDetailDnaList }],
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, diamondType, stoneId, stockDetailDnaList]);

  const onAddToHoldHandler = useCallback(() => {
    if (stoneId && diamondType) {
      if (userData?.UserID) {
        dispatch(
          addToHoldList({
            StockIDs: stoneId,
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      } else {
        navigate('/login');
      }
    }
  }, [dispatch, navigate, userData, diamondType, stoneId]);

  const onAddToWishHandler = useCallback(() => {
    if (stoneId && diamondType) {
      if (userData?.UserID) {
        dispatch(
          addToWatchList({
            StockIDs: stoneId,
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      } else {
        dispatch(
          addToWishListInLocalList({
            diamondWishList: [{ ...stockDetailDnaList, Is_Like: true }],
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, diamondType, stoneId, stockDetailDnaList]);

  const onAddToCompareHandler = useCallback(() => {
    if (stoneId && diamondType) {
      if (userData?.UserID) {
        dispatch(
          addToCompareList({
            StockIDs: stoneId,
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      } else {
        dispatch(
          addToComapareListInLocalList({
            diamondCompareList: [{ ...stockDetailDnaList }],
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, diamondType, stoneId, stockDetailDnaList]);

  const isMobile = window.innerWidth < 1199;
  return (
    <>
      <div className="diamond_detail_contemt_wrap">
        <Row className="align-items-center">
          <Col sm={9}>
            <h6 className="fs_18 mb0 fw_500">
              {stockDetailDnaList?.Weight
                ? `${stockDetailDnaList.Weight}  Carat, `
                : ''}
              {stockDetailDnaList?.Shape
                ? `${stockDetailDnaList.Shape}  Shape `
                : ''}
              Diamond
            </h6>
          </Col>
          <Col sm={3}>
            <div className="text-start text-sm-end mt0 mt10-xs">
              {stockDetailDnaList?.StockStatus && (
                <h6
                  className={
                    stockDetailDnaList.StockStatus === 'AVAILABLE'
                      ? 'mb0 fw_500 available'
                      : stockDetailDnaList.StockStatus === 'ONHOLD'
                      ? ' mb0 fw_500 on_hold'
                      : stockDetailDnaList.StockStatus === 'ONMEMO'
                      ? 'mb0 fw_500 on_memmo'
                      : ''
                  }
                >
                  {stockDetailDnaList.StockStatus}
                </h6>
              )}
            </div>
          </Col>
        </Row>
        <ul className="action_button_wrap d-flex flex-wrap align-items-center mt10 mb20">
          {window.location.pathname === '/choose-diamond-detail' ? (
            <>
              <li>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-pill px20 px10-xs btn_shadow"
                  onClick={() => navigate('/choose-your-setting')}
                >
                  <img src={PlusIcon} alt="" />
                  Choose This Diamond
                </Button>
              </li>
              <OverlayTrigger
                key="wishlist"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="AddtoWishlist">Add to Wishlist</Tooltip>
                  )
                }
              >
                <li>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-circle btn_round p0"
                    onClick={onAddToWishHandler}
                  >
                    <img src={HeartIcon} className="mr0" alt="" />
                  </Button>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key="compare"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="compare">Add to Compare</Tooltip>
                  )
                }
              >
                <li>
                  <Button
                    variant="outline-primary"
                    className="rounded-circle btn_round btn-sm p0"
                    onClick={onAddToCompareHandler}
                  >
                    <img src={CompareIcon} className="mr0" alt="" />
                  </Button>
                </li>
              </OverlayTrigger>
            </>
          ) : (
            <>
              <li>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-pill pl20 pr20 btn_shadow btn_cart"
                  onClick={onAddToCartHandler}
                >
                  <img src={CartIcon} className="white_img" alt="" />
                  Add To Cart
                </Button>
              </li>
              <li>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-pill pl20 pr20 btn_shadow btn_cart"
                  onClick={onAddToHoldHandler}
                >
                  <img src={availabilityIcon} className="white_img" alt="" />
                  Confirm Availability
                </Button>
              </li>
              <OverlayTrigger
                key="wishlist"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="AddtoWishlist">Add to Wishlist</Tooltip>
                  )
                }
              >
                <li>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-circle btn_round p0"
                    onClick={onAddToWishHandler}
                  >
                    <img src={HeartIcon} className="mr0" alt="" />
                  </Button>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key="compare"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="compare">Add to Compare</Tooltip>
                  )
                }
              >
                <li>
                  <Button
                    variant="outline-primary"
                    className="rounded-circle btn_round btn-sm p0"
                    onClick={onAddToCompareHandler}
                  >
                    <img src={CompareIcon} className="mr0" alt="" />
                  </Button>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key="whatsapp"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="ChatonWhatsapp">Chat on Whatsapp</Tooltip>
                  )
                }
              >
                <li>
                  <a
                    href={whatsAppHref}
                    className="btn btn-outline-primary rounded-circle btn_round btn-sm p0 "
                    target={whatsAppHref === '#' ? '_self' : '_blank'}
                    rel="noreferrer"
                  >
                    <img src={WhatsappIcon} className="mr0" alt="" />
                  </a>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key="Messanger"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="ChatonMessanger">Chat on Messanger</Tooltip>
                  )
                }
              >
                <li>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-circle btn_round p0"
                    onClick={() => {
                      if (stoneNo && diamondType) {
                        if (userData?.UserID && userData.Login_Name) {
                          dispatch(
                            sendDiamondDetailMail({
                              StoneNumber: stoneNo,
                              UserID: userData?.UserID,
                              UserName: userData.Login_Name,
                              Diamond_Type: diamondType,
                            }),
                          );
                        } else {
                          navigate('/login');
                        }
                      }
                    }}
                  >
                    <img src={MessangerIcon} className="mr0" alt="" />
                  </Button>
                </li>
              </OverlayTrigger>
              <OverlayTrigger
                key="expert"
                placement="bottom"
                overlay={
                  isMobile ? (
                    <></>
                  ) : (
                    <Tooltip id="callToExpert">Call to Expert</Tooltip>
                  )
                }
              >
                <li>
                  <a
                    href="tel:+91 85119 88977"
                    className="btn btn-outline-primary rounded-circle btn_round btn-sm p0 "
                  >
                    <img src={PhoneIcon} className="mr0" alt="" />
                  </a>
                </li>
              </OverlayTrigger>
            </>
          )}

          {/* <OverlayTrigger
            key="availability"
            placement="bottom"
            overlay={
              <Tooltip id="ConfirmAvailability">Confirm Availability</Tooltip>
            }
          >
            <li>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-circle btn_round p0"
              >
                <img src={availabilityIcon} className="mr0" alt="" />
              </Button>
            </li>
          </OverlayTrigger> */}
        </ul>
        <div className="detail_top_wrapper">
          <ul>
            <li>
              Lab
              <span>
                {stockDetailDnaList?.Lab ? `${stockDetailDnaList.Lab}` : '-'}
              </span>
            </li>
            <li>
              Certificate No <span>{stockDetailDnaList?.Stone_No}</span>
            </li>
            <li>
              Price / Rate <span>-</span>
            </li>
            <li>
              Amount
              <span>
                $
                {stockDetailDnaList?.Cost_Amt ? stockDetailDnaList.Cost_Amt : 0}
              </span>
            </li>
          </ul>
        </div>
        <div className="stone_detail_wrapper">
          <h4>Grading Details</h4>
          <div className="stone_detail_wrapper_inner">
            <Row className="g-2">
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>Shape</td>
                        <td>
                          {stockDetailDnaList?.Shape
                            ? `${stockDetailDnaList.Shape}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Carat</td>
                        <td>
                          {stockDetailDnaList?.Weight
                            ? `${stockDetailDnaList.Weight}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>
                          {stockDetailDnaList?.Color
                            ? `${stockDetailDnaList.Color}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Clarity</td>
                        <td>
                          {stockDetailDnaList?.Clarity
                            ? `${stockDetailDnaList.Clarity}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>Cut</td>
                        <td>
                          {stockDetailDnaList?.Cut
                            ? `${stockDetailDnaList.Cut}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Polish</td>
                        <td>
                          {stockDetailDnaList?.Polish
                            ? `${stockDetailDnaList.Polish}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Symmetry</td>
                        <td>
                          {stockDetailDnaList?.Symm
                            ? `${stockDetailDnaList.Symm}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Fluorescence</td>
                        <td>
                          {stockDetailDnaList?.FlrIntens
                            ? `${stockDetailDnaList.FlrIntens}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="stone_detail_wrapper">
          <h4>Measurement Mapping</h4>
          <div className="stone_detail_wrapper_inner">
            <Row className="g-2">
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>Measurements</td>
                        <td>
                          {stockDetailDnaList?.Measurement
                            ? `${stockDetailDnaList.Measurement}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Table %</td>
                        <td>
                          {stockDetailDnaList?.Table_Diameter_Per
                            ? `${stockDetailDnaList.Table_Diameter_Per}%`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Depth %</td>
                        <td>
                          {stockDetailDnaList?.Total_Depth_Per
                            ? `${stockDetailDnaList.Total_Depth_Per}%`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>CA-CH</td>
                        <td>
                          {stockDetailDnaList?.CrownAngle
                            ? `${stockDetailDnaList.CrownAngle}°`
                            : '-'}
                          -{' '}
                          {stockDetailDnaList?.CrownHeight
                            ? `${stockDetailDnaList.CrownHeight}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>PA-PH</td>
                        <td>
                          {stockDetailDnaList?.PavillionAngle
                            ? `${stockDetailDnaList.PavillionAngle}°`
                            : '-'}{' '}
                          -{' '}
                          {stockDetailDnaList?.PavillionHeight
                            ? `${stockDetailDnaList.PavillionHeight}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Key To Symbol</td>
                        <td>
                          {stockDetailDnaList?.KeyToSymbols
                            ? `${stockDetailDnaList.KeyToSymbols}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>Star/LH</td>
                        <td>
                          {stockDetailDnaList?.StarLength
                            ? `${stockDetailDnaList.StarLength}°`
                            : '-'}
                          /
                          {stockDetailDnaList?.LowerHalve
                            ? `${stockDetailDnaList.LowerHalve}°`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Girdle</td>
                        <td>
                          {stockDetailDnaList?.GirdleName
                            ? `${stockDetailDnaList.GirdleName}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Girdle Condition</td>
                        <td>
                          {stockDetailDnaList?.GirdleCon
                            ? `${stockDetailDnaList.GirdleCon}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Culet</td>
                        <td>
                          {stockDetailDnaList?.CuletSize
                            ? `${stockDetailDnaList.CuletSize}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Girdle %</td>
                        <td>
                          {stockDetailDnaList?.Girdle_Per
                            ? `${stockDetailDnaList.Girdle_Per}%`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Report Comment</td>
                        <td>
                          {stockDetailDnaList?.Lab_Report_Comment
                            ? `${stockDetailDnaList.Lab_Report_Comment}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="stone_detail_wrapper">
          <h4>Inclusion Details</h4>
          <div className="stone_detail_wrapper_inner">
            <Row className="g-2">
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>Tinge</td>
                        <td>
                          {stockDetailDnaList?.Tinge
                            ? `${stockDetailDnaList.Tinge}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Milky</td>
                        <td>
                          {stockDetailDnaList?.Milkey
                            ? `${stockDetailDnaList.Milkey}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Eyeclean</td>
                        <td>
                          {stockDetailDnaList?.Eyeclean
                            ? `${stockDetailDnaList.Eyeclean}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>BIC</td>
                        <td>
                          {stockDetailDnaList?.BIC
                            ? `${stockDetailDnaList.BIC}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>H&A</td>
                        <td>
                          {stockDetailDnaList?.HnA
                            ? `${stockDetailDnaList.HnA}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col md={6}>
                <div className="additional_detail_box">
                  <table>
                    <tbody>
                      <tr>
                        <td>BIS</td>
                        <td>
                          {stockDetailDnaList?.BIS
                            ? `${stockDetailDnaList.BIS}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>WIC</td>
                        <td>
                          {stockDetailDnaList?.WIC
                            ? `${stockDetailDnaList.WIC}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>WIS</td>
                        <td>
                          {stockDetailDnaList?.WIS
                            ? `${stockDetailDnaList.WIS}`
                            : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Growth Type</td>
                        <td>
                          {stockDetailDnaList?.CVD_HPHT
                            ? `${stockDetailDnaList.CVD_HPHT}`
                            : '-'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
