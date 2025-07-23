import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import JewelleryList from '../Jewellery/JewelleryList';
import CustomizeRingSteps from './CustomizeRingSteps';
import Solitaire from '../../Assets/Images/solitaire.svg';
import Halo from '../../Assets/Images/Halo.svg';
import Pave from '../../Assets/Images/Pave.svg';
import SideStones from '../../Assets/Images/SideStones.svg';
import RoseGold from '../../Assets/Images/rose-gold.svg';
import WhiteGold from '../../Assets/Images/white_gold.svg';
import YellowGold from '../../Assets/Images/gold.svg';
import Platinum from '../../Assets/Images/platinum.svg';
import { useDispatch, useSelector } from 'react-redux';
import { initialValuesForJewellerySearch } from 'Helper/CommonHelper';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import {
  getJewelleryFilterData,
  setIsModifySearchForJewellery,
  setJewelleryFilterDetailByHeader,
} from 'Components/Redux/reducers/jewellery.slice';
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import _ from 'lodash';
import { Navigation } from 'swiper/modules';
import Select from 'react-select';

export default function ChooseYourSetting() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const {
    jewelleryBaseMetal,
    jewellerySearchStock,
    jewelleryCategoryDetail,
    jewelleryParameterDetail,
    jewelleryFilterDataLoader,
    isModifySearchForJewellery,
    jewelleryFilterDetailByHeader,
  } = useSelector(({ jewellery }) => jewellery);
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
  const onChangePriceHandler = useCallback(
    value => {
      setJewelleryFilterData(prevState => ({
        ...prevState,
        priceF: value[0],
        priceT: value[1],
      }));
    },
    [setJewelleryFilterData],
  );
  const handlePriceSearchChange = useCallback(
    (value, jewelleryFilterValue) => {
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterValue,
          PriceF: value[0],
          PriceT: value[1],
        }),
      );
    },
    [dispatch],
  );
  const onChangeWeightHandler = useCallback(
    value => {
      setJewelleryFilterData(prevState => ({
        ...prevState,
        weightF: value[0],
        weightT: value[1],
      }));
    },
    [setJewelleryFilterData],
  );

  const handleWeightSearchChange = useCallback(
    (value, jewelleryFilterValue) => {
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterValue,
          weightF: value[0],
          weightT: value[1],
        }),
      );
    },
    [dispatch],
  );

  const debounceHandleWeightTextChange = React.useCallback(
    _.debounce(handleWeightSearchChange, 800),
    [],
  );

  const debounceHandlePriceTextChange = React.useCallback(
    _.debounce(handlePriceSearchChange, 800),
    [],
  );

  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="engagement_ring_setting bg_light pt40 pb40">
        <Container>
          <h5 className="text-center mb25">Engagement Rings Settings</h5>
          <div className="jewellery_setting_wrapper">
            <div className="style_wrapper">
              <h6>Setting Style</h6>
              <ul>
                <li>
                  <div className="ring_setting_radio">
                    <input type="checkbox" id="Solitaire" name="ring_setting" />
                    <label htmlFor="Solitaire">
                      <img src={Solitaire} alt="" />
                      Solitaire
                    </label>
                  </div>
                </li>
                <li>
                  <div className="ring_setting_radio">
                    <input type="checkbox" id="Halo" name="ring_setting" />
                    <label htmlFor="Halo">
                      <img src={Halo} alt="" />
                      Halo
                    </label>
                  </div>
                </li>
                <li>
                  <div className="ring_setting_radio">
                    <input type="checkbox" id="Pave" name="ring_setting" />
                    <label htmlFor="Pave">
                      <img src={Pave} alt="" />
                      Pave
                    </label>
                  </div>
                </li>
                <li>
                  <div className="ring_setting_radio">
                    <input
                      type="checkbox"
                      id="SideStones"
                      name="ring_setting"
                    />
                    <label htmlFor="SideStones">
                      <img src={SideStones} alt="" />
                      Side Stones
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <Row>
              <Col md={4}>
                <div className="style_wrapper">
                  <h6>Price</h6>
                  <RangeSlider
                    value={[
                      jewelleryFilterData.priceF,
                      jewelleryFilterData.priceT,
                    ]}
                    min={0}
                    max={1000000}
                    onInput={e => {
                      onChangePriceHandler(e);
                      debounceHandlePriceTextChange(e, jewelleryFilterData);
                    }}
                  />
                  <div className="range_value d-flex justify-content-between align-content-center">
                    <div className="value">
                      $
                      <span>
                        {jewelleryFilterData.priceF
                          ? jewelleryFilterData.priceF
                          : 0}
                      </span>
                    </div>
                    <div className="value">
                      $
                      <span>
                        {jewelleryFilterData.priceT
                          ? jewelleryFilterData.priceT
                          : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="style_wrapper">
                  <h6>Gold Weight</h6>
                  <RangeSlider
                    value={[
                      jewelleryFilterData.weightF,
                      jewelleryFilterData.weightT,
                    ]}
                    min={0}
                    max={100}
                    onInput={e => {
                      onChangeWeightHandler(e);
                      debounceHandleWeightTextChange(e, jewelleryFilterData);
                    }}
                  />
                  <div className="range_value d-flex justify-content-between align-content-center">
                    <div className="value">
                      $
                      <span>
                        {jewelleryFilterData.weightF
                          ? jewelleryFilterData.weightF
                          : 0}
                      </span>
                    </div>
                    <div className="value">
                      $
                      <span>
                        {jewelleryFilterData.weightT
                          ? jewelleryFilterData.weightT
                          : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="style_wrapper">
                  <h6>Metal</h6>
                  <Swiper
                    spaceBetween={10}
                    autoHeight={false}
                    slidesPerView={'auto'}
                    navigation={true}
                    modules={[Navigation]}
                  >
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="10KRoseGold"
                          name="ring_setting"
                        />
                        <label htmlFor="10KRoseGold">
                          <img src={RoseGold} alt="" />
                          <span>10K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="10KWhiteGold"
                          name="ring_setting"
                        />
                        <label htmlFor="10KWhiteGold">
                          <img src={WhiteGold} alt="" />
                          <span>10K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="10KYellowGold"
                          name="ring_setting"
                        />
                        <label htmlFor="10KYellowGold">
                          <img src={YellowGold} alt="" />
                          <span>10K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="14KRoseGold"
                          name="ring_setting"
                        />
                        <label htmlFor="14KRoseGold">
                          <img src={RoseGold} alt="" />
                          <span>14K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="14KWhiteGold"
                          name="ring_setting"
                        />
                        <label htmlFor="14KWhiteGold">
                          <img src={WhiteGold} alt="" />
                          <span>14K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="14KYellowGold"
                          name="ring_setting"
                        />
                        <label htmlFor="14KYellowGold">
                          <img src={YellowGold} alt="" />
                          <span>14K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="18KRoseGold"
                          name="ring_setting"
                        />
                        <label htmlFor="18KRoseGold">
                          <img src={RoseGold} alt="" />
                          <span>18K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="18KWhiteGold"
                          name="ring_setting"
                        />
                        <label htmlFor="18KWhiteGold">
                          <img src={WhiteGold} alt="" />
                          <span>18K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ring_setting_radio">
                        <input
                          type="radio"
                          id="18KYellowGold"
                          name="ring_setting"
                        />
                        <label htmlFor="18KYellowGold">
                          <img src={YellowGold} alt="" />
                          <span>18K</span>
                        </label>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="jewellery_listing_Wrapper pt50 pb100 pt30-xs pb80-lg pb50-md">
        <Container>
          <Row className="align-items-center mb25 jewellery_top_Wrapper">
            <Col sm={6}>
              <div className="d-flex align-items-center total_filter_button">
                <p className="mb0 fs_16 text_dark mr20">
                  {jewellerySearchStock?.length > 0 && (
                    <span> {jewellerySearchStock?.length} Products found</span>
                  )}
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <ul className="select_filter_wrap">
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
                          if (e.value !== jewelleryFilterData.sortBy.value) {
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
            redirectUrl={'/choose-your-setting-detail'}
            pageSize={pageSize}
            setPageSize={setPageSize}
            currentPage={currentPage}
            jewelType="choose_setting"
            currentDataObj={currentDataObj}
            setCurrentPage={setCurrentPage}
            handleImageError={handleImageError}
            jewellerySearchStock={jewellerySearchStock}
            jewelleryFilterDataLoader={jewelleryFilterDataLoader}
          />
        </Container>
      </section>
    </main>
  );
}
