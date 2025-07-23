import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DiamondGridView from '../Diamond/DiamondGridView';
import DiamondListView from '../Diamond/DiamondListView';
import DiamondSearch from '../Diamond/DiamondSearch/index.js';
import DiamondTopButton from '../Diamond/DiamondTopButton';
import CustomizeRingSteps from './CustomizeRingSteps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import {
  setSelectedDiamondList,
  setSearchDiamondFilterList2,
} from 'Components/Redux/reducers/dashboard.slice';
import { useNavigate } from 'react-router-dom';
import {
  getWatchStockListCount,
  setIsAddToWatchList,
} from 'Components/Redux/reducers/myAccount.slice';

export default function ChooseDiamond() {
  const navigate = useNavigate();
  const {
    searchDiamondFilterList2 = new Map(),
    searchResultTotalRows,
    searchResultTotalRecords,
    searchDiamondSavedData,
    searchDiamondFilterListLoading,
    selectedDiamondList,
  } = useSelector(({ dashboard }) => dashboard);
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const { diamondType } = useSelector(({ offlineList }) => offlineList);
  const [isSearchDiamond, setIsSearchDiamond] = useState(false);
  const { diamondFilterDetail, diamondDetailListLoading } = useSelector(
    ({ common }) => common,
  );
  const { isAddToWatchList } = useSelector(({ myAccount }) => myAccount);
  const diamondTableRef = useRef(null);
  const [listGrid, setListGrid] = useState('Grid');
  const [pageSize, setPageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (isAddToWatchList && userData?.UserID) {
      dispatch(getWatchStockListCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToWatchList(false));
    }
  }, [dispatch, userData, isAddToWatchList]);
  useEffect(() => {
    return () => {
      dispatch(setSearchDiamondFilterList2([]));
    };
  }, [dispatch]);

  const onSelectDiamond = useCallback(
    row => {
      const newSearchDiamondFilterList2 = new Map(searchDiamondFilterList2);
      newSearchDiamondFilterList2.set(row.Stock_ID, {
        ...row,
        isCheck: !row.isCheck,
      });
      const newSelectedDiamondList = _.filter(
        [...newSearchDiamondFilterList2.values()],
        item => {
          if (item.isCheck) {
            return item;
          }
        },
      );
      dispatch(setSearchDiamondFilterList2(newSearchDiamondFilterList2));
      dispatch(setSelectedDiamondList(newSelectedDiamondList));
    },
    [dispatch, searchDiamondFilterList2],
  );

  const onExpandDiamond = useCallback(
    row => {
      const newSearchDiamondFilterList2 = new Map(searchDiamondFilterList2);
      newSearchDiamondFilterList2.set(row.Stock_ID, {
        ...row,
        isExpanded: !row.isExpanded,
      });
      dispatch(setSearchDiamondFilterList2(newSearchDiamondFilterList2));
    },
    [dispatch, searchDiamondFilterList2],
  );
  const currentData = useMemo(() => {
    return searchDiamondFilterList2?.size > 0
      ? [...searchDiamondFilterList2.values()]
      : [];
  }, [searchDiamondFilterList2]);
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pb30-lg pb20-md">
        <CustomizeRingSteps />
      </section>
      <section className="diamond_search_wrapper bg_light pt40 pb40">
        <Container>
          <DiamondSearch
            pageSize={pageSize}
            userData={userData}
            diamondType={diamondType}
            setCurrentPage={setCurrentPage}
            diamondTableRef={diamondTableRef}
            setIsSearchDiamond={setIsSearchDiamond}
            diamondFilterDetail={diamondFilterDetail}
            searchDiamondSavedData={searchDiamondSavedData}
            diamondDetailListLoading={diamondDetailListLoading}
            searchDiamondFilterListLoading={searchDiamondFilterListLoading}
          />
        </Container>
      </section>
      <div
        ref={diamondTableRef}
        className={
          listGrid === 'Grid'
            ? 'diamond_grid_wrapper pt30 pb100 pb80-lg pb50-md'
            : 'diamond_grid_wrapper diamond_list_wrapper pt30 pb100 pb80-lg pb50-md'
        }
      >
        <Container>
          <Row>
            <Col xl={12} lg={12}>
              <DiamondTopButton
                userData={userData}
                listGrid={listGrid}
                setListGrid={setListGrid}
                diamondType={diamondType}
                selectedDiamondList={selectedDiamondList}
                searchDiamondFilterList2={searchDiamondFilterList2}
                setSearchDiamondFilterList2={setSearchDiamondFilterList2}
                searchDiamondFilterListLoading={searchDiamondFilterListLoading}
              />
              <div className="product_list_grid_wrapper">
                {listGrid === 'Grid' ? (
                  <DiamondGridView
                    redirectUrl={'/choose-diamond-detail'}
                    currentData={currentData}
                    userData={userData}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    currentPage={currentPage}
                    diamondType={diamondType}
                    setCurrentPage={setCurrentPage}
                    onSelectDiamond={onSelectDiamond}
                    isSearchDiamond={isSearchDiamond}
                    searchResultTotalRows={searchResultTotalRows}
                    searchDiamondSavedData={searchDiamondSavedData}
                    searchResultTotalRecords={searchResultTotalRecords}
                    searchDiamondFilterList2={searchDiamondFilterList2}
                    setSearchDiamondFilterList2={setSearchDiamondFilterList2}
                    searchDiamondFilterListLoading={
                      searchDiamondFilterListLoading
                    }
                  />
                ) : (
                  <DiamondListView
                    currentData={currentData}
                    userData={userData}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    currentPage={currentPage}
                    diamondType={diamondType}
                    setCurrentPage={setCurrentPage}
                    onSelectDiamond={onSelectDiamond}
                    isSearchDiamond={isSearchDiamond}
                    onExpandDiamond={onExpandDiamond}
                    searchResultTotalRows={searchResultTotalRows}
                    searchDiamondSavedData={searchDiamondSavedData}
                    searchResultTotalRecords={searchResultTotalRecords}
                    searchDiamondFilterListLoading={
                      searchDiamondFilterListLoading
                    }
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Offcanvas show={filtershow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DiamondFilter />
        </Offcanvas.Body>
      </Offcanvas> */}
    </main>
  );
}
