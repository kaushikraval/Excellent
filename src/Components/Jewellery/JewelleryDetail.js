import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemReview from './ItemReview';
import JewelleryImgSlider from './JewelleryImgSlider';
import JewelleryInfo from './JewelleryInfo';
import SimilarJewellery from './SimilarJewellery';
import { getUrlParam } from 'Helper/CommonHelper';
import { useDispatch, useSelector } from 'react-redux';
import {
  getJewelleryDetailList,
  setJewelleryDetailData,
  setIsAddToCartJewellery,
} from 'Components/Redux/reducers/jewellery.slice';
import { getCartStockCount } from 'Components/Redux/reducers/dashboard.slice';

export default function JewelleryDetail() {
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

      {/* <section className="review_wrapper pb80 pb50-md">
        <ItemReview />
      </section>

      <section className="similar_stone_wrapper pb100 pb80-lg pb50-md">
        <SimilarJewellery />
      </section> */}
    </main>
  );
}
