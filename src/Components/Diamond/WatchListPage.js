import React, { useCallback, useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import holdDiamondIcon from '../../Assets/Images/hold-diamond-icon.svg';
import CartIcon from '../../Assets/Images/cart.svg';
import WatchListTableData from './WatchListTableData';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import recordsNotFound from '../../Assets/Images/records-not-found.jpg';
import trashBlueIcon from '../../Assets/Images/trash-blue.svg';
import {
  addToCartListInLocal,
  setDiamondType,
  removFromWishListInLocal,
} from 'Components/Redux/reducers/offlineList.slice';
import {
  setIsAddToCartList,
  getWatchStockList,
  addToHoldList,
  addToCartList,
  setIsAddToWatchList,
  getWatchStockListCount,
  removeToWatchList,
} from 'Components/Redux/reducers/myAccount.slice';
import { getCartStockCount } from 'Components/Redux/reducers/dashboard.slice';

export default function WatchListPage() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const {
    watchStockList,
    isAddToCartList,
    watchStockLoading,
    isAddToWatchList,
  } = useSelector(({ myAccount }) => myAccount);
  const { wishDiamondList, diamondType } = useSelector(
    ({ offlineList }) => offlineList,
  );
  const [currentData, setCurrentData] = useState(new Map());
  const [selectedDiamond, setSelectedDiamond] = useState([]);
  useEffect(() => {
    if (isAddToCartList && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartList(false));
    }
  }, [dispatch, isAddToCartList, userData]);

  useEffect(() => {
    if (userData?.UserID) {
      dispatch(
        getWatchStockList({
          userId: userData?.UserID,
          diamondType: diamondType,
        }),
      );
    }
  }, [dispatch, userData]);

  const setDataHandler = useCallback(
    data => {
      let map = new Map();
      let list = data || [];
      list = _.map(list, o => _.extend({ isCheck: false }, o));
      list.forEach(x => map.set(x?.Stock_ID, x));
      setCurrentData(map);
    },
    [setCurrentData],
  );

  useEffect(() => {
    if (userData?.UserID) {
      setDataHandler(watchStockList);
    } else {
      if (diamondType === 'LABGROWN') {
        setDataHandler(wishDiamondList.labGrownDiamond);
      } else if (diamondType === 'NATURAL') {
        setDataHandler(wishDiamondList.naturalDiamond);
      }
    }
  }, [userData, watchStockList, wishDiamondList, setDataHandler]);

  useEffect(() => {
    if (isAddToWatchList && userData?.UserID) {
      dispatch(getWatchStockListCount({ UserID: userData?.UserID }));
      dispatch(
        getWatchStockList({
          userId: userData?.UserID,
          diamondType: diamondType,
        }),
      );
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
            getWatchStockList({
              diamondType: type,
              userId: userData?.UserID,
            }),
          );
        }
        if (type === 'LABGROWN') {
          setDataHandler(wishDiamondList.labGrownDiamond);
        } else if (type === 'NATURAL') {
          setDataHandler(wishDiamondList.naturalDiamond);
        }
        dispatch(setDiamondType(type));
      }
    },
    [dispatch, diamondType, userData, setDataHandler, wishDiamondList],
  );

  const onAddToHoldHandler = useCallback(() => {
    if (selectedDiamond?.length > 0) {
      let cartList = selectedDiamond?.map(item => item.Stock_ID);
      dispatch(
        addToHoldList({
          StockIDs: cartList.toString(),
          CustomerID: userData?.UserID,
          diamondType: diamondType,
        }),
      );
    }
  }, [dispatch, selectedDiamond, userData, diamondType]);

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
      } else {
        dispatch(
          addToCartListInLocal({
            diamondCartList: selectedDiamond,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, selectedDiamond, userData, diamondType]);

  const onRemoveFromWishHandler = useCallback(async () => {
    if (selectedDiamond?.length > 0) {
      let wishList = selectedDiamond?.map(item => item.Stock_ID);
      if (userData?.UserID) {
        dispatch(
          removeToWatchList({
            StockIDs: wishList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
        /* if (payload?.data?.IsSuccess) {
          let initialCurrentData = [...currentData.values()] || [];
          initialCurrentData = initialCurrentData.filter(
            item1 => !wishList.some(item2 => item1.Stock_ID === item2),
          );
          let map = new Map();
          initialCurrentData.forEach(x => map.set(x?.Stock_ID, x));
          setCurrentData(map);
        } */
      } else {
        const selectedDiamondData = selectedDiamond?.map(item => {
          return { ...item, Is_Like: false };
        });
        dispatch(
          removFromWishListInLocal({
            diamondWishList: selectedDiamondData,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, userData, diamondType, selectedDiamond]);
  return (
    <main>
      <div className="watch_list_wrap  pb40">
        <h2 className="mb25 h3 text-center">My Watchlist</h2>
        <Container>
          <>
            <div className="search_inner_wrap justify-content-between">
              <div className="check_input_wraper scroll_wrapper">
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
              </div>
              {currentData?.size > 0 && (
                <div className="watchlist_action_wrapper">
                  <ul className="action_button_wrap d-flex align-items-center justify-content-end">
                    <li className="ml0">
                      <Button
                        variant="outline-primary"
                        className="rounded-pill small_padding"
                        onClick={onAddToCartHandler}
                        disabled={selectedDiamond?.length === 0}
                      >
                        <img src={CartIcon} alt="" /> Add to cart
                      </Button>
                    </li>
                    {Object.keys(userData)?.length > 0 && (
                      <li className="ml10">
                        <Button
                          variant="outline-primary"
                          className="rounded-pill small_padding"
                          onClick={onAddToHoldHandler}
                          disabled={selectedDiamond?.length === 0}
                        >
                          <img src={holdDiamondIcon} alt="" /> Add to hold
                        </Button>
                      </li>
                    )}
                    <li className="ml10">
                      <Button
                        variant="outline-primary"
                        className="rounded-pill small_padding"
                        onClick={onRemoveFromWishHandler}
                        disabled={selectedDiamond?.length === 0}
                      >
                        <img src={trashBlueIcon} alt="" /> Remove from Watchlist
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="product_list_wrapper">
              {currentData?.size > 0 && (
                <>
                  <div className="table-responsive">
                    <WatchListTableData
                      currentData={
                        currentData?.size > 0 ? [...currentData.values()] : []
                      }
                      onSelectDiamond={onSelectDiamond}
                      diamondType={diamondType}
                    />
                  </div>
                </>
              )}
              {watchStockLoading && (
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
                              count={8}
                              style={{ width: '100%', marginBottom: '10px' }}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {!watchStockLoading && currentData?.size === 0 && (
                <h6 className="d-flex justify-content-center flex-column align-items-center data_not_found">
                  <img src={recordsNotFound} alt="Records Not Found" />
                  <h4>Data Not Found</h4>
                </h6>
              )}
            </div>
          </>
        </Container>
      </div>
    </main>
  );
}
