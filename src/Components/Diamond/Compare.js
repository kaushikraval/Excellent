import React, { useCallback, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import CloseIcon from '../../Assets/Images/close-btn.svg';
import { useDispatch, useSelector } from 'react-redux';
import NoImageAvailable from 'Assets/Images/notfound2.png';
import recordsNotFound from '../../Assets/Images/records-not-found.jpg';
import {
  setDiamondType,
  removeFromCompareListInLocal,
} from 'Components/Redux/reducers/offlineList.slice';
import {
  removeToCompareList,
  setIsAddToCompareList,
  getCompareList,
} from 'Components/Redux/reducers/myAccount.slice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Compare() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { userData } = useSelector(({ auth }) => auth);
  const { diamondType, compareDiamondList } = useSelector(
    ({ offlineList }) => offlineList,
  );
  const { compareStockList, isAddToCompareList, compareListLoading } =
    useSelector(({ myAccount }) => myAccount);
  useEffect(() => {
    if (Object.keys(userData)?.length > 0 && diamondType) {
      dispatch(
        getCompareList({ UserID: userData?.UserID, Diamond_Type: diamondType }),
      );
    }
  }, [dispatch, userData, diamondType]);

  useEffect(() => {
    if (isAddToCompareList && userData?.UserID) {
      dispatch(
        getCompareList({ UserID: userData?.UserID, Diamond_Type: diamondType }),
      );
      dispatch(setIsAddToCompareList(false));
    }
  }, [dispatch, isAddToCompareList, userData]);

  const compareListData = useMemo(() => {
    if (userData?.UserID) {
      return compareStockList;
    } else {
      if (diamondType === 'LABGROWN') {
        return compareDiamondList.labGrownDiamond;
      } else if (diamondType === 'NATURAL') {
        return compareDiamondList.naturalDiamond;
      } else return [];
    }
  }, [userData, compareDiamondList, compareStockList, diamondType]);

  useEffect(() => {
    const slider = document.querySelector('.compare_list_wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider) {
      slider.addEventListener('mousedown', e => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }, [compareListData]);
  const onRemoveFormCompare = useCallback(
    diamond => {
      if (diamond) {
        if (userData?.UserID) {
          dispatch(
            removeToCompareList({
              StockIDs: diamond?.Stock_ID,
              CustomerID: userData?.UserID,
              diamondType: diamondType,
            }),
          );
        } else {
          dispatch(
            removeFromCompareListInLocal({
              diamondCompareObj: diamond,
              diamondType: diamond?.Diamond_Type,
            }),
          );
        }
      }
    },
    [dispatch, userData, diamondType],
  );
  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);

  return (
    <main>
      <section className="compare_wrapper pb100 pb80-lg pb50-md">
        <Container>
          <h2 className="text-center mb25 h3">Compare Table</h2>
          <div className="check_input_wraper mb25">
            <ul>
              <li>
                <div className="checkbox_wrapper radio_wrapper">
                  <Form.Check
                    type="radio"
                    name="diamondType"
                    id="LabGrownDiamond"
                    readOnly
                    label="Lab Grown Diamond"
                    checked={diamondType === 'LABGROWN'}
                    onClick={() => {
                      if (diamondType !== 'LABGROWN') {
                        dispatch(setDiamondType('LABGROWN'));
                      }
                    }}
                    disabled={compareListLoading}
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
                    checked={diamondType === 'NATURAL'}
                    onClick={() => {
                      if (diamondType !== 'NATURAL') {
                        dispatch(setDiamondType('NATURAL'));
                      }
                    }}
                    disabled={compareListLoading}
                  />
                </div>
              </li>
            </ul>
          </div>
          {compareListData?.length > 0 && (
            <div className="compare_inner_wrapper">
              <div className="comapre_title_box">
                <div className="compare_box">
                  <h6>Grading</h6>
                  <ul>
                    <li>Diamond Shape</li>
                    <li>Carat Size</li>
                    <li>Color</li>
                    <li>Clarity</li>
                    <li>Cut</li>
                    <li>Polish</li>
                  </ul>
                  <h6>Advanced</h6>
                  <ul>
                    <li>Symmetry</li>
                    <li>Flourescence</li>
                    <li>Depth</li>
                    <li>Lab</li>
                    {/* <li>Fancy</li> */}
                    <li>Girdle%</li>
                    <li>Crown</li>
                    <li>Pavillion</li>
                    <li>Culet</li>
                    <li>Shade</li>
                    <li>H&A</li>
                    <li>LowerHalve</li>
                    <li>Tinge</li>
                    <li>Milky</li>
                    <li>Eyeclean</li>
                    <li>Key To Symbol</li>
                    <li>Comment</li>
                  </ul>
                  <h6>Inclusion</h6>
                  <ul>
                    <li>BIS</li>
                    <li>BIC</li>
                    <li>WIS</li>
                    <li>WIC</li>
                    <li>Inclusion</li>
                  </ul>
                </div>
              </div>
              <div className="compare_list_wrapper">
                {compareListData?.map(diamond => {
                  return (
                    <>
                      <div className="compare_box">
                        <div className="compare_head">
                          <h5>#{diamond?.Stone_No}</h5>
                          <img
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => onRemoveFormCompare(diamond)}
                          />
                        </div>
                        <div className="compare_img">
                          <img
                            src={
                              diamond?.Stone_Img_url
                                ? diamond.Stone_Img_url
                                : NoImageAvailable
                            }
                            onError={handleImageError}
                            alt=""
                          />
                        </div>
                        <h6>
                          <span>Grading</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Diamond Shape</span>
                            {diamond?.Shape ? diamond.Shape : '-'}
                          </li>
                          <li>
                            <span>Carat Size</span>
                            {diamond?.Weight ? diamond.Weight : '-'}
                          </li>
                          <li>
                            <span>Color</span>
                            {diamond?.Color ? diamond.Color : '-'}
                          </li>
                          <li>
                            <span>Clarity</span>
                            {diamond?.Clarity ? diamond.Clarity : '-'}
                          </li>
                          <li>
                            <span>Cut</span>
                            {diamond?.Cut ? diamond.Cut : '-'}
                          </li>
                          <li>
                            <span>Polish</span>
                            {diamond?.Polish ? diamond.Polish : '-'}
                          </li>
                        </ul>
                        <h6>
                          <span>Advanced</span>
                        </h6>
                        <ul>
                          <li>
                            <span>Symmetry</span>
                            {diamond?.Symm ? diamond.Symm : '-'}
                          </li>
                          <li>
                            <span>Flourescence</span>
                            {diamond?.FlrIntens ? diamond.FlrIntens : '-'}
                          </li>
                          <li>
                            <span>Depth</span>
                            {diamond?.Total_Depth ? diamond.Total_Depth : '-'}
                          </li>
                          <li>
                            <span>Lab</span>
                            {diamond?.Lab ? diamond.Lab : '-'}
                          </li>
                          {/* <li>
                          <span>Fancy</span>IGI
                        </li> */}
                          <li>
                            <span>Girdle%</span>
                            {diamond?.Girdle_Per ? diamond.Girdle_Per : '-'}
                          </li>
                          <li>
                            <span>Crown</span>
                            {diamond?.CrownAngle ? diamond.CrownAngle : '-'}
                          </li>
                          <li>
                            <span>Pavillion</span>
                            {diamond?.PavillionAngle
                              ? diamond.PavillionAngle
                              : '-'}
                          </li>
                          <li>
                            <span>Culet</span>
                            {diamond?.CuletSize ? diamond.CuletSize : '-'}
                          </li>
                          <li>
                            <span>Shade</span>
                            {diamond?.Shade ? diamond.Shade : '-'}
                          </li>
                          <li>
                            <span>H&A</span>
                            {diamond?.HnA ? diamond.HnA : '-'}
                          </li>
                          <li>
                            <span>LowerHalve</span>
                            {diamond?.LowerHalve ? diamond.LowerHalve : '-'}
                          </li>
                          <li>
                            <span>Tinge</span>
                            {diamond?.Tinge ? diamond.Tinge : '-'}
                          </li>
                          <li>
                            <span>Milky</span>
                            {diamond?.Milkey ? diamond.Milkey : '-'}
                          </li>
                          <li>
                            <span>Eyeclean</span>
                            {diamond?.Eyeclean ? diamond.Eyeclean : '-'}
                          </li>
                          <li>
                            <span>Key To Symbol</span>
                            {diamond?.KeyToSymbols ? diamond.KeyToSymbols : '-'}
                          </li>
                          <li>
                            <span>Comment</span>
                            {diamond?.Comment ? diamond.Comment : '-'}
                          </li>
                        </ul>
                        <h6>
                          <span>Inclusion</span>
                        </h6>
                        <ul>
                          <li>
                            <span>BIS</span>
                            {diamond?.BIS ? diamond.BIS : '-'}
                          </li>
                          <li>
                            <span>BIC</span>
                            {diamond?.BIC ? diamond.BIC : '-'}
                          </li>
                          <li>
                            <span>WIS</span>
                            {diamond?.WIS ? diamond.WIS : '-'}
                          </li>
                          <li>
                            <span>WIC</span>
                            {diamond?.WIC ? diamond.WIC : '-'}
                          </li>
                          <li>
                            <span>Inclusion</span>
                            {diamond?.Table_Inclusion
                              ? diamond.Table_Inclusion
                              : '-'}
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          )}
          {compareListLoading && (
            <div className="skelleton_Wrapper compare_skeleton">
              <Skeleton height={500} count={6} style={{ width: '100%' }} />
            </div>
          )}
          {!compareListLoading && compareListData?.length === 0 && (
            <h6 className="d-flex justify-content-center flex-column align-items-center data_not_found">
              <img src={recordsNotFound} alt="Records Not Found" />
              <h4>Data Not Found</h4>
            </h6>
          )}
        </Container>
      </section>
    </main>
  );
}
