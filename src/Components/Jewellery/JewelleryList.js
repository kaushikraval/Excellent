import React, { useCallback, useMemo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftAngle from '../../Assets/Images/left-angle.svg';
import RightAngle from '../../Assets/Images/right-angle.svg';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addToCartJewellery } from 'Components/Redux/reducers/jewellery.slice';
import { addToCartListInLocalJewelery } from 'Components/Redux/reducers/offlineList.slice';

export default function JewelleryList({
  redirectUrl,
  userData,
  pageSize,
  jewelType,
  currentPage,
  setPageSize,
  currentDataObj,
  setCurrentPage,
  handleImageError,
  jewellerySearchStock,
  jewelleryFilterDataLoader,
}) {
  const dispatch = useDispatch();
  const loadingJewelleryGridView = useMemo(() => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      arr.push(
        <Col xl={jewelType === 'choose_setting' ? '3' : '4'} lg={4} sm={6}>
          <div className="jewellery_box_wrapper jewellery_skeleton_Wrappper">
            <div className="jewellery_img_wrapper">
              <Skeleton style={{ width: '100%' }} />
            </div>
            <div className="jewellery_detail_text">
              <Skeleton
                height={42}
                style={{ width: '100%', marginBottom: '20px' }}
              />
              <Skeleton
                height={22}
                style={{ width: '60%', marginBottom: '10px' }}
              />
              <Skeleton height={44} style={{ width: '80%' }} />
            </div>
          </div>
        </Col>,
      );
    }
    return arr;
  }, [jewelType]);

  const addToCartJewelleryList = useCallback(
    jewelleryItem => {
      if (userData?.UserID) {
        dispatch(
          addToCartJewellery({
            ...jewelleryItem,
            userId: userData?.UserID,
            isOnlyJewellery: true,
          }),
        );
      } else {
        dispatch(
          addToCartListInLocalJewelery({
            jeweleryList: { ...jewelleryItem, isOnlyJewellery: true },
          }),
        );
      }
    },
    [dispatch, userData],
  );

  return (
    <div className="jewellery_main_Wrapper">
      <Row className="g-4">
        {jewelleryFilterDataLoader && loadingJewelleryGridView}
        {currentDataObj?.data?.map((jewelleryProduct, index) => (
          <Col
            xl={jewelType === 'choose_setting' ? '3' : '4'}
            key={index}
            lg={4}
            sm={6}
          >
            <div className="jewellery_box_wrapper">
              <div className="jewellery_img_wrapper">
                <Link
                  to={`${redirectUrl}?stockId=${jewelleryProduct.Stock_ID}`}
                  target={
                    redirectUrl === '/choose-your-setting' ? '_blank' : '_self'
                  }
                >
                  <img
                    src={jewelleryProduct.Img_Video_Url}
                    alt="Jewellery"
                    onError={handleImageError}
                  />
                </Link>
              </div>
              <div className="jewellery_detail_text">
                <div className="jewellery_title">
                  <h5>
                    <Link
                      to={`${redirectUrl}?stockId=${jewelleryProduct.Stock_ID}`}
                      target={
                        redirectUrl === '/choose-your-setting'
                          ? '_blank'
                          : '_self'
                      }
                    >
                      {jewelleryProduct.Jewellery_Name}
                      {jewelleryProduct.Metal_PurityColor} Gold(
                      {jewelleryProduct?.Total_Metal_Weight
                        ? jewelleryProduct.Total_Metal_Weight
                        : 0}{' '}
                      ct.)
                    </Link>
                  </h5>
                </div>
                <div className="price">
                  <h6>
                    $
                    {jewelleryProduct?.Sale_Rate
                      ? jewelleryProduct.Sale_Rate
                      : 0}
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow px30 px20-xl mr15 fs_14"
                    size="sm"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-pill fs_14"
                    onClick={() => addToCartJewelleryList(jewelleryProduct)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {currentDataObj?.data?.length > 0 && (
        <div className="pagination_Wrapper mt20">
          <Row className="align-items-center">
            <Col md={4}>
              <p className="m0">
                Displaying {currentPage} to {currentDataObj?.totalRows} of{' '}
                {jewellerySearchStock?.length || 0} items
              </p>
            </Col>
            <Col md={8}>
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
                            setCurrentPage(1);
                          }
                        }}
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </li>
                <li>
                  <div className="total_row">
                    <p>
                      {(currentPage - 1) * pageSize + 1}-
                      {currentPage * pageSize} of{' '}
                      <span>{jewellerySearchStock?.length || 0}</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="next_prev_page">
                    <Button variant="light" disabled={currentPage === 1}>
                      <img
                        src={LeftAngle}
                        alt="LeftAngle"
                        onClick={() => {
                          if (currentPage > 1) {
                            setCurrentPage(prevState => prevState - 1);
                          }
                        }}
                      />
                    </Button>
                    <Button
                      variant="light"
                      disabled={currentDataObj?.totalRows === currentPage}
                    >
                      <img
                        src={RightAngle}
                        alt="RightAngle"
                        onClick={() => {
                          if (currentPage < currentDataObj?.totalRows) {
                            setCurrentPage(prevState => prevState + 1);
                          }
                        }}
                      />
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
