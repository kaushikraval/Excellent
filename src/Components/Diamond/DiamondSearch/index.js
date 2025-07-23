import SVGInject from '@iconfu/svg-inject';
import { Formik } from 'formik';
import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ResetIcon from '../../../Assets/Images/reset.svg';
import ArrowDown from '../../../Assets/Images/down-arrow.svg';
import {
  getSearchDiamondFilterList,
  setIsClearSelection,
  setIsFancyColor,
  setSearchDiamondSavedData,
  setIsModifySearchForDiamond,
  setSearchDiamondFilterList2,
} from '../../Redux/reducers/dashboard.slice';
import CaratList from './CaratList';
import CertificateList from './CertificateList';
import ClarityList from './ClarityList';
import ColorList from './ColorList';
import DiamondType from './DiamondType';
import FluorescenceList from './FluorescenceList';
import MakeList from './MakeList';
import PriceList from './PriceList';
import ShapeList from './ShapeList';
import { disableCalcuSymbol } from 'Helper/CommonHelper';
import GirdleThicknessList from './GirdleThicknessList';
import RangeWiseFilter from './RangeWiseFilter';
import {
  getPayload,
  initialValuesForDiamondSearch,
} from './../../../Helper/CommonHelper';

function DiamondSearch({
  pageSize,
  userData,
  diamondType,
  setCurrentPage,
  diamondTableRef,
  setIsSearchDiamond,
  diamondFilterDetail,
  searchDiamondSavedData,
  diamondDetailListLoading,
  searchDiamondFilterListLoading,
}) {
  const dispatch = useDispatch();
  const submitRef = useRef(null);
  const [isShowAdvancedFilter, setIsShowAdvancedFilter] = useState(false);
  const [weightToggle, setWeightToggle] = useState(false);
  const {
    isModifySearchForDiamond,
    isFancySearch,
    isColorType,
    isSavedToSearchDiamond,
  } = useSelector(({ dashboard }) => dashboard);
  const [diamondFilterData, setDiamondFilterData] = useState(null);
  const initialValues = {
    ...initialValuesForDiamondSearch,
    colorType: isColorType,
    diamondType: diamondType,
  };

  const [serchDiamondFinalValue, setSerchDiamondFinalValue] =
    useState(initialValues);
  // useEffect(() => {
  //   // if (SeavedSearchList?.length <= 0) {
  //   dispatch(getSeavedSearchList({ UserID: userData?.UserID }));
  //   // }
  //   return () => {
  //     // dispatch(setIsFilterSaved(false));
  //     // dispatch(setIsFancySearch(false));
  //     // dispatch(setIsSavedToResult(false));
  //     // dispatch(setIsSavedToSearchDiamond(false));
  //     // dispatch(setIsRemoveFromSearchTemplateList(false));
  //     // dispatch(setIsClearSelection(false));
  //   };
  // }, []);
  /*   useEffect(() => {
    if (saveSearchUpdated) {
      dispatch(getSeavedSearchList({ UserID: userData.UserID }));
      dispatch(
        getTotalSearchDiamond({
          ...searchDiamondSavedData,
          UserID: userData.UserID,
        }),
      );
    }
  }, [saveSearchUpdated]); */
  /*   useEffect(() => {
    if (isRemoveFromSearchTemplateList) {
      dispatch(getSeavedSearchList({ UserID: userData.UserID }));
      dispatch(setIsRemoveFromSearchTemplateList(false));
    }
  }, [isRemoveFromSearchTemplateList]); */
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
    document.querySelector('.scroll_wrapper8') &&
      slider.push(document.querySelector('.scroll_wrapper8'));
    document.querySelector('.scroll_wrapper9') &&
      slider.push(document.querySelector('.scroll_wrapper9'));
    document.querySelector('.scroll_wrapper10') &&
      slider.push(document.querySelector('.scroll_wrapper10'));
    document.querySelector('.scroll_wrapper11') &&
      slider.push(document.querySelector('.scroll_wrapper11'));
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
  }, [diamondType]);
  useEffect(() => {
    if (Object.keys(diamondFilterDetail)?.length > 0) {
      if (isModifySearchForDiamond) {
        if (searchDiamondSavedData !== '') {
          let dummyShapeArray = [];
          let dummyClarityArray = [];
          let dummyCutArray = [];
          let dummyPolishArray = [];
          let dummyTingeArray = [];
          let dummyGrowthTypeArray = [];
          let dummySymmetryArray = [];
          let dummyFluorescenceArray = [];
          let dummyLabArray = [];
          let dummyWhiteColorArray = [];
          let dummyGirdleConditionArray = [];
          let dummyGirdleThinArray = [];
          let dummyGirdleThickArray = [];
          let dummyCuletConditionArray = [];
          let dummyCuletSizeArray = [];
          let dummyShadeArray = [];
          let dummyMilkyArray = [];
          let dummyEyeCleanArray = [];
          let dummyFancyColorArray = [];
          let dummyFancyIntensityArray = [];
          let dummyFancyOvertoneArray = [];
          let dummyhnaArray = [];
          let dummyLocationArray = [];
          let caratSize = searchDiamondSavedData.caratSizeIds?.split('-');
          setDiamondFilterData({
            ...diamondFilterDetail,
            shapeList:
              diamondFilterDetail?.shapeList?.map(item => {
                if (
                  searchDiamondSavedData.shape?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyShapeArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            clarityList:
              diamondFilterDetail?.clarityList?.map(item => {
                const clarityValues = searchDiamondSavedData.clarity.split(',');
                if (clarityValues.includes(item.MasterTypeValue_Code)) {
                  dummyClarityArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            cutList:
              diamondFilterDetail?.cutList?.map(item => {
                if (
                  searchDiamondSavedData.cut?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCutArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            polishList:
              diamondFilterDetail?.polishList?.map(item => {
                if (
                  searchDiamondSavedData.polish?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyPolishArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            tingeList:
              diamondFilterDetail?.tingeList?.map(item => {
                if (
                  searchDiamondSavedData.tinge?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyTingeArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            growthTypeList:
              diamondFilterDetail?.growthTypeList?.map(item => {
                if (
                  searchDiamondSavedData.growthType?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGrowthTypeArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            symmetryList:
              diamondFilterDetail?.symmetryList?.map(item => {
                if (
                  searchDiamondSavedData.symmetry?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummySymmetryArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            fluorescenceList:
              diamondFilterDetail?.fluorescenceList?.map(item => {
                if (
                  searchDiamondSavedData.fluorescence?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyFluorescenceArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            labList:
              diamondFilterDetail?.labList?.map(item => {
                if (
                  searchDiamondSavedData.lab?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyLabArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            colorWhiteList:
              diamondFilterDetail?.colorWhiteList?.map(item => {
                if (
                  searchDiamondSavedData.whiteColor?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyWhiteColorArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            gridleConditionList:
              diamondFilterDetail?.gridleConditionList?.map(item => {
                if (
                  searchDiamondSavedData.girdleCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            gridleList:
              diamondFilterDetail?.gridleList?.map(item => {
                if (
                  searchDiamondSavedData.girdleThin?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleThinArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            gridleThickList:
              diamondFilterDetail?.gridleThickList?.map(item => {
                if (
                  searchDiamondSavedData.girdleThick?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleThickArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            culetSizeList:
              diamondFilterDetail?.culetSizeList?.map(item => {
                if (
                  searchDiamondSavedData.culetSize?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCuletSizeArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            culetConditionList:
              diamondFilterDetail?.culetConditionList?.map(item => {
                if (
                  searchDiamondSavedData.culetCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCuletConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            shadeList:
              diamondFilterDetail?.shadeList?.map(item => {
                if (
                  searchDiamondSavedData.shade?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyShadeArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            milkyList:
              diamondFilterDetail?.milkyList?.map(item => {
                if (
                  searchDiamondSavedData.milky?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyMilkyArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            eyecleanList:
              diamondFilterDetail?.eyecleanList?.map(item => {
                if (
                  searchDiamondSavedData.eyeClean?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyEyeCleanArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              }) || [],
            fancycolorList:
              diamondFilterDetail?.fancycolorList?.map(item => {
                if (
                  item?.value &&
                  searchDiamondSavedData.fancyColor?.includes(item.value)
                ) {
                  dummyFancyColorArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              }) || [],
            fancyintensityList:
              diamondFilterDetail?.fancyintensityList?.map(item => {
                if (
                  item?.value &&
                  searchDiamondSavedData.fancyIntensity?.includes(item.value)
                ) {
                  dummyFancyIntensityArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              }) || [],
            fancyovertonList:
              diamondFilterDetail?.fancyovertonList?.map(item => {
                if (
                  item?.value &&
                  searchDiamondSavedData.fancyOvertone.includes(item.value)
                ) {
                  dummyFancyOvertoneArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              }) || [],
            hnaList:
              diamondFilterDetail?.hnaList?.map(item => {
                if (searchDiamondSavedData.hna?.includes(item.value)) {
                  dummyhnaArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              }) || [],
            locationList:
              diamondFilterDetail?.locationList?.map(item => {
                if (searchDiamondSavedData.location?.includes(item.value)) {
                  dummyLocationArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              }) || [],
          });
          let finalFancyColor = dummyFancyColorArray.map(item => {
            return item;
          });
          let finalFancyIntensity = dummyFancyIntensityArray.map(item => {
            return item;
          });
          let finalFancyOvertone = dummyFancyOvertoneArray.map(item => {
            return item;
          });
          let finalHna = dummyhnaArray.map(item => {
            return item;
          });
          let finalLocation = dummyLocationArray.map(item => {
            return item;
          });
          const searchDiamondObj = {
            ...serchDiamondFinalValue,
            shape: dummyShapeArray,
            diamondType: searchDiamondSavedData.diamondType,
            stoneNos: searchDiamondSavedData.stoneNos,
            clarity: dummyClarityArray,
            cut: dummyCutArray,
            polish: dummyPolishArray,
            tinge: dummyTingeArray,
            growthType: dummyGrowthTypeArray,
            symmetry: dummySymmetryArray,
            fluorescence: dummyFluorescenceArray,
            lab: dummyLabArray,
            whiteColor: dummyWhiteColorArray,
            girdleCondition: dummyGirdleConditionArray,
            girdleThin: dummyGirdleThinArray,
            girdleThick: dummyGirdleThickArray,
            culetCondition: dummyCuletConditionArray,
            culetSize: dummyCuletSizeArray,
            shade: dummyShadeArray,
            milky: dummyMilkyArray,
            eyeClean: dummyEyeCleanArray,
            sizeFrom: caratSize && caratSize[0] ? caratSize[0] : '',
            sizeTo: caratSize && caratSize[1] ? caratSize[1] : '',
            priceFrom: searchDiamondSavedData.priceFrom
              ? searchDiamondSavedData.priceFrom
              : 0,
            priceTo: searchDiamondSavedData.priceTo
              ? searchDiamondSavedData.priceTo
              : 0,
            colorType: searchDiamondSavedData.colorType,
            fancyColor: finalFancyColor,
            fancyIntensity: finalFancyIntensity,
            fancyOvertone: finalFancyOvertone,
            hna: finalHna,
            location: finalLocation,
            discountFrom: searchDiamondSavedData.discountFrom,
            discountTo: searchDiamondSavedData.discountTo,
            ratioFrom: searchDiamondSavedData.ratioFrom,
            ratioTo: searchDiamondSavedData.ratioTo,
            girdlePerFrom: searchDiamondSavedData.girdlePerFrom,
            girdlePerTo: searchDiamondSavedData.girdlePerTo,
            tableFrom: searchDiamondSavedData.tableFrom,
            tableTo: searchDiamondSavedData.tableTo,
            depthFrom: searchDiamondSavedData.depthFrom,
            depthTo: searchDiamondSavedData.depthTo,
            lengthFrom: searchDiamondSavedData.lengthFrom,
            lengthTo: searchDiamondSavedData.lengthTo,
            widthFrom: searchDiamondSavedData.widthFrom,
            widthTo: searchDiamondSavedData.widthTo,
            crownAngleFrom: searchDiamondSavedData.crownAngleFrom,
            crownAngleTo: searchDiamondSavedData.crownAngleTo,
            crownHeightFrom: searchDiamondSavedData.crownHeightFrom,
            crownHeightTo: searchDiamondSavedData.crownHeightTo,
            pavilionAngleFrom: searchDiamondSavedData.pavilionAngleFrom,
            pavilionAngleTo: searchDiamondSavedData.pavilionAngleTo,
            pavilionDepthFrom: searchDiamondSavedData.pavilionDepthFrom,
            pavilionDepthTo: searchDiamondSavedData.pavilionDepthTo,
            starLengthFrom: searchDiamondSavedData.starLengthFrom,
            starLengthTo: searchDiamondSavedData.starLengthTo,
            lowerHalfFrom: searchDiamondSavedData.lowerHalfFrom,
            lowerHalfTo: searchDiamondSavedData.lowerHalfTo,
            isFancyShape: false,
            StockStatus: searchDiamondSavedData.StockStatus,
            checkboxId: searchDiamondSavedData.checkboxId,
          };
          setSerchDiamondFinalValue(searchDiamondObj);
          const newObjPayload = getPayload(searchDiamondObj);
          dispatch(
            getSearchDiamondFilterList({
              ...newObjPayload,
              UserID: userData.UserID,
              pageSize,
              pageNum: 0,
            }),
          );
          setIsSearchDiamond(true);
          window.scrollTo({
            top: diamondTableRef?.current?.offsetTop,
            behavior: 'smooth',
          });
          dispatch(setIsModifySearchForDiamond(false));
        }
      } else if (isFancySearch) {
        setDiamondFilterData({
          ...diamondFilterDetail,
          isFancyShape: false,
          colorType: 2,
        });
        setSerchDiamondFinalValue({
          ...serchDiamondFinalValue,
          colorType: 2,
          isFancyShape: false,
        });
      } else if (isSavedToSearchDiamond) {
        if (searchDiamondSavedData !== '') {
          let dummyShapeArray = [];
          let dummyClarityArray = [];
          let dummyCutArray = [];
          let dummyPolishArray = [];
          let dummyTingeArray = [];
          let dummyGrowthTypeArray = [];
          let dummySymmetryArray = [];
          let dummyFluorescenceArray = [];
          let dummyLabArray = [];
          let dummyWhiteColorArray = [];
          let dummyGirdleConditionArray = [];
          let dummyGirdleThinArray = [];
          let dummyGirdleThickArray = [];
          let dummyCuletConditionArray = [];
          let dummyCuletSizeArray = [];
          let dummyShadeArray = [];
          let dummyMilkyArray = [];
          let dummyEyeCleanArray = [];
          let dummyFancyColorArray = [];
          let dummyFancyIntensityArray = [];
          let dummyFancyOvertoneArray = [];
          let dummyhnaArray = [];
          let dummyLocationArray = [];
          let caratSize = searchDiamondSavedData.caratSizeIds?.split('-');

          setDiamondFilterData({
            ...diamondFilterDetail,
            shapeList: diamondFilterDetail?.shapeList.map(item => {
              if (
                searchDiamondSavedData.shape?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShapeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            clarityList: diamondFilterDetail?.clarityList.map(item => {
              if (
                searchDiamondSavedData.clarity?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyClarityArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            cutList: diamondFilterDetail?.cutList.map(item => {
              if (
                searchDiamondSavedData.cut?.includes(item.MasterTypeValue_Code)
              ) {
                dummyCutArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            polishList: diamondFilterDetail?.polishList.map(item => {
              if (
                searchDiamondSavedData.polish?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyPolishArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            tingeList: diamondFilterDetail?.tingeList.map(item => {
              if (
                searchDiamondSavedData.tinge?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyTingeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            growthTypeList: diamondFilterDetail?.growthTypeList.map(item => {
              if (
                searchDiamondSavedData.growthType?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGrowthTypeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            symmetryList: diamondFilterDetail?.symmetryList.map(item => {
              if (
                searchDiamondSavedData.symmetry?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummySymmetryArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fluorescenceList: diamondFilterDetail?.fluorescenceList.map(
              item => {
                if (
                  searchDiamondSavedData.fluorescence?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyFluorescenceArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            labList: diamondFilterDetail?.labList.map(item => {
              if (
                searchDiamondSavedData.lab?.includes(item.MasterTypeValue_Code)
              ) {
                dummyLabArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            colorWhiteList: diamondFilterDetail?.colorWhiteList.map(item => {
              if (
                searchDiamondSavedData.whiteColor?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyWhiteColorArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleConditionList: diamondFilterDetail?.gridleConditionList.map(
              item => {
                if (
                  searchDiamondSavedData.girdleCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyGirdleConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            gridleList: diamondFilterDetail?.gridleList.map(item => {
              if (
                searchDiamondSavedData.girdleThin?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThinArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            gridleThickList: diamondFilterDetail?.gridleThickList.map(item => {
              if (
                searchDiamondSavedData.girdleThick?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyGirdleThickArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetSizeList: diamondFilterDetail?.culetSizeList.map(item => {
              if (
                searchDiamondSavedData.culetSize?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyCuletSizeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            culetConditionList: diamondFilterDetail?.culetConditionList?.map(
              item => {
                if (
                  searchDiamondSavedData.culetCondition?.includes(
                    item.MasterTypeValue_Code,
                  )
                ) {
                  dummyCuletConditionArray.push(item.MasterTypeValue_Code);
                  return {
                    ...item,
                    classToggle: !item.classToggle,
                  };
                }
                return item;
              },
            ),
            shadeList: diamondFilterDetail?.shadeList.map(item => {
              if (
                searchDiamondSavedData.shade?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyShadeArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            milkyList: diamondFilterDetail?.milkyList.map(item => {
              if (
                searchDiamondSavedData.milky?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyMilkyArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),

            eyecleanList: diamondFilterDetail?.eyecleanList.map(item => {
              if (
                searchDiamondSavedData.eyeClean?.includes(
                  item.MasterTypeValue_Code,
                )
              ) {
                dummyEyeCleanArray.push(item.MasterTypeValue_Code);
                return {
                  ...item,
                  classToggle: !item.classToggle,
                };
              }
              return item;
            }),
            fancycolorList: diamondFilterDetail?.fancycolorList.map(item => {
              if (searchDiamondSavedData.fancyColor?.includes(item.value)) {
                dummyFancyColorArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            fancyintensityList: diamondFilterDetail?.fancyintensityList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyIntensity?.includes(item.value)
                ) {
                  dummyFancyIntensityArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            fancyovertonList: diamondFilterDetail?.fancyovertonList.map(
              item => {
                if (
                  searchDiamondSavedData.fancyOvertone?.includes(item.value)
                ) {
                  dummyFancyOvertoneArray.push(item);
                  return {
                    item,
                  };
                }
                return item;
              },
            ),
            hnaList: diamondFilterDetail?.hnaList.map(item => {
              if (searchDiamondSavedData.hna?.includes(item.value)) {
                dummyhnaArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
            locationList: diamondFilterDetail?.locationList.map(item => {
              if (searchDiamondSavedData.location?.includes(item.value)) {
                dummyLocationArray.push(item);
                return {
                  item,
                };
              }
              return item;
            }),
          });

          let finalFancyColor = dummyFancyColorArray.map(item => {
            return item;
          });
          let finalFancyIntensity = dummyFancyIntensityArray.map(item => {
            return item;
          });
          let finalFancyOvertone = dummyFancyOvertoneArray.map(item => {
            return item;
          });
          let finalHna = dummyhnaArray.map(item => {
            return item;
          });
          let finalLocation = dummyLocationArray.map(item => {
            return item;
          });
          setSerchDiamondFinalValue({
            ...serchDiamondFinalValue,
            shape: dummyShapeArray,
            clarity: dummyClarityArray,
            cut: dummyCutArray,
            polish: dummyPolishArray,
            tinge: dummyTingeArray,
            growthType: dummyGrowthTypeArray,
            symmetry: dummySymmetryArray,
            fluorescence: dummyFluorescenceArray,
            lab: dummyLabArray,
            whiteColor: dummyWhiteColorArray,
            girdleCondition: dummyGirdleConditionArray,
            girdleThin: dummyGirdleThinArray,
            girdleThick: dummyGirdleThickArray,
            culetCondition: dummyCuletConditionArray,
            culetSize: dummyCuletSizeArray,
            shade: dummyShadeArray,
            milky: dummyMilkyArray,
            eyeClean: dummyEyeCleanArray,
            sizeFrom: caratSize && caratSize[0] ? caratSize[0] : 0,
            sizeTo: caratSize && caratSize[1] ? caratSize[1] : 0,
            priceFrom: searchDiamondSavedData.priceFrom
              ? searchDiamondSavedData.priceFrom
              : 0,
            priceTo: searchDiamondSavedData.priceTo
              ? searchDiamondSavedData.priceTo
              : 0,
            colorType: searchDiamondSavedData.colorType,
            fancyColor: finalFancyColor,
            fancyIntensity: finalFancyIntensity,
            fancyOvertone: finalFancyOvertone,
            hna: finalHna,
            location: finalLocation,
            discountFrom: searchDiamondSavedData.discountFrom,
            discountTo: searchDiamondSavedData.discountTo,
            ratioFrom: searchDiamondSavedData.ratioFrom,
            ratioTo: searchDiamondSavedData.ratioTo,
            girdlePerFrom: searchDiamondSavedData.girdlePerFrom,
            girdlePerTo: searchDiamondSavedData.girdlePerTo,
            tableFrom: searchDiamondSavedData.tableFrom,
            tableTo: searchDiamondSavedData.tableTo,
            depthFrom: searchDiamondSavedData.depthFrom,
            depthTo: searchDiamondSavedData.depthTo,
            lengthFrom: searchDiamondSavedData.lengthFrom,
            lengthTo: searchDiamondSavedData.lengthTo,
            widthFrom: searchDiamondSavedData.widthFrom,
            widthTo: searchDiamondSavedData.widthTo,
            crownAngleFrom: searchDiamondSavedData.crownAngleFrom,
            crownAngleTo: searchDiamondSavedData.crownAngleTo,
            crownHeightFrom: searchDiamondSavedData.crownHeightFrom,
            crownHeightTo: searchDiamondSavedData.crownHeightTo,
            pavilionAngleFrom: searchDiamondSavedData.pavilionAngleFrom,
            pavilionAngleTo: searchDiamondSavedData.pavilionAngleTo,
            pavilionDepthFrom: searchDiamondSavedData.pavilionDepthFrom,
            pavilionDepthTo: searchDiamondSavedData.pavilionDepthTo,
            starLengthFrom: searchDiamondSavedData.starLengthFrom,
            starLengthTo: searchDiamondSavedData.starLengthTo,
            lowerHalfFrom: searchDiamondSavedData.lowerHalfFrom,
            lowerHalfTo: searchDiamondSavedData.lowerHalfTo,
            isFancyShape: false,
          });
        }
      }
    }
  }, [dispatch, isModifySearchForDiamond, diamondFilterDetail]);

  useEffect(() => {
    if (Object.keys(diamondFilterDetail)?.length > 0) {
      if (!isModifySearchForDiamond) {
        setDiamondFilterData(diamondFilterDetail);
        window.scrollTo(0, 0);
      }
    }
  }, [diamondFilterDetail]);

  useEffect(() => {
    SVGInject(document.querySelectorAll('img.injectable'));
  }, [diamondFilterData?.shapeList]);

  const changeDiamondType = useCallback(
    type => {
      let newObj = getPayload(initialValues);
      dispatch(
        getSearchDiamondFilterList({
          ...newObj,
          diamondType: type,
          UserID: userData.UserID,
          pageSize: pageSize,
          pageNum: 0,
        }),
      );
      setCurrentPage(0);
    },
    [dispatch, pageSize, userData, setCurrentPage, getPayload],
  );
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={serchDiamondFinalValue}
        innerRef={submitRef}
        onSubmit={values => {
          let newObj = getPayload(values);
          dispatch(
            setSearchDiamondSavedData({
              ...newObj,
              checkboxId: values.checkboxId,
            }),
          );
          setCurrentPage(0);
          dispatch(
            getSearchDiamondFilterList({
              ...newObj,
              UserID: userData.UserID,
              pageSize,
              pageNum: 0,
            }),
          );
          setIsSearchDiamond(true);
          window.scrollTo({
            top: diamondTableRef.current.offsetTop,
            behavior: 'smooth',
          });
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <div className="quick_search_inner">
              <DiamondType
                values={values}
                dispatch={dispatch}
                submitRef={submitRef}
                handleChange={handleChange}
                initialValues={initialValues}
                setCurrentPage={setCurrentPage}
                changeDiamondType={changeDiamondType}
                setIsClearSelection={setIsClearSelection}
                diamondFilterDetail={diamondFilterDetail}
                setDiamondFilterData={setDiamondFilterData}
                setSerchDiamondFinalValue={setSerchDiamondFinalValue}
                setSearchDiamondSavedData={setSearchDiamondSavedData}
                setSearchDiamondFilterList2={setSearchDiamondFilterList2}
              />
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
              {values?.diamondType === 'LABGROWN' ||
              values?.diamondType === 'NATURAL' ? (
                <>
                  <Row>
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
                  </Row>
                  <ColorList
                    dispatch={dispatch}
                    values={values}
                    setFieldValue={setFieldValue}
                    handleChange={handleChange}
                    diamondFilterData={diamondFilterData}
                    setIsFancyColor={setIsFancyColor}
                    setSearchDiamondSavedData={setSearchDiamondSavedData}
                    searchDiamondSavedData={searchDiamondSavedData}
                    setDiamondFilterData={setDiamondFilterData}
                    diamondDetailListLoading={diamondDetailListLoading}
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
                  <Row>
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
                  </Row>
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
                  <Row>
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
                  </Row>
                </>
              ) : (
                <>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Type</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sapphire"
                                label="Sapphire"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Emerald"
                                label="Emerald"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ruby"
                                label="Ruby"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Alexandrite"
                                label="Alexandrite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Garnet"
                                label="Garnet"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Zircon"
                                label="Zircon"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tourmaline"
                                label="Tourmaline"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Peridot"
                                label="Peridot"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spinel"
                                label="Spinel"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Aquamarine"
                                label="Aquamarine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzanite"
                                label="Tanzanite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Grandidierite"
                                label="Grandidierite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Amethyst"
                                label="Amethyst"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Opal"
                                label="Opal"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Kunzite"
                                label="Kunzite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Topaz"
                                label="Topaz"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Morganite"
                                label="Morganite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Citrine"
                                label="Citrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ametrine"
                                label="Ametrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Chrysoberyl"
                                label="Chrysoberyl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Moonstone"
                                label="Moonstone"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Prehnite"
                                label="Prehnite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Beryl"
                                label="Beryl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Apatite"
                                label="Apatite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heliodor"
                                label="Heliodor"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Jade"
                                label="Jade"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Quartz"
                                label="Quartz"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sodalite"
                                label="Sodalite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spectrolite"
                                label="Spectrolite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Sphene"
                                label="Sphene"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Spine"
                                label="Spine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other"
                                label="Other"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap">
                    <div className="search_label">
                      <h6>Lab</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="ICL"
                                label="ICL"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="GIA"
                                label="GIA"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="AGL"
                                label="AGL"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="GRS"
                                label="GRS"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="CDC"
                                label="CDC"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="AGS"
                                label="AGS"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="DSEF"
                                label="DSEF"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="EGL"
                                label="EGL"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Treatment</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="None1"
                                label="None2"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heating & Pressure"
                                label="Heating & Pressure"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Oiling"
                                label="Oiling"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Enhancement"
                                label="Enhancement"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Heating"
                                label="Heating"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Composite"
                                label="Composite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Bleaching"
                                label="Bleaching"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Coating"
                                label="Coating"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Dyeing"
                                label="Dyeing"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Filling"
                                label="Filling"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzanite1"
                                label="Tanzanite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Irradiation"
                                label="Irradiation"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Impregnated"
                                label="Impregnated"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Diffusion"
                                label="Diffusion"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Lasering"
                                label="Lasering"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Imitation"
                                label="Imitation"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Morganite1"
                                label="Morganite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Citrine1"
                                label="Citrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ametrine1"
                                label="Ametrine"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Chrysoberyl1"
                                label="Chrysoberyl"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Moonstone1"
                                label="Moonstone"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Prehnite1"
                                label="Prehnite"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Waxing"
                                label="Waxing"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other1"
                                label="Other"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="search_inner_wrap align-items-start">
                    <div className="search_label mt10">
                      <h6>Origin</h6>
                    </div>
                    <div className="search_content">
                      <div className="check_input_wraper">
                        <ul>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Zambia"
                                label="Zambia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Madagascar"
                                label="Madagascar"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Thailand"
                                label="Thailand"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Mozambique"
                                label="Mozambique"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Myanmar"
                                label="Myanmar"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="SriLanka"
                                label="Sri Lanka"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Brazil"
                                label="Brazil"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Australia"
                                label="Australia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Ethiopia"
                                label="Ethiopia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tanzenia"
                                label="Tanzenia"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Greenland"
                                label="Greenland"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="India"
                                label="India"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Iran"
                                label="Iran"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Kenya"
                                label="Kenya"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Pakistan"
                                label="Pakistan"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Tajakistan"
                                label="Tajakistan"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Vietnam"
                                label="Vietnam"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Other"
                                label="Other"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="Unknown"
                                label="Unknown"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_wrapper">
                              <Form.Check
                                type="checkbox"
                                id="RestofAfrica"
                                label="Rest of Africa"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="advance_filter">
                <div className="advance_filter_button">
                  <Button
                    variant="outline-secondary"
                    className={
                      isShowAdvancedFilter
                        ? 'rounded-pill active'
                        : 'rounded-pill'
                    }
                    onClick={() =>
                      setIsShowAdvancedFilter(!isShowAdvancedFilter)
                    }
                  >
                    Advance Filter{' '}
                    <span>
                      <img src={ArrowDown} alt="" />
                    </span>
                  </Button>
                </div>
                {isShowAdvancedFilter && (
                  <div className="advance_filter_wrapper">
                    <Row>
                      <Col lg={6}>
                        <PriceList
                          dispatch={dispatch}
                          values={values}
                          handleChange={handleChange}
                          disableCalcuSymbol={disableCalcuSymbol}
                          searchDiamondSavedData={searchDiamondSavedData}
                          setSearchDiamondSavedData={setSearchDiamondSavedData}
                        />
                      </Col>
                      <Col lg={6}>
                        <GirdleThicknessList
                          values={values}
                          dispatch={dispatch}
                          setFieldValue={setFieldValue}
                          diamondFilterData={diamondFilterData}
                          diamondFilterDetail={diamondFilterDetail}
                          setDiamondFilterData={setDiamondFilterData}
                          searchDiamondSavedData={searchDiamondSavedData}
                          setSearchDiamondSavedData={setSearchDiamondSavedData}
                        />
                      </Col>
                      <RangeWiseFilter
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                    </Row>
                  </div>
                )}
              </div>
              <div className="search_button_wrap">
                <Button
                  variant="outline-primary"
                  className="rounded-pill mr20"
                  onClick={() => {
                    submitRef && submitRef.current.resetForm();
                    setDiamondFilterData(diamondFilterDetail);
                    setSerchDiamondFinalValue(initialValues);
                    dispatch(setSearchDiamondSavedData(''));
                    dispatch(setIsClearSelection(true));
                    handleChange('diamondType')(diamondType);
                    setCurrentPage(0);
                  }}
                  disabled={searchDiamondFilterListLoading}
                >
                  <img src={ResetIcon} alt="Reset" /> Reset Filter
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className={
                    searchDiamondFilterListLoading
                      ? 'rounded-pill disabled'
                      : 'rounded-pill'
                  }
                >
                  Search
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default memo(DiamondSearch);
