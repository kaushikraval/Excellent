import React, { useCallback } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import CartIcon from '../../Assets/Images/cart.svg';
import PlusIcon from '../../Assets/Images/plusicon.svg';
import Composition from '../../Assets/Images/Jewellery/composition.svg';
import Composition2 from '../../Assets/Images/Jewellery/composition2.svg';
import General from '../../Assets/Images/Jewellery/general.svg';
import { useDispatch } from 'react-redux';
import { addToCartJewellery } from 'Components/Redux/reducers/jewellery.slice';
import { addToCartListInLocalJewelery } from 'Components/Redux/reducers/offlineList.slice';
import { useNavigate } from 'react-router-dom';

export default function JewelleryInfo({ jewelleryDetailData, userData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartJewelleryList = useCallback(
    jewelleryItem => {
      const obj = {
        Stock_ID: jewelleryItem?.DiamondDetail?.Stock_ID
          ? jewelleryItem.DiamondDetail.Stock_ID
          : '',
        userId: userData?.UserID ? userData.UserID : 0,
        Diamond_Type: jewelleryItem?.DiamondDetail?.Diamond_Type
          ? jewelleryItem.DiamondDetail.Diamond_Type
          : '',
        Jewellery_For_ID: jewelleryItem?.JewelleryDetail?.Jewellery_For_ID
          ? jewelleryItem.JewelleryDetail.Jewellery_For_ID
          : 0,
        Metal_ID: jewelleryItem?.JewelleryDetail?.Metal_ID
          ? jewelleryItem.JewelleryDetail.Metal_ID
          : 0,
        Sale_Rate: jewelleryItem?.JewelleryDetail?.Sale_Rate
          ? jewelleryItem.JewelleryDetail.Sale_Rate
          : '',
        WithStone: jewelleryItem?.JewelleryDetail?.WithStone
          ? jewelleryItem.JewelleryDetail.WithStone
          : 0,
        Total_Extra_Metal_Weight: jewelleryItem?.JewelleryDetail
          ?.Total_Extra_Metal_Weight
          ? jewelleryItem.JewelleryDetail.Total_Extra_Metal_Weight
          : 0,
        Jewellery_No: jewelleryDetailData?.JewelleryDetail?.Jewellery_No || '',
        Jewellery_Name:
          jewelleryDetailData?.JewelleryDetail?.Jewellery_Name || '',
        Img_Video_Url:
          jewelleryItem?.ImagesAndVideos?.length > 0
            ? jewelleryItem?.ImagesAndVideos[0]?.Img_Video_Url || ''
            : '',
        Shape: jewelleryItem?.DiamondDetail?.Shape || '',
        Metal_PurityColor:
          jewelleryItem?.JewelleryDetail?.Metal_PurityColor || '',
        Type: jewelleryItem?.JewelleryDetail?.Type || '',
      };
      if (userData?.UserID) {
        dispatch(
          addToCartJewellery({
            ...obj,
            userId: userData?.UserID,
            isOnlyJewellery: true,
          }),
        );
      } else {
        dispatch(
          addToCartListInLocalJewelery({
            jeweleryList: { ...obj, isOnlyJewellery: true },
          }),
        );
      }
    },
    [dispatch, userData],
  );
  return (
    <Row>
      <Col xl={12}>
        <div className="jewellery_price_wrapper jewellery_detail_right">
          <h5 className="fs_20 mb20 text_dark">
            {jewelleryDetailData?.JewelleryDetail?.Jewellery_Name
              ? jewelleryDetailData.JewelleryDetail.Jewellery_Name
              : ''}{' '}
            {jewelleryDetailData?.JewelleryDetail?.Metal_PurityColor
              ? jewelleryDetailData.JewelleryDetail.Metal_PurityColor
              : ''}{' '}
            Gold (
            {jewelleryDetailData?.JewelleryDetail?.Total_Metal_Weight
              ? jewelleryDetailData?.JewelleryDetail.Total_Metal_Weight
              : 0}{' '}
            Ct.)
          </h5>
          <h4 className="fw_700 mb20 text_primary">
            $
            {jewelleryDetailData?.JewelleryDetail?.Sale_Rate
              ? jewelleryDetailData.JewelleryDetail.Sale_Rate?.toFixed(2)
              : 0}
          </h4>
          {window.location.pathname === '/choose-your-setting-detail' && (
            <div className="ring_size mb25">
              <h6 className="fs_16 mb15 text_light">Ring Size</h6>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className="form_group"
              >
                <Form.Select aria-label="Default select example">
                  <option value="1">Select Size</option>
                  <option value="2">6</option>
                  <option value="2">6.5</option>
                  <option value="2">7</option>
                  <option value="2">7.5</option>
                  <option value="2">8</option>
                  <option value="2">8.5</option>
                  <option value="2">9</option>
                  <option value="2">9.5</option>
                </Form.Select>
              </Form.Group>
            </div>
          )}
          <div className="mb20 detail_wrap">
            <h6 className="mb10">
              <img src={Composition} className="mr5" alt="" />
              Product Details
            </h6>
            <ul>
              <li>
                Sku Number :
                <span>
                  {' '}
                  {jewelleryDetailData?.JewelleryDetail?.Jewellery_No
                    ? jewelleryDetailData.JewelleryDetail.Jewellery_No
                    : ''}
                </span>
              </li>
              <li>
                Metal :
                <span>
                  {jewelleryDetailData?.JewelleryDetail?.Metal_PurityColor
                    ? jewelleryDetailData.JewelleryDetail.Metal_PurityColor
                    : ''}{' '}
                  Gold
                </span>
              </li>
              <li>
                Size :
                <span>
                  {jewelleryDetailData?.JewelleryDetail?.Jewellery_Size
                    ? jewelleryDetailData.JewelleryDetail.Jewellery_Size
                    : 0}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb20 detail_wrap">
            <h6 className="mb10">
              <img src={Composition2} className="mr5" alt="" />
              Diamond Information
            </h6>
            <ul>
              <li>
                Diamond Type :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Diamond_Type
                    ? jewelleryDetailData.DiamondDetail.Diamond_Type
                    : ''}
                </span>
              </li>
              <li>
                Diamond Shape :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Shape
                    ? jewelleryDetailData.DiamondDetail.Shape
                    : ''}
                </span>
              </li>
              {/*   <li>
                Diamond Size :<span>1.30 - 1.40</span>
              </li> */}
              <li>
                Approximate Carat Weight :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Weight
                    ? jewelleryDetailData.DiamondDetail.Weight
                    : 0}{' '}
                  Carat
                </span>
              </li>
              <li>
                Average Color :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Color
                    ? jewelleryDetailData.DiamondDetail.Color
                    : ''}
                </span>
              </li>
              <li>
                Clarity :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Clarity
                    ? jewelleryDetailData.DiamondDetail.Clarity
                    : ''}
                </span>
              </li>
              <li>
                Number Of Diamonds :
                <span>
                  {jewelleryDetailData?.DiamondDetail?.Pcs
                    ? jewelleryDetailData.DiamondDetail.Pcs
                    : 0}
                </span>
              </li>
            </ul>
          </div>
          <div className="description_wrapper">
            <h5>Description</h5>
            {jewelleryDetailData?.Descriptions?.map((item, index) => {
              return <p key={`description_${index}`}>{item.Description}</p>;
            })}
          </div>
          {/* <div className="ring_size">
            <h6 className="fs_16 mb15 text_light">Ring Size</h6>
            <ul className="size_Radio">
              <li>
                <div className="custom_radio">
                  <input type="radio" id="6" name="size" />
                  <label htmlFor="6">6</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="6.5" name="size" />
                  <label htmlFor="6.5">6.5</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="7" name="size" />
                  <label htmlFor="7">7</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="7.5" name="size" />
                  <label htmlFor="7.5">7.5</label>
                </div>
              </li>
              <li>
                <div className="custom_radio">
                  <input type="radio" id="8" name="size" />
                  <label htmlFor="8">8</label>
                </div>
              </li>
            </ul>
          </div> */}
          <ul className="action_button_wrap d-flex align-items-center mt25">
            {window.location.pathname === '/choose-your-setting-detail' ? (
              <li className="mr10">
                <Button
                  variant="primary"
                  className="rounded-pill px20 btn_shadow"
                  onClick={() => navigate('/view-completed')}
                >
                  <img src={PlusIcon} className="white_img" alt="" />
                  Choose This Setting
                </Button>
              </li>
            ) : (
              <li className="mr10">
                <Button
                  variant="primary"
                  className="rounded-pill px20 btn_shadow"
                  onClick={() => addToCartJewelleryList(jewelleryDetailData)}
                >
                  <img src={CartIcon} className="white_img" alt="" />
                  Add To Cart
                </Button>
              </li>
            )}

            {/* <li className="mr10">
              <Button
                variant="outline-primary"
                className="rounded-circle btn_round p0"
              >
                <img src={HeartIcon} className="mr0" alt="" />
              </Button>
            </li> */}
          </ul>
        </div>
      </Col>
      {/* <Col xl={7}>
        <div className="jewellery_detail_right">
          <h5>Detail</h5>
          <div className="mb20">
            <h6 className="mb5">
              <img src={Composition} className="mr5" alt="" />
              Composition
            </h6>
            <ul>
              <li>
                Stone Group :<span>Gemstone</span>
              </li>
              <li>
                Metal :<span>14K white gold</span>
              </li>
            </ul>
          </div>
          <div className="mb20">
            <h6 className="mb5">
              <img src={Composition2} className="mr5" alt="" />
              Composition
            </h6>
            <ul>
              <li>
                Stone :<span>moissanite</span>
              </li>
              <li>
                Stone Shape :<span>Emrald</span>
              </li>
              <li>
                Stone Cut :<span>brilliant/full</span>
              </li>
              <li>
                Stone Color :<span>Colorless</span>
              </li>
              <li>
                Multi center stone :<span>no</span>
              </li>
            </ul>
          </div>
          <div className="mb0">
            <h6 className="mb5">
              <img src={General} className="mr5" alt="" /> General
            </h6>
            <ul>
              <li>
                Item width :<span>18.00 mm</span>
              </li>
              <li>
                online exclusive :<span>no</span>
              </li>
              <li>
                minimum size :<span>6.0</span>
              </li>
              <li>
                maximum size :<span>8.0</span>
              </li>
              <li>
                sku :<span>2571312-7.5</span>
              </li>
            </ul>
          </div>
        </div>
      </Col> */}
    </Row>
  );
}
