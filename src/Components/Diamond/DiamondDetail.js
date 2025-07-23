import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DiamondImgSlider from './DiamondImgSlider';
import DiamondInfo from './DiamondInfo';
import SimilarStone from './SimilarStone';
import { getUrlParam } from 'Helper/CommonHelper';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStockDetailDna,
  getSimillarStockList,
} from 'Components/Redux/reducers/dashboard.slice';
import { getSessionData } from 'Helper/AuthTokenHelper';

export default function DiamondDetail() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const stoneNo = getUrlParam(window.location.search, 'stoneNo');
  const diamondType = getUrlParam(window.location.search, 'diamondType');
  const { stockDetailDnaList, stockDetailDnaLoading, similarDiamondList } =
    useSelector(({ dashboard }) => dashboard);
  useEffect(() => {
    if (stoneNo && diamondType) {
      const userDataToken = getSessionData();
      dispatch(
        getStockDetailDna({
          StoneNo: stoneNo,
          UserID: userDataToken ? userDataToken?.UserID : 0,
        }),
      );
      dispatch(
        getSimillarStockList({
          StoneNumber: stoneNo,
          UserID: userDataToken ? userDataToken.UserID : 0,
          DiamondType: diamondType,
        }),
      );
    }
  }, [dispatch, stoneNo, diamondType]);
  return (
    <main>
      <section className="diamond_detail_wrapper pt40 pt0-sm pb100 pb80-xl pb50-md">
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

      {/* <section className="additional_detail_wrapper pb80 pb50-md">
        <AdditionalInfo stockDetailDnaList={stockDetailDnaList} />
      </section> */}

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

      <section className="recommended_you pb40">
        <Container>
          <h2 className="text-center mb25 h3">Recommended For You</h2>
          <SimilarStone similarDiamondList={similarDiamondList} />
        </Container>
      </section>
    </main>
  );
}
