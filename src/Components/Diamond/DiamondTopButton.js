import React, { memo, useCallback, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Grid from '../../Assets/Images/grid.svg';
import List from '../../Assets/Images/list.svg';
import CartIcon from '../../Assets/Images/cart.svg';
import holdDiamondIcon from '../../Assets/Images/hold-diamond-icon.svg';
import HeartIcon from '../../Assets/Images/wishliat.svg';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import {
  addToCartList,
  addToHoldList,
  addToWatchList,
  setIsAddToCartList,
} from 'Components/Redux/reducers/myAccount.slice';
import {
  getExportStockData,
  getCartStockCount,
} from 'Components/Redux/reducers/dashboard.slice';
import {
  addToWishListInLocalList,
  addToCartListInLocal,
} from 'Components/Redux/reducers/offlineList.slice';

function DiamondTopButton({
  userData,
  listGrid,
  setListGrid,
  diamondType,
  selectedDiamondList,
  searchDiamondFilterList2,
  setSearchDiamondFilterList2,
  searchDiamondFilterListLoading,
}) {
  const dispatch = useDispatch();
  const { isAddToCartList } = useSelector(({ myAccount }) => myAccount);
  const [exportShow, setExportShow] = useState(false);
  const [exportType, setExportType] = useState('all');

  useEffect(() => {
    if (isAddToCartList && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartList(false));
    }
  }, [dispatch, isAddToCartList, userData]);

  const exportHandleClose = useCallback(() => {
    setExportType('all');
    setExportShow(false);
  }, []);

  const exportHandleSubmit = useCallback(() => {
    if (exportType === 'selected') {
      if (selectedDiamondList?.length > 0) {
        let selectedExportDataId = [...selectedDiamondList] || [];
        selectedExportDataId = _.map(selectedExportDataId, 'Stock_ID');
        exportHandleClose();
        dispatch(
          getExportStockData({
            SelectedStone: selectedExportDataId.toString(),
            UserID: userData.UserID,
            diamondType: diamondType,
          }),
        );
      }
    } else {
      if (searchDiamondFilterList2?.size > 0) {
        let allExportDataId = [...searchDiamondFilterList2.values()];
        allExportDataId = _.map(allExportDataId, 'Stock_ID');
        exportHandleClose();
        dispatch(
          getExportStockData({
            SelectedStone: allExportDataId.toString(),
            UserID: userData.UserID,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [
    dispatch,
    userData,
    exportType,
    searchDiamondFilterList2,
    selectedDiamondList,
    diamondType,
    exportHandleClose,
  ]);

  const exportHandleShow = () => setExportShow(true);
  const onAddToCartHandler = useCallback(async () => {
    if (selectedDiamondList?.length > 0) {
      let cartList = selectedDiamondList?.map(item => item.Stock_ID);
      if (userData?.UserID) {
        await dispatch(
          addToCartList({
            StockIDs: cartList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
      } else {
        await dispatch(
          addToCartListInLocal({
            diamondCartList: selectedDiamondList,
            diamondType: diamondType,
          }),
        );
      }
    }
  }, [dispatch, selectedDiamondList, userData, diamondType]);
  const onAddToHoldHandler = useCallback(() => {
    if (selectedDiamondList?.length > 0) {
      let cartList = selectedDiamondList?.map(item => item.Stock_ID);
      dispatch(
        addToHoldList({
          StockIDs: cartList.toString(),
          CustomerID: userData?.UserID,
          diamondType: diamondType,
        }),
      );
    }
  }, [dispatch, selectedDiamondList, userData, diamondType]);
  const onAddToWishHandler = useCallback(async () => {
    if (selectedDiamondList?.length > 0) {
      let wishList = selectedDiamondList?.map(item => item.Stock_ID);
      if (userData?.UserID) {
        const { payload } = await dispatch(
          addToWatchList({
            StockIDs: wishList.toString(),
            CustomerID: userData?.UserID,
            diamondType: diamondType,
          }),
        );
        if (payload?.data?.IsSuccess) {
          const newSearchDiamondFilterList2 = new Map(searchDiamondFilterList2);
          wishList.forEach(item => {
            let diamondObj = newSearchDiamondFilterList2.get(item);
            newSearchDiamondFilterList2.set(item, {
              ...diamondObj,
              Is_Like: true,
            });
          });
          dispatch(setSearchDiamondFilterList2(newSearchDiamondFilterList2));
        }
      } else {
        const selectedDiamondData = selectedDiamondList?.map(item => {
          return { ...item, Is_Like: true };
        });
        dispatch(
          addToWishListInLocalList({
            diamondWishList: selectedDiamondData,
            diamondType: diamondType,
          }),
        );
        const newSearchDiamondFilterList2 = new Map(searchDiamondFilterList2);
        wishList.forEach(item => {
          let diamondObj = newSearchDiamondFilterList2.get(item);
          newSearchDiamondFilterList2.set(item, {
            ...diamondObj,
            Is_Like: true,
          });
        });
        dispatch(setSearchDiamondFilterList2(newSearchDiamondFilterList2));
      }
    }
  }, [
    dispatch,
    selectedDiamondList,
    userData,
    diamondType,
    searchDiamondFilterList2,
    setSearchDiamondFilterList2,
  ]);

  return (
    <>
      <Row className="mb25">
        <Col xxl={5}>
          <div className="filter_by_list mb20-xl">
            <ul>
              <li>
                <div className="list_grid_button">
                  <Button
                    variant="outline-secondary"
                    className={listGrid === 'Grid' ? 'active' : ''}
                    onClick={() => setListGrid('Grid')}
                  >
                    <img src={Grid} alt="" /> Visual
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className={listGrid === 'List' ? 'active' : ''}
                    onClick={() => setListGrid('List')}
                  >
                    <img src={List} alt="" /> List
                  </Button>
                </div>
              </li>
              {/*  <li className="mr20 mr0-xs filter_button_wrap">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill"
                  onClick={handleShow}
                >
                  More Filters
                  <img src={FilterIcon} className="mr0 ml30" alt="" />
                </Button>
              </li> */}
              {/* <li className="mlauto-xl">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Select aria-label="Default select example">
                    <option value="1">Price - Low to High</option>
                    <option value="2">Price - High to Low</option>
                  </Form.Select>
                </Form.Group>
              </li> */}
            </ul>
          </div>
        </Col>
        <Col xxl={7}>
          <ul className="action_button_wrap d-flex align-items-center justify-content-end">
            <li className="ml10 ml0-xl mrauto-xl">
              <Button
                variant="primary"
                onClick={exportHandleShow}
                className="rounded-pill small_padding"
                disabled={searchDiamondFilterListLoading}
              >
                Export
              </Button>
            </li>
            <li className="ml10">
              <Button
                variant="outline-primary"
                className="rounded-pill small_padding"
                onClick={onAddToCartHandler}
                disabled={selectedDiamondList?.length === 0}
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
                  disabled={selectedDiamondList?.length === 0}
                >
                  <img src={holdDiamondIcon} alt="" /> Add to hold
                </Button>
              </li>
            )}
            <li className="ml10">
              <Button
                variant="outline-primary"
                className="rounded-pill small_padding"
                onClick={onAddToWishHandler}
                disabled={selectedDiamondList?.length === 0}
              >
                <img src={HeartIcon} alt="" /> Add to wishlist
              </Button>
            </li>
            {/*  <li className="ml10">
              <Button
                variant="outline-primary"
                className="rounded-pill small_padding"
                onClick={onAddToWishHandler}
                disabled={selectedDiamondList?.length === 0}
              >
                <img src={CompareIcon} alt="" /> Add to Compare
              </Button>
            </li> */}
          </ul>
        </Col>
      </Row>
      <Modal show={exportShow} onHide={exportHandleClose} centered>
        <Modal.Header closeButton>
          <h6>Export Type</h6>
        </Modal.Header>
        <Modal.Body>
          <div className=" radio_wrapper d-flex">
            <Form.Check
              type="radio"
              name="exportType"
              className="mr25"
              id="all"
              readOnly
              label="All"
              checked={exportType === 'all'}
              onClick={() => setExportType('all')}
            />
            <Form.Check
              type="radio"
              name="exportType"
              id="selected"
              readOnly
              disabled={selectedDiamondList?.length === 0}
              checked={exportType === 'selected'}
              onClick={() => setExportType('selected')}
              label="Selected"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            className="rounded-pill small_padding"
            size="sm"
            onClick={exportHandleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="rounded-pill small_padding"
            size="sm"
            onClick={exportHandleSubmit}
          >
            Export
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default memo(DiamondTopButton);
