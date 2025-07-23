import React, { memo, useEffect, useRef, useState } from 'react';
import SVGInject from '@iconfu/svg-inject';
import { Button, Form } from 'react-bootstrap';
import ResetIcon from '../Assets/Images/reset.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  setIsFancyColor,
  setIsModifySearchForDiamond,
  setSearchDiamondSavedData,
} from './Redux/reducers/dashboard.slice';
import { disableCalcuSymbol } from 'Helper/CommonHelper';
import ShapeList from './Diamond/DiamondSearch/ShapeList';
import PriceList from './Diamond/DiamondSearch/PriceList';
import CaratList from './Diamond/DiamondSearch/CaratList';
import ColorList from './Diamond/DiamondSearch/ColorList';
import ClarityList from './Diamond/DiamondSearch/ClarityList';
import CertificateList from './Diamond/DiamondSearch/CertificateList';
import FluorescenceList from './Diamond/DiamondSearch/FluorescenceList';
import MakeList from './Diamond/DiamondSearch/MakeList';
import { useNavigate } from 'react-router-dom';
import { setDiamondType } from './Redux/reducers/offlineList.slice';
import {
  getPayload,
  initialValuesForDiamondSearch,
} from './../Helper/CommonHelper';

function QuickSearchDiamond({ diamondFilterDetail }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quickSearchRef = useRef(null);
  const { isColorType, searchDiamondSavedData } = useSelector(
    ({ dashboard }) => dashboard,
  );
  const { diamondType } = useSelector(({ offlineList }) => offlineList);
  const { diamondDetailListLoading } = useSelector(({ common }) => common);
  const [diamondFilterData, setDiamondFilterData] = useState(null);
  const [weightToggle, setWeightToggle] = useState(false);
  const initialValues = {
    ...initialValuesForDiamondSearch,
    colorType: isColorType,
    diamondType: diamondType,
  };
  const [serchDiamondFinalValue, setSerchDiamondFinalValue] =
    useState(initialValues);

  useEffect(() => {
    let slider = [];
    document.querySelector('.scroll_wrapper') &&
      slider.push(document.querySelector('.scroll_wrapper'));
    document.querySelector('.scroll_wrapper0') &&
      slider.push(document.querySelector('.scroll_wrapper0'));
    document.querySelector('.scroll_wrapper1') &&
      slider.push(document.querySelector('.scroll_wrapper1'));
    document.querySelector('.scroll_wrapper2') &&
      slider.push(document.querySelector('.scroll_wrapper2'));
    document.querySelector('.scroll_wrapper3') &&
      slider.push(document.querySelector('.scroll_wrapper3'));
    document.querySelector('.scroll_wrapper4') &&
      slider.push(document.querySelector('.scroll_wrapper4'));
    document.querySelector('.scroll_wrapper5') &&
      slider.push(document.querySelector('.scroll_wrapper5'));
    document.querySelector('.scroll_wrapper6') &&
      slider.push(document.querySelector('.scroll_wrapper6'));
    document.querySelector('.scroll_wrapper7') &&
      slider.push(document.querySelector('.scroll_wrapper7'));
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.map(item => {
      item.addEventListener('mousedown', e => {
        isDown = true;
        item.classList.add('active');
        startX = e.pageX - item.offsetLeft;
        scrollLeft = item.scrollLeft;
      });
      item.addEventListener('mouseleave', () => {
        isDown = false;
        item.classList.remove('active');
      });
      item.addEventListener('mouseup', () => {
        isDown = false;
        item.classList.remove('active');
      });
      item.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - item.offsetLeft;
        const walk = (x - startX) * 1;
        item.scrollLeft = scrollLeft - walk;
      });
    });
  }, []);

  useEffect(() => {
    if (Object.keys(diamondFilterDetail)?.length > 0) {
      setDiamondFilterData(diamondFilterDetail);
    }
  }, [diamondFilterDetail]);

  useEffect(() => {
    SVGInject(document.querySelectorAll('img.injectable'));
  }, [diamondFilterData?.shapeList]);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={serchDiamondFinalValue}
      innerRef={quickSearchRef}
      onSubmit={values => {
        dispatch(setIsModifySearchForDiamond(true));
        let newObj = getPayload(values);
        dispatch(
          setSearchDiamondSavedData({
            ...newObj,
            checkboxId: values.checkboxId,
          }),
        );
        navigate('/diamond');
      }}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <div className="quick_search_inner">
            <div className="search_inner_wrap">
              <div className="check_input_wraper">
                <ul>
                  <li>
                    <div className="checkbox_wrapper radio_wrapper">
                      <Form.Check
                        type="radio"
                        name="diamondType"
                        id="LabGrownDiamond"
                        readOnly
                        label="Lab Grown Diamond"
                        checked={values.diamondType === 'LABGROWN'}
                        onClick={() => {
                          if (values.diamondType !== 'LABGROWN') {
                            quickSearchRef &&
                              quickSearchRef.current.resetForm();
                            setDiamondFilterData(diamondFilterDetail);
                            dispatch(setSearchDiamondSavedData(''));
                            handleChange('diamondType')('LABGROWN');
                            dispatch(setDiamondType('LABGROWN'));
                          }
                        }}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="checkbox_wrapper radio_wrapper">
                      <Form.Check
                        type="radio"
                        name="diamondType"
                        id="NaturalDiamond"
                        readOnly
                        label="Natural Diamond"
                        checked={values.diamondType === 'NATURAL'}
                        onClick={() => {
                          if (values.diamondType !== 'NATURAL') {
                            quickSearchRef &&
                              quickSearchRef.current.resetForm();
                            setDiamondFilterData(diamondFilterDetail);
                            dispatch(setSearchDiamondSavedData(''));
                            handleChange('diamondType')('NATURAL');
                            dispatch(setDiamondType('NATURAL'));
                          }
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <ShapeList
              values={values}
              dispatch={dispatch}
              setFieldValue={setFieldValue}
              diamondFilterData={diamondFilterData}
              setDiamondFilterData={setDiamondFilterData}
              searchDiamondSavedData={searchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
            />
            <PriceList
              dispatch={dispatch}
              values={values}
              handleChange={handleChange}
              disableCalcuSymbol={disableCalcuSymbol}
              searchDiamondSavedData={searchDiamondSavedData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
            />
            <CaratList
              dispatch={dispatch}
              values={values}
              weightToggle={weightToggle}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              setWeightToggle={setWeightToggle}
              diamondFilterData={diamondFilterData}
              disableCalcuSymbol={disableCalcuSymbol}
              setDiamondFilterData={setDiamondFilterData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              searchDiamondSavedData={searchDiamondSavedData}
            />
            <ColorList
              dispatch={dispatch}
              values={values}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
              diamondFilterData={diamondFilterData}
              setIsFancyColor={setIsFancyColor}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              searchDiamondSavedData={searchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
              setDiamondFilterData={setDiamondFilterData}
            />
            <ClarityList
              dispatch={dispatch}
              values={values}
              setFieldValue={setFieldValue}
              diamondFilterData={diamondFilterData}
              setDiamondFilterData={setDiamondFilterData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              searchDiamondSavedData={searchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
            />
            <CertificateList
              dispatch={dispatch}
              values={values}
              setFieldValue={setFieldValue}
              diamondFilterData={diamondFilterData}
              setDiamondFilterData={setDiamondFilterData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              searchDiamondSavedData={searchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
            />
            <MakeList
              dispatch={dispatch}
              values={values}
              setFieldValue={setFieldValue}
              diamondFilterData={diamondFilterData}
              setDiamondFilterData={setDiamondFilterData}
              searchDiamondSavedData={searchDiamondSavedData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
            />
            <FluorescenceList
              dispatch={dispatch}
              values={values}
              setFieldValue={setFieldValue}
              diamondFilterData={diamondFilterData}
              setDiamondFilterData={setDiamondFilterData}
              setSearchDiamondSavedData={setSearchDiamondSavedData}
              searchDiamondSavedData={searchDiamondSavedData}
              diamondDetailListLoading={diamondDetailListLoading}
            />
            <div className="search_button_wrap">
              <Button
                variant="outline-primary"
                className="rounded-pill mr20"
                onClick={() => {
                  quickSearchRef && quickSearchRef.current.resetForm();
                  setDiamondFilterData(diamondFilterDetail);
                  setSerchDiamondFinalValue(initialValues);
                  dispatch(setSearchDiamondSavedData(''));
                  handleChange('diamondType')(diamondType);
                }}
              >
                <img src={ResetIcon} alt="" /> Reset Filter
              </Button>
              <Button type="submit" variant="primary" className="rounded-pill">
                Search
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default memo(QuickSearchDiamond);
