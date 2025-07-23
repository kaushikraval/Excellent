import { Button, Col, Form, Row } from 'react-bootstrap';
import HeartIcon from '../../Assets/Images/heart.svg';
import LeftAngle from '../../Assets/Images/left-angle.svg';
import RightAngle from '../../Assets/Images/right-angle.svg';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import recordsNotFound from '../../Assets/Images/records-not-found.jpg';
import LikeImage from '../../Assets/Images/heart-red.svg';
import { useDispatch } from 'react-redux';
import { getSearchDiamondFilterList } from 'Components/Redux/reducers/dashboard.slice';
import { memo, useCallback, useMemo } from 'react';
import {
  removeToWatchList,
  addToWatchList,
} from 'Components/Redux/reducers/myAccount.slice';
import {
  removFromWishListInLocal,
  addToWishListInLocalList,
} from 'Components/Redux/reducers/offlineList.slice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import DiamondGridViewTable from './DiamondGridViewTable';

function DiamondGridView({
  redirectUrl,
  pageSize,
  userData,
  currentData,
  setPageSize,
  diamondType,
  currentPage,
  setCurrentPage,
  onSelectDiamond,
  isSearchDiamond,
  searchResultTotalRows,
  searchDiamondSavedData,
  searchResultTotalRecords,
  searchDiamondFilterList2,
  setSearchDiamondFilterList2,
  searchDiamondFilterListLoading,
}) {
  const dispatch = useDispatch();
  const loadingDiamondGridView = useMemo(() => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      arr.push(
        <Col xl={3} md={4} sm={6}>
          <div className="product_box">
            <div className="product_img">
              <Skeleton height={270} />
            </div>
            <div className="product_info1">
              <Skeleton height={50} />
              <Row>
                <Col xs>
                  <h6 className="price mb0">
                    <Skeleton height={30} />
                  </h6>
                </Col>
                <Col xs>
                  <h6 className="price mb0">
                    <Skeleton height={30} />
                  </h6>
                </Col>
              </Row>
            </div>
          </div>
        </Col>,
      );
    }
    return arr;
  }, []);

  const updateRowWatch = useCallback(
    (row, value) => {
      const newSearchDiamondFilterList2 = new Map(searchDiamondFilterList2);
      newSearchDiamondFilterList2.set(row.Stock_ID, {
        ...row,
        Is_Like: value,
      });
      dispatch(setSearchDiamondFilterList2(newSearchDiamondFilterList2));
    },
    [dispatch, searchDiamondFilterList2, setSearchDiamondFilterList2],
  );
  const onWatchHandler = useCallback(
    async row => {
      if (userData?.UserID) {
        if (row?.Is_Like) {
          let { payload } = await dispatch(
            removeToWatchList({
              StockIDs: row.Stock_ID.toString(),
              CustomerID: userData?.UserID,
              diamondType: diamondType,
            }),
          );
          payload?.data?.IsSuccess && updateRowWatch(row, !row.Is_Like);
        } else {
          let { payload } = await dispatch(
            addToWatchList({
              StockIDs: row.Stock_ID.toString(),
              CustomerID: userData?.UserID,
              diamondType: diamondType,
            }),
          );
          payload?.data?.IsSuccess && updateRowWatch(row, !row.Is_Like);
        }
      } else {
        if (row?.Is_Like) {
          dispatch(
            removFromWishListInLocal({
              diamondWishList: [{ ...row, Is_Like: !row.Is_Like }],
              diamondType: diamondType,
            }),
          );
          updateRowWatch(row, !row.Is_Like);
        } else {
          dispatch(
            addToWishListInLocalList({
              diamondWishList: [{ ...row, Is_Like: !row.Is_Like }],
              diamondType: diamondType,
            }),
          );
          updateRowWatch(row, !row.Is_Like);
        }
      }
    },
    [dispatch, diamondType, updateRowWatch, userData],
  );
  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);
  return (
    <div className="product_grid_wrapper">
      <Row className="g-2 g-sm-4">
        <DiamondGridViewTable
          LikeImage={LikeImage}
          HeartIcon={HeartIcon}
          redirectUrl={redirectUrl}
          currentData={currentData}
          diamondType={diamondType}
          onWatchHandler={onWatchHandler}
          onSelectDiamond={onSelectDiamond}
          NoImageAvailable={NoImageAvailable}
          handleImageError={handleImageError}
        />
        {searchDiamondFilterListLoading && loadingDiamondGridView}
        {isSearchDiamond &&
          !searchDiamondFilterListLoading &&
          currentData.length === 0 && (
            <h6 className="d-flex justify-content-center flex-column align-items-center data_not_found">
              <img src={recordsNotFound} alt="Records Not Found" />
              <h4>Data Not Found</h4>
            </h6>
          )}
      </Row>
      {currentData?.length > 0 && (
        <div className="pagination_Wrapper mt20">
          <Row className="align-items-center">
            <Col sm={3}>
              <p className="m0">
                Displaying {currentPage + 1} to {searchResultTotalRows} of{' '}
                {searchResultTotalRecords} items
              </p>
            </Col>
            <Col sm={9}>
              <ul>
                <li>
                  <div className="row_per_page">
                    <span>Rows per page</span>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Select
                        aria-label="Default select example"
                        value={pageSize}
                        onChange={e => {
                          if (pageSize !== Number(e.target.value)) {
                            setPageSize(Number(e.target.value));
                            setCurrentPage(0);
                            dispatch(
                              getSearchDiamondFilterList({
                                ...searchDiamondSavedData,
                                UserID: userData.UserID,
                                pageSize: Number(e.target.value),
                                pageNum: 0,
                              }),
                            );
                          }
                        }}
                      >
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </li>
                <li>
                  <div className="total_row">
                    <p>
                      {currentPage * pageSize + 1}-
                      {(currentPage + 1) * pageSize} of{' '}
                      <span>{searchResultTotalRecords}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="next_prev_page">
                    <Button
                      variant="light"
                      disabled={currentPage === 0}
                      onClick={() => {
                        if (currentPage > 0) {
                          setCurrentPage(currentPage - 1);
                          dispatch(
                            getSearchDiamondFilterList({
                              ...searchDiamondSavedData,
                              UserID: userData.UserID,
                              pageSize: pageSize,
                              pageNum: currentPage - 1,
                            }),
                          );
                        }
                      }}
                    >
                      <img src={LeftAngle} alt="Left" />
                    </Button>
                    <Button
                      variant="light"
                      disabled={searchResultTotalRows === currentPage + 1}
                      onClick={() => {
                        if (currentPage < searchResultTotalRecords) {
                          setCurrentPage(currentPage + 1);
                          dispatch(
                            getSearchDiamondFilterList({
                              ...searchDiamondSavedData,
                              UserID: userData.UserID,
                              pageSize: pageSize,
                              pageNum: currentPage + 1,
                            }),
                          );
                        }
                      }}
                    >
                      <img src={RightAngle} alt="Right" />
                    </Button>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}
export default memo(DiamondGridView);
