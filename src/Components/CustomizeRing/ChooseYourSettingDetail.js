import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import JewelleryImgSlider from '../Jewellery/JewelleryImgSlider';
import SimilarJewellery from '../Jewellery/SimilarJewellery';
import CustomizeRingSteps from './CustomizeRingSteps';
import PlusIcon from '../../Assets/Images/plusicon.svg';
import Star from '../../Assets/Images/star.svg';
import WhiteGold from '../../Assets/Images/white_gold.svg';
import Gold from '../../Assets/Images/gold.svg';
import RoseGold from '../../Assets/Images/rose-gold.svg';
import Plaatinum from '../../Assets/Images/platinum.svg';
import { useNavigate } from 'react-router-dom';
import ItemReview from '../Jewellery/ItemReview';
import { getUrlParam } from 'Helper/CommonHelper';
import { useDispatch, useSelector } from 'react-redux';
import JewelleryInfo from '../Jewellery/JewelleryInfo';
import {
  getJewelleryDetailList,
  setJewelleryDetailData,
  setIsAddToCartJewellery,
} from 'Components/Redux/reducers/jewellery.slice';
import { getCartStockCount } from 'Components/Redux/reducers/dashboard.slice';

export default function ChooseYourSettingDetail() {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [color, setColor] = useState('White Gold');
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { jewelleryDetailData, isAddToCartJewellery } = useSelector(
    ({ jewellery }) => jewellery,
  );
  const { userData } = useSelector(({ auth }) => auth);
  const stockId = getUrlParam(window.location.search, 'stockId');

  useEffect(() => {
    if (stockId) {
      dispatch(getJewelleryDetailList(stockId));
    }
    return () => {
      dispatch(setJewelleryDetailData({}));
    };
  }, [dispatch, stockId]);

  useEffect(() => {
    if (isAddToCartJewellery && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
      dispatch(setIsAddToCartJewellery(false));
    }
  }, [dispatch, isAddToCartJewellery, userData]);
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="jewellety_detail_wrapper pt40 pb80 pt0-md pb50-md">
        <Container>
          <Row className="g-4">
            <Col xl={4} lg={5}>
              <JewelleryImgSlider jewelleryDetailData={jewelleryDetailData} />
            </Col>
            <Col xl={8} lg={7}>
              <JewelleryInfo
                jewelleryDetailData={jewelleryDetailData}
                userData={userData}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="jewellety_detail_wrapper pb80 pb50-md">
        <Container>
          <Row>
            <Col xxl={8} lg={7}>
              <div className="jewellery_price_wrapper">
                <h4 className="fw_700 mb10 text_primary">$2,499.00</h4>
                <div className="rating d-flex mb20">
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                  <img src={Star} alt="" className="mr5" />
                </div>
                <div className="color_select_Wrap">
                  <h6 className="fs_16 fw_500 mb15">
                    Metal :
                    <span className="text_extra_light fw_400 pl10">
                      {color === 'White Gold' && '18K White Gold'}
                      {color === 'gold' && '18K Gold'}
                      {color === 'roseGold' && '18K Rose Gold'}
                      {color === 'platinum' && '18K Platinum'}
                    </span>
                  </h6>
                  <ul>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="white_gold"
                          checked={color === 'White Gold'}
                          onClick={() => setColor('White Gold')}
                        />
                        <label htmlFor="white_gold">
                          <img src={WhiteGold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="gold"
                          checked={color === 'gold'}
                          onClick={() => setColor('gold')}
                        />
                        <label htmlFor="gold">
                          <img src={Gold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="roseGold"
                          checked={color === 'roseGold'}
                          onClick={() => setColor('roseGold')}
                        />
                        <label htmlFor="roseGold">
                          <img src={RoseGold} alt="" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="color_select_radio">
                        <input
                          type="radio"
                          name="color_select"
                          id="platinum"
                          checked={color === 'platinum'}
                          onClick={() => setColor('platinum')}
                        />
                        <label htmlFor="platinum">
                          <img src={Plaatinum} alt="" />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className="review_wrapper pb80 pb50-md">
        <ItemReview />
      </section>

      <section className="similar_stone_wrapper pb100 pb80-lg pb50-md">
        <SimilarJewellery />
      </section> */}
    </main>
  );
}
