import React, { memo, useMemo } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function DiamondGridViewTable({
  LikeImage,
  HeartIcon,
  redirectUrl,
  currentData,
  diamondType,
  onWatchHandler,
  NoImageAvailable,
  handleImageError,
  onSelectDiamond,
}) {
  const renderTable = useMemo(() => {
    return (
      currentData?.length > 0 &&
      _.map(currentData, (x, i) => {
        return (
          <Col xl={3} md={4} sm={6} key={i}>
            <WatchContainerDiamondGridView
              {...x}
              key={i}
              row={x}
              LikeImage={LikeImage}
              HeartIcon={HeartIcon}
              redirectUrl={redirectUrl}
              diamondType={diamondType}
              NoImageAvailable={NoImageAvailable}
              handleImageError={handleImageError}
              onWatchHandler={onWatchHandler}
              onSelectDiamond={onSelectDiamond}
            />
          </Col>
        );
      })
    );
  }, [
    HeartIcon,
    LikeImage,
    redirectUrl,
    currentData,
    diamondType,
    NoImageAvailable,
    handleImageError,
    onWatchHandler,
    onSelectDiamond,
  ]);
  return <>{renderTable}</>;
}
const WatchContainerDiamondGridView = ({
  Stone_No,
  diamondType,
  Stone_Img_url,
  NoImageAvailable,
  handleImageError,
  onWatchHandler,
  LikeImage,
  Is_Like,
  HeartIcon,
  redirectUrl,
  onSelectDiamond,
  title,
  Weight,
  Color,
  Clarity,
  Cut,
  Shape,
  isCheck,
  Cost_Amt,
  StockStatus,
  row,
  key,
}) => {
  const imageTab = useMemo(() => {
    return (
      <Link
        to={`${redirectUrl}?stoneNo=${Stone_No}&diamondType=${diamondType}`}
        target={redirectUrl === '/choose-diamond' ? '_blank' : '_self'}
      >
        <img
          src={Stone_Img_url ? Stone_Img_url : NoImageAvailable}
          onError={handleImageError}
          className={Stone_Img_url ? '' : 'no_img'}
          alt="diamondImg"
          loading="lazy"
        />
      </Link>
    );
  }, [
    Stone_No,
    redirectUrl,
    diamondType,
    Stone_Img_url,
    NoImageAvailable,
    handleImageError,
  ]);

  const watchListTab = useMemo(() => {
    return (
      <div className="whishlist_icon">
        <Button variant="link" onClick={() => onWatchHandler(row)}>
          <img src={Is_Like ? LikeImage : HeartIcon} alt="like" />
        </Button>
      </div>
    );
  }, [HeartIcon, LikeImage, row, Is_Like, onWatchHandler]);

  const diamondDetailTab = useMemo(() => {
    return (
      <h6>
        <Link
          to={`${redirectUrl}stoneNo=${Stone_No}&diamondType=${diamondType}`}
          target={redirectUrl === '/choose-diamond' ? '_blank' : '_self'}
        >
          {title ? title : ''}
          {Weight ? `${Weight} Carat` : ''}
          {Color ? ` - ${Color}` : ''}
          {Clarity ? ` - ${Clarity}` : ''}
          {Cut ? ` ${Cut} Cut` : ''}
          {Shape ? `- ${Shape}` : ''}
        </Link>
      </h6>
    );
  }, [
    Stone_No,
    title,
    Weight,
    Color,
    Clarity,
    Cut,
    Shape,
    diamondType,
    redirectUrl,
  ]);

  const checkBoxTab = useMemo(() => {
    return (
      <Form.Check
        type="checkbox"
        readOnly
        id="selectProduct"
        name="selectProduct"
        checked={isCheck}
        onClick={e => onSelectDiamond(row)}
      />
    );
  }, [isCheck, row, onSelectDiamond]);

  const priceTab = useMemo(() => {
    return (
      <Col xs>
        <h6 className="price mb0">${Cost_Amt}</h6>
      </Col>
    );
  }, [Cost_Amt]);

  const ststusTab = useMemo(() => {
    return (
      <Col xs>
        <div className="good_fair_price">
          <span
            className={
              StockStatus === 'AVAILABLE'
                ? 'available'
                : StockStatus === 'ONHOLD'
                ? 'on_hold'
                : StockStatus === 'ONMEMO'
                ? 'on_memmo'
                : ''
            }
          >
            {StockStatus}
          </span>
        </div>
      </Col>
    );
  }, [StockStatus]);
  const renderRow = useMemo(() => {
    return (
      <div className="product_box" key={`diamond_list_view_${key}`}>
        <div className="product_img">
          {imageTab}
          {watchListTab}
        </div>
        <div className="product_info">
          <div className="product_title">
            {diamondDetailTab}
            {checkBoxTab}
          </div>
          <Row className="g-2">
            {priceTab}
            {ststusTab}
          </Row>
        </div>
      </div>
    );
  }, [
    key,
    imageTab,
    watchListTab,
    diamondDetailTab,
    checkBoxTab,
    priceTab,
    ststusTab,
  ]);
  return <>{renderRow}</>;
};

export default memo(DiamondGridViewTable);
