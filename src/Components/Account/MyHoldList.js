import React, { useCallback, useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import AccountSidebar from './AccountSidebar';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  addToCartList,
  addToCompareList,
  getMyHoldStockList,
  getWatchStockListCount,
  removeFromHold,
  setIsAddToCartList,
  setIsAddToWatchList,
  setIsRemoveFromHold,
} from '../Redux/reducers/myAccount.slice';
import CartIcon from '../../Assets/Images/cart.svg';
import CompareIcon from '../../Assets/Images/compare.svg';
import recordsNotFound from '../../Assets/Images/records-not-found.jpg';
import WatchListTableData from 'Components/Diamond/WatchListTableData';
import { setDiamondType } from 'Components/Redux/reducers/offlineList.slice';
import trashBlueIcon from '../../Assets/Images/trash-blue.svg';
import { getCartStockCount } from 'Components/Redux/reducers/dashboard.slice';

export default function MyHoldList() {
  window.scrollTo(0, 0);
  const [currentData, setCurrentData] = useState(new Map());
  const [selectedDiamond, setSelectedDiamond] = useState([]);
  const dispatch = useDispatch();
  const {
    myHoldStockList,
    myHoldStockListLoading,
    isAddToCartList,
    isAddToWatchList,
    isRemoveFromHold,
  } = useSelector(({ myAccount }) => myAccount);
  const { userData } = useSelector(({ auth }) => auth);
  const { diamondType } = useSelector(({ offlineList }) => offlineList);

  useEffect(() => {
    if (userData?.UserID) {
      dispatch(
        getMyHoldStockList({
          UserID: userData?.UserID,
          diamondType: diamondType,
        }),
      );
    }
  }, [dispatch, userData]);
  useEffect(() => {
    if (isRemoveFromHold && userData?.UserID) {
      dispatch(
        getMyHoldStockList({
          UserID: userData?.UserID,
          diamondType: diamondType,
        }),
      );
      dispatch(setIsRemoveFromHold(false));
    }
  }, [dispatch, isRemoveFromHold]);

  useEffect(() => {
    let map = new Map();
    if (myHoldStockList?.length > 0) {
      let list = [...myHoldStockList];
      list = _.map(list, o => _.extend({ isCheck: false }, o));
      list.forEach(x => map.set(x?.Stock_ID, x));
    }
    setCurrentData(map);
  }, [myHoldStockList]);

  useEffect(() => {
    if (isAddToCartList && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartList(false));
    }
  }, [dispatch, isAddToCartList, userData]);

  useEffect(() => {
    if (isAddToWatchList && userData?.UserID) {
      dispatch(getWatchStockListCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToWatchList(false));
    }
  }, [dispatch, userData, isAddToWatchList]);

  const onSelectDiamond = useCallback(
    row => {
      const newCurrentData = new Map(currentData);
      newCurrentData.set(row.Stock_ID, {
        ...row,
        isCheck: !row.isCheck,
      });
      const newSelectedCurrentData = _.filter(
        [...newCurrentData.values()],
        item => {
          if (item.isCheck) {
            return item;
          }
        },
      );
      setCurrentData(newCurrentData);
      setSelectedDiamond(newSelectedCurrentData);
    },
    [currentData],
  );

  const onChangeDiamondType = useCallback(
    type => {
      if (diamondType !== type) {
        if (userData?.UserID) {
          dispatch(
            getMyHoldStockList({
              diamondType: type,
              UserID: userData?.UserID,
            }),
          );
        }
        dispatch(setDiamondType(type));
      }
    },
    [dispatch, diamondType, userData],
  );

  const onAddToCartHandler = useCallback(() => {
    if (selectedDiamond?.length > 0) {
      let cartList = selectedDiamond?.map(item => item.Stock_ID);
      if (userData?.UserID) {
        dispatch(
          addToCartList({
            StockIDs: cartList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, selectedDiamond, userData, diamondType]);

  const onAddToCompareHandler = useCallback(() => {
    if (selectedDiamond?.length > 0) {
      if (userData?.UserID) {
        let holdList = selectedDiamond?.map(item => item.Stock_ID);
        dispatch(
          addToCompareList({
            StockIDs: holdList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, selectedDiamond, diamondType]);

  const onRemoveFromHoldHandler = useCallback(() => {
    if (selectedDiamond?.length > 0) {
      if (userData?.UserID) {
        let holdList = selectedDiamond?.map(item => item.Stock_ID);
        dispatch(
          removeFromHold({
            StockIDs: holdList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, selectedDiamond, diamondType]);

  return (
    <main>
      <section className="take_my_ordeR_wrapper pb100 pb50-md pb80-lg">
        <Container>
          <Row>
            <Col xxl={2} lg={3}>
              <AccountSidebar />
            </Col>
            <Col xxl={10} lg={9}>
              <h6>My Hold List</h6>
              <div className="check_input_wraper scroll_wrapper mb20 d-flex align-items-center justify-content-between">
                <ul>
                  <li>
                    <div className="checkbox_wrapper radio_wrapper">
                      <Form.Check
                        type="radio"
                        name="labGrownDiamond"
                        id="LabGrownDiamond"
                        readOnly
                        label="Lab Grown Diamond"
                        checked={diamondType === 'LABGROWN'}
                        onClick={() => onChangeDiamondType('LABGROWN')}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="checkbox_wrapper radio_wrapper">
                      <Form.Check
                        type="radio"
                        name="labGrownDiamond"
                        id="NaturalDiamond"
                        readOnly
                        label="Natural Diamond"
                        checked={diamondType === 'NATURAL'}
                        onClick={() => onChangeDiamondType('NATURAL')}
                      />
                    </div>
                  </li>
                </ul>
                {currentData?.size > 0 && (
                  <div className="check_input_wraper ">
                    <ul>
                      <li>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill small_padding"
                          disabled={selectedDiamond?.length === 0}
                          onClick={onAddToCartHandler}
                        >
                          <img src={CartIcon} alt="CartIcon" /> Add to cart
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill small_padding"
                          disabled={selectedDiamond?.length === 0}
                          onClick={onAddToCompareHandler}
                        >
                          <img src={CompareIcon} alt="CompareIcon" /> Add to
                          compare
                        </Button>
                      </li>
                      <li>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill small_padding"
                          disabled={selectedDiamond?.length === 0}
                          onClick={onRemoveFromHoldHandler}
                        >
                          <img src={trashBlueIcon} alt="CompareIcon" /> Remove
                          from hold
                        </Button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="product_list_wrapper">
                {currentData?.size > 0 && (
                  <div className="table-responsive">
                    <WatchListTableData
                      currentData={
                        currentData?.size > 0 ? [...currentData.values()] : []
                      }
                      onSelectDiamond={onSelectDiamond}
                      diamondType={diamondType}
                    />
                  </div>
                )}
                {myHoldStockListLoading && (
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th>Video/Image</th>
                          <th>Shape</th>
                          <th>Size</th>
                          <th>Color</th>
                          <th>Clarity</th>
                          <th>Cut</th>
                          <th>Pol</th>
                          <th>Sym</th>
                          <th>Fluor</th>
                          <th>Lab</th>
                          <th>Certificate No</th>
                          <th>Disc</th>
                          <th>Price</th>
                          <th>Measurement</th>
                          <th>Depth</th>
                          <th>Table</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={19} style={{ paddingRight: '10px' }}>
                            <div className="skelleton_Wrapper">
                              <Skeleton
                                height={60}
                                count={6}
                                style={{ width: '100%', marginBottom: '10px' }}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {!myHoldStockListLoading && currentData?.size === 0 && (
                  <h6 className="d-flex justify-content-center flex-column align-items-center data_not_found">
                    <img src={recordsNotFound} alt="Records Not Found" />
                    <h4>Data Not Found</h4>
                  </h6>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
