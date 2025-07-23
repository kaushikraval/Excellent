import React, { useCallback } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import RangeSlider from 'react-range-slider-input';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import { useDispatch } from 'react-redux';
import { getJewelleryFilterData } from 'Components/Redux/reducers/jewellery.slice';
import _ from 'lodash';
import { disableCalcuSymbol } from 'Helper/CommonHelper';
import ResetIcon from '../../Assets/Images/reset.svg';

export default function JewelleryFilter({
  jewelleryBaseMetal,
  jewelleryFilterData,
  setJewelleryFilterData,
  jewelleryFilterCategory,
  jewelleryParameterDetail,
  initialValuesForJewellerySearch,
}) {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback(
    async J_MasterTypeValue_Id => {
      let jMasterTypeValue_IdValue = '';
      if (jewelleryFilterData.type_ID === J_MasterTypeValue_Id) {
        jMasterTypeValue_IdValue = '';
        setJewelleryFilterData(prevState => ({
          ...prevState,
          type_ID: '',
          sub_Type_ID: [],
        }));
      } else {
        jMasterTypeValue_IdValue = J_MasterTypeValue_Id;
        setJewelleryFilterData(prevState => ({
          ...prevState,
          type_ID: J_MasterTypeValue_Id,
          sub_Type_ID: [],
        }));
      }
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterData,
          type_ID: jMasterTypeValue_IdValue,
          sub_Type_ID: [],
        }),
      );
    },
    [dispatch, jewelleryFilterData, setJewelleryFilterData],
  );

  const onSelectSubCategory = useCallback(
    (isChecked, J_MasterSubTypeValue_Id) => {
      let productTypeIdArr = [...jewelleryFilterData.sub_Type_ID];
      if (isChecked) {
        if (productTypeIdArr.includes(J_MasterSubTypeValue_Id)) {
          productTypeIdArr = productTypeIdArr.filter(
            item2 => item2 !== J_MasterSubTypeValue_Id,
          );
        } else {
          productTypeIdArr = [...productTypeIdArr, J_MasterSubTypeValue_Id];
        }
      } else {
        productTypeIdArr = productTypeIdArr.filter(
          v => v !== J_MasterSubTypeValue_Id,
        );
      }
      setJewelleryFilterData(prevState => ({
        ...prevState,
        sub_Type_ID: productTypeIdArr,
      }));
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterData,
          sub_Type_ID: productTypeIdArr,
        }),
      );
    },
    [dispatch, jewelleryFilterData, setJewelleryFilterData],
  );

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
          priceF: value[0],
          priceT: value[1],
        }),
      );
    },
    [dispatch],
  );

  const debounceHandlePriceTextChange = React.useCallback(
    _.debounce(handlePriceSearchChange, 800),
    [],
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

  const onShapeSelectChange = useCallback(
    (e, shapeObj) => {
      let shapeIdArr = [...jewelleryFilterData.shape_ID];
      if (e.target.checked) {
        if (shapeIdArr.includes(shapeObj.MasterTypeValue_Id)) {
          shapeIdArr = shapeIdArr.filter(
            item2 => item2 !== shapeObj.MasterTypeValue_Id,
          );
        } else {
          shapeIdArr = [...shapeIdArr, shapeObj.MasterTypeValue_Id];
        }
      } else {
        shapeIdArr = shapeIdArr.filter(v => v !== shapeObj.MasterTypeValue_Id);
      }
      setJewelleryFilterData(prevState => ({
        ...prevState,
        shape_ID: shapeIdArr,
      }));
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterData,
          shape_ID: shapeIdArr,
        }),
      );
    },
    [dispatch, jewelleryFilterData, setJewelleryFilterData],
  );

  const onSelectMetalHandler = useCallback(
    (isChecked, GoldType_Id) => {
      let metalTypeArr = [...jewelleryFilterData.metal_type];
      if (isChecked) {
        if (metalTypeArr.includes(GoldType_Id)) {
          metalTypeArr = metalTypeArr.filter(item2 => item2 !== GoldType_Id);
        } else {
          metalTypeArr = [...metalTypeArr, GoldType_Id];
        }
      } else {
        metalTypeArr = metalTypeArr.filter(v => v !== GoldType_Id);
      }
      setJewelleryFilterData(prevState => ({
        ...prevState,
        metal_type: metalTypeArr,
      }));
      dispatch(
        getJewelleryFilterData({
          ...jewelleryFilterData,
          metal_type: metalTypeArr,
        }),
      );
    },
    [dispatch, jewelleryFilterData, setJewelleryFilterData],
  );

  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);

  const handlClearFilter = useCallback(() => {
    setJewelleryFilterData(initialValuesForJewellerySearch);
    dispatch(getJewelleryFilterData(initialValuesForJewellerySearch));
  }, [dispatch, initialValuesForJewellerySearch, setJewelleryFilterData]);

  return (
    <div className="jewellery_filter">
      <h5>
        Filter{' '}
        <span onClick={handlClearFilter}>
          <img src={ResetIcon} alt="reset-icon" />
        </span>
      </h5>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <Accordion
              className="inner_accordian"
              activeKey={
                jewelleryFilterData?.type_ID
                  ? jewelleryFilterData.type_ID.toString()
                  : ''
              }
            >
              {jewelleryFilterCategory?.map((item, index) => {
                return (
                  <Accordion.Item
                    key={`category_${index}`}
                    eventKey={item.J_MasterTypeValue_Id.toString()}
                  >
                    <Accordion.Header
                      className={
                        jewelleryFilterData.type_ID ===
                        item.J_MasterTypeValue_Id
                          ? 'active'
                          : ''
                      }
                      onClick={() =>
                        onSelectCategory(item.J_MasterTypeValue_Id)
                      }
                    >
                      {item.MasterTypeValue_Code}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="common_checkbox_wrapper">
                        {item?.SubType?.map((subItem, subIndex) => {
                          return (
                            <Form.Check
                              type="checkbox"
                              key={`sub_category_${subIndex}`}
                              name="product_Type_ID"
                              id={subItem.J_MasterSubTypeValue_Id}
                              label={subItem.MasterSubTypeValue}
                              readOnly
                              checked={jewelleryFilterData?.sub_Type_ID?.includes(
                                subItem.J_MasterSubTypeValue_Id,
                              )}
                              onClick={e =>
                                onSelectSubCategory(
                                  e.target.checked,
                                  subItem.J_MasterSubTypeValue_Id,
                                )
                              }
                            />
                          );
                        })}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <RangeSlider
              value={[jewelleryFilterData.priceF, jewelleryFilterData.priceT]}
              min={0}
              max={1000000}
              onInput={e => {
                onChangePriceHandler(e);
                debounceHandlePriceTextChange(e, jewelleryFilterData);
              }}
            />
            <div className="range_value d-flex justify-content-between align-content-center">
              <div className="from_wrap w-50">
                <input
                  type="number"
                  className="value"
                  value={
                    jewelleryFilterData?.priceF ? jewelleryFilterData.priceF : 0
                  }
                  onKeyDown={disableCalcuSymbol}
                  onChange={e => {
                    const value = Number(e.target.value) || 0;
                    if (value >= 0 && value <= 100000) {
                      setJewelleryFilterData(prevState => ({
                        ...prevState,
                        priceF: value,
                      }));
                      debounceHandlePriceTextChange(
                        [value, jewelleryFilterData.priceT],
                        jewelleryFilterData,
                      );
                    }
                  }}
                />
                <span className="doller_sign">$</span>
              </div>
              <div className="from_wrap to_wrap w-50">
                <input
                  type="number"
                  className="value"
                  value={
                    jewelleryFilterData?.priceT ? jewelleryFilterData.priceT : 0
                  }
                  onKeyDown={disableCalcuSymbol}
                  onChange={e => {
                    const value = Number(e.target.value) || 0;
                    if (value >= 0 && value <= 100000) {
                      setJewelleryFilterData(prevState => ({
                        ...prevState,
                        priceT: value,
                      }));
                      debounceHandlePriceTextChange(
                        [jewelleryFilterData.priceF, value],
                        jewelleryFilterData,
                      );
                    }
                  }}
                />
                <span className="doller_sign">$</span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Gold Weight</Accordion.Header>
          <Accordion.Body>
            <RangeSlider
              value={[jewelleryFilterData.weightF, jewelleryFilterData.weightT]}
              min={0}
              max={100}
              onInput={e => {
                onChangeWeightHandler(e);
                debounceHandleWeightTextChange(e, jewelleryFilterData);
              }}
            />
            <div className="range_value d-flex justify-content-between align-content-center">
              <div className="from_wrap w-50">
                <input
                  type="text"
                  className="value"
                  value={
                    jewelleryFilterData?.weightF
                      ? jewelleryFilterData.weightF
                      : 0
                  }
                  onKeyDown={disableCalcuSymbol}
                  onChange={e => {
                    const value = Number(e.target.value) || 0;
                    if (value >= 0 && value <= 100) {
                      setJewelleryFilterData(prevState => ({
                        ...prevState,
                        weightF: value,
                      }));
                      debounceHandleWeightTextChange(
                        [value, jewelleryFilterData.weightT],
                        jewelleryFilterData,
                      );
                    }
                  }}
                />
                <span className="doller_sign">$</span>
              </div>
              <div className="from_wrap to_wrap w-50">
                <input
                  type="text"
                  className="value"
                  value={
                    jewelleryFilterData?.weightT
                      ? jewelleryFilterData.weightT
                      : 0
                  }
                  onKeyDown={disableCalcuSymbol}
                  onChange={e => {
                    const value = Number(e.target.value) || 0;
                    if (value >= 0 && value <= 100) {
                      setJewelleryFilterData(prevState => ({
                        ...prevState,
                        weightT: value,
                      }));
                      debounceHandleWeightTextChange(
                        [jewelleryFilterData.weightF, value],
                        jewelleryFilterData,
                      );
                    }
                  }}
                />
                <span className="doller_sign">$</span>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Shape</Accordion.Header>
          <Accordion.Body>
            <div className="filter_shape_checkbox shape_select jewellery_shape_wrapper">
              <ul>
                {jewelleryParameterDetail?.shapeList?.map((shapeObj, index) => {
                  return (
                    <li key={`shape_li_${index}`}>
                      <div className="custom_checkbox_shape">
                        <input
                          type="checkbox"
                          id={shapeObj.MasterTypeValue_Code}
                          name={shapeObj.MasterTypeValue_Code}
                          key={`shape_${index}`}
                          checked={jewelleryFilterData?.shape_ID?.includes(
                            shapeObj.MasterTypeValue_Id,
                          )}
                          readOnly
                          onClick={e => onShapeSelectChange(e, shapeObj)}
                        />
                        <label htmlFor={shapeObj.MasterTypeValue_Code}>
                          <span>
                            <img
                              src={`${
                                process.env.REACT_APP_DOMAIN
                              }/Content/DomainData/${
                                process.env.REACT_APP_DOMAIN_WITHOUT_HTTP
                              }/img/Diamonds/Active/${shapeObj.MasterTypeValue_Code?.replaceAll(
                                ' ',
                                '',
                              )}.svg`}
                              alt={shapeObj.MasterTypeValue_Code}
                              onError={handleImageError}
                            />
                            <h5>{shapeObj.MasterTypeValue_Code}</h5>
                          </span>
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="4" className="pb0">
          <Accordion.Header>Metal</Accordion.Header>
          <Accordion.Body>
            <div className="common_checkbox_wrapper">
              {jewelleryBaseMetal?.map((metal, index) => {
                return (
                  <Form.Check
                    type="checkbox"
                    key={`metal_${index}`}
                    name="metal_type"
                    id={`metal_${metal.GoldType_Id}`}
                    label={`${metal.PurityValueName} ${metal.ColorValueName}`}
                    readOnly
                    checked={jewelleryFilterData.metal_type.includes(
                      metal.GoldType_Id,
                    )}
                    onClick={e =>
                      onSelectMetalHandler(e.target.checked, metal.GoldType_Id)
                    }
                  />
                );
              })}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
