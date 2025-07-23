import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Col, Container, Form, Offcanvas, Row } from 'react-bootstrap';
import JewelleryFilter from './JewelleryFilter';
import JewelleryList from './JewelleryList';
import FilterIcon from '../../Assets/Images/filter.svg';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import { useDispatch, useSelector } from 'react-redux';
import { initialValuesForJewellerySearch } from 'Helper/CommonHelper';
import {
  getJewelleryFilterData,
  setIsModifySearchForJewellery,
  setJewelleryFilterDetailByHeader,
  setJewellerySearchStock,
  setIsAddToCartJewellery,
} from 'Components/Redux/reducers/jewellery.slice';
import _ from 'lodash';
import { getCartStockCount } from 'Components/Redux/reducers/dashboard.slice';
import Select from 'react-select';

export default function Jewellery() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const {
    jewelleryBaseMetal,
    jewellerySearchStock,
    isAddToCartJewellery,
    jewelleryCategoryDetail,
    jewelleryParameterDetail,
    jewelleryFilterDataLoader,
    isModifySearchForJewellery,
    jewelleryFilterDetailByHeader,
  } = useSelector(({ jewellery }) => jewellery);
  const { userData } = useSelector(({ auth }) => auth);
  const [filtershow, setFilterShow] = useState(false);
  const handleClose = () => setFilterShow(false);
  const handleShow = () => setFilterShow(true);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [jewelleryFilterData, setJewelleryFilterData] = useState(
    initialValuesForJewellerySearch,
  );
  useEffect(() => {
    if (Object.keys(jewelleryFilterData)?.length > 0) {
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterData,
        }),
      );
    }
    return () => {
      dispatch(setJewellerySearchStock([]));
    };
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(jewelleryFilterDetailByHeader)?.length > 0) {
      if (isModifySearchForJewellery) {
        dispatch(setIsModifySearchForJewellery(false));
        setJewelleryFilterData(prevState => ({
          ...prevState,
          type_ID: jewelleryFilterDetailByHeader.type,
          sub_Type_ID: jewelleryFilterDetailByHeader.subType,
        }));
        dispatch(
          getJewelleryFilterData({
            ...jewelleryFilterData,
            type_ID: jewelleryFilterDetailByHeader.type,
            sub_Type_ID: jewelleryFilterDetailByHeader.subType,
          }),
        );
        dispatch(setJewelleryFilterDetailByHeader({}));
      }
    }
  }, [isModifySearchForJewellery]);

  useEffect(() => {
    if (isAddToCartJewellery && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartJewellery(false));
    }
  }, [dispatch, isAddToCartJewellery, userData]);

  const getJewelleryFilterDataHandler = useCallback(async () => {
    dispatch(getJewelleryFilterData({}));
  }, [dispatch]);
  const currentDataObj = useMemo(() => {
    let jewellerySearchStockData = [...jewellerySearchStock] || [];
    let totalPages = 0;
    if (jewellerySearchStockData?.length > 0) {
      jewellerySearchStockData = jewellerySearchStockData?.slice(
        0 + (currentPage * pageSize - pageSize),
        currentPage * pageSize,
      );
      totalPages = Math.ceil(jewellerySearchStock.length / pageSize);
    }
    return { data: jewellerySearchStockData, totalRows: totalPages };
  }, [currentPage, pageSize, jewellerySearchStock]);

  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);

  return (
    <main>
      {/* <section className="jewellary_banner">
        <Container>
          <h1 className="text-white mb15">
            <span className="d-block h3">Introducing the</span>lost day
            collection
          </h1>
          <p className="text-white mb30">
            Rings, Bracelet, Necklace, Earrings & more collections
          </p>
          <Button variant="outline-light" className="rounded-pill px30">
            Shop Now
          </Button>
        </Container>
      </section> */}
      <section className="jewellery_list_wrapper pt40 pb100 pb80-xl pb50-md">
        <Container>
          <h2 class="text-center mb40">
            Search for <span>Jewellery</span>
          </h2>
          <Row>
            <Col xl={3} className="d-none d-xl-block">
              <JewelleryFilter
                jewelleryBaseMetal={jewelleryBaseMetal}
                jewelleryFilterData={jewelleryFilterData}
                setJewelleryFilterData={setJewelleryFilterData}
                jewelleryFilterCategory={jewelleryCategoryDetail}
                jewelleryParameterDetail={jewelleryParameterDetail}
                getJewelleryFilterDataHandler={getJewelleryFilterDataHandler}
                initialValuesForJewellerySearch={
                  initialValuesForJewellerySearch
                }
              />
            </Col>
            <Col xl={9} lg={12}>
              <Row className="align-items-center mb25 jewellery_top_Wrapper">
                <Col sm={6}>
                  <div className="d-flex align-items-center total_filter_button">
                    <p className="mb0 fs_16 text_dark mr20">
                      {jewellerySearchStock?.length > 0 && (
                        <span>
                          {' '}
                          {jewellerySearchStock?.length} Products found
                        </span>
                      )}
                    </p>
                    <div className="mr20 mr0-xs filter_button_wrap d-block d-xl-none">
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill"
                        onClick={handleShow}
                      >
                        More Filters
                        <img src={FilterIcon} className="mr0 ml30" alt="" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <ul className="select_filter_wrap">
                    {window.location.pathname === '/choose-your-setting' && (
                      <li>
                        <div className="sorting_wrap">
                          <Form.Group
                            controlId="exampleForm.ControlInput1"
                            className="form_group"
                          >
                            <Form.Select aria-label="Default select example">
                              <option value="1">Metal</option>
                              <option value="2">Metal</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </li>
                    )}
                    <li>
                      <div className="sorting_wrap">
                        <Form.Group
                          controlId="exampleForm.ControlInput1"
                          className="form_group"
                        >
                          <Select
                            aria-label="Default select example"
                            className="react_custom_select_Wrapper square"
                            value={jewelleryFilterData.sortBy}
                            options={[
                              { label: 'Price - Low to High', value: 'ASC' },
                              { label: 'Price - High to Low', value: 'DESC' },
                            ]}
                            onChange={e => {
                              if (
                                e.value !== jewelleryFilterData.sortBy.value
                              ) {
                                setJewelleryFilterData(prevState => ({
                                  ...prevState,
                                  sortBy: e,
                                }));
                                dispatch(
                                  getJewelleryFilterData({
                                    ...jewelleryFilterData,
                                    sortBy: e,
                                  }),
                                );
                              }
                            }}
                            placeholder="Sort By"
                          />
                        </Form.Group>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
              <JewelleryList
                redirectUrl={'/jewellery-detail'}
                userData={userData}
                pageSize={pageSize}
                setPageSize={setPageSize}
                currentPage={currentPage}
                jewelType="jewellery_list"
                currentDataObj={currentDataObj}
                setCurrentPage={setCurrentPage}
                handleImageError={handleImageError}
                jewellerySearchStock={jewellerySearchStock}
                jewelleryFilterDataLoader={jewelleryFilterDataLoader}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Offcanvas show={filtershow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <JewelleryFilter
            jewelleryBaseMetal={jewelleryBaseMetal}
            jewelleryFilterData={jewelleryFilterData}
            setJewelleryFilterData={setJewelleryFilterData}
            jewelleryFilterCategory={jewelleryCategoryDetail}
            jewelleryParameterDetail={jewelleryParameterDetail}
            getJewelleryFilterDataHandler={getJewelleryFilterDataHandler}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}
