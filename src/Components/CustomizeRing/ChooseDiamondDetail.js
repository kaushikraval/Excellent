import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdditionalInfo from '../Diamond/AdditionalInfo';
import DiamondImgSlider from '../Diamond/DiamondImgSlider';
import DiamondInfo from '../Diamond/DiamondInfo';
import SimilarStone from '../Diamond/SimilarStone';
import CustomizeRingSteps from './CustomizeRingSteps';

import { getUrlParam } from 'Helper/CommonHelper';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStockDetailDna,
  getSimillarStockList,
} from 'Components/Redux/reducers/dashboard.slice';

export default function ChooseDiamondDetail() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const stoneNo = getUrlParam(window.location.search, 'stoneNo');
  const diamondType = getUrlParam(window.location.search, 'diamondType');
  const { userData } = useSelector(({ auth }) => auth);
  const { stockDetailDnaList, stockDetailDnaLoading, similarDiamondList } =
    useSelector(({ dashboard }) => dashboard);
  useEffect(() => {
    if (stoneNo && diamondType) {
      dispatch(
        getStockDetailDna({ StoneNo: stoneNo, UserID: userData?.UserID }),
      );
      dispatch(
        getSimillarStockList({
          StoneNumber: stoneNo,
          UserID: userData?.UserID ? userData.UserID : 0,
          DiamondType: diamondType,
        }),
      );
    }
  }, [dispatch, stoneNo, diamondType]);
  return (
    <main>
      <section className="customize_ring_steps pt20 pb50 pt0-md pb30-sm">
        <CustomizeRingSteps />
      </section>
      <section className="diamond_detail_wrapper pt40 pb100 pb80-lg pb50-md pt0-md">
        <Container>
          <Row>
            <Col xl={4} lg={6}>
              <DiamondImgSlider
                stockDetailDnaList={stockDetailDnaList}
                stockDetailDnaLoading={stockDetailDnaLoading}
              />
            </Col>
            <Col xl={8} lg={6}>
              <DiamondInfo
                stoneNo={stoneNo}
                diamondType={diamondType}
                stoneId={stockDetailDnaList?.Stock_ID}
                stockDetailDnaList={stockDetailDnaList}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {stockDetailDnaList?.Certificate_file_url && (
        <section className="certificate_wrapper pb100">
          <Container>
            <iframe
              src={`${stockDetailDnaList?.Certificate_file_url}&navpanes=0`}
              height="900"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </Container>
        </section>
      )}

      {/* <section className="additional_detail_wrapper pb80">
        <AdditionalInfo />
      </section>

      <section className="recommended_you pb40">
        <Container>
          <h2 className="text-center mb25 h3">Recommended For You</h2>
          <SimilarStone />
        </Container>
      </section> */}
    </main>
  );
}
