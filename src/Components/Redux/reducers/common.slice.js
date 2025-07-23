import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  message: '',
  showMessage: false,
  varient: 'success',
  diamondDetailListLoading: false,
  diamondDetailList: [],
  diamondFilterDetail: {},
  inquiryLoader: false,
};

export const getDiamondDetailList = createAsyncThunk(
  'search-diamond-list',
  masterType => {
    return new Promise((resolve, reject) => {
      axios
        .post(`parameter-list-by-name?MasterType=${masterType}`)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const createDiamondInquiry = createAsyncThunk(
  'create-diamond-inquiry',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post('Jewellery-Inquiry', props)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result.rows });
            dispatch(
              showMessage({ message: data.Message, varient: 'success' }),
            );
          } else {
            dispatch(showMessage({ message: data.Message }));
            reject(data);
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.message = action.payload.message;
      state.varient = action.payload.varient;
      state.showMessage = true;
    },
    hideMessage: (state, action) => {
      state.showMessage = false;
    },
    setDiamondDetailList: (state, action) => {
      state.diamondFilterDetail = action.payload;
    },
  },
  extraReducers: {
    [createDiamondInquiry.pending]: (state, action) => {
      state.inquiryLoader = true;
    },
    [createDiamondInquiry.rejected]: (state, action) => {
      state.inquiryLoader = false;
    },
    [createDiamondInquiry.fulfilled]: (state, action) => {
      state.inquiryLoader = false;
    },
    [getDiamondDetailList.pending]: (state, action) => {
      state.diamondDetailListLoading = true;
    },
    [getDiamondDetailList.rejected]: (state, action) => {
      state.diamondDetailList = [];
      state.diamondDetailListLoading = false;
    },
    [getDiamondDetailList.fulfilled]: (state, action) => {
      let finalShapeList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'SHAPE',
      );
      let finalCaratSizeList = action.payload?.data?.Size
        ? action.payload?.data?.Size
        : [];
      /*  let finalTingeList = action.payload.data.tinge.map(item => {
         let finalObj = {};
         finalObj = { ...item, classToggle: false };
         return finalObj;
       }); */
      let finalClarityList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'CLARITY',
      );
      let finalCutList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'CUT',
      );
      let finalcolorWhiteList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'COLOR',
      );
      let finalPolishList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'POLISH',
      );
      let finaSymmetryList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'SYMMETRY',
      );
      let finaLabList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'LAB',
      );
      let finaFluorescenceList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'FLUROINT',
      );
      /*   let finaHnaList = action.payload.data.hna.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      }); */
      /*  let finaLocationList = action.payload.data.location.map(item => {
        let finalObj = {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };

        return finalObj;
      }); */
      let finaFancyColorList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'FC',
      )?.map(item => {
        return {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };
      });
      let finaFancyIntensityList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'FCINTESE',
      )?.map(item => {
        return {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };
      });
      let finaFancyOvertoneList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'FCOVERTON',
      )?.map(item => {
        return {
          value: item.MasterTypeValue_Code,
          label: item.MasterTypeValue_Code,
        };
      });
      let finaGirdleThickList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'GIRDLE',
      );
      let natureOfOrgList = action.payload?.data?.MasterList?.filter(
        item => item.MasterType_Code === 'NATURE OF ORG',
      );
      /*  let finaGirdleConditionList = action.payload.data.girdlecon.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaGirdleList = action.payload.data.girdle.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaCuletConditionList = action.payload.data.culcondi.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaCuletSizeList = action.payload.data.culsize.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finaMilkyList = action.payload.data.milky.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalShadeList = action.payload.data.shade.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      });
      let finalEyeCleanList = action.payload.data.eyeclean.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      }); */
      // let finalTreatmentList = action.payload.data.treatment.map(
      //   (item) => {
      //     let finalObj = {};
      //     finalObj = { ...item, classToggle: false };
      //     return finalObj;
      //   }
      // );
      /*  let finalGrowthTypeList = action.payload.data.treatment.map(item => {
        let finalObj = {};
        finalObj = { ...item, classToggle: false };
        return finalObj;
      }); */
      // state.eyecleanList = finalEyeCleanList;
      state.diamondDetailList = action.payload.data;
      state.diamondFilterDetail = {
        shapeList: finalShapeList || state.diamondFilterDetail?.shapeList,
        caratSizeList:
          finalCaratSizeList || state.diamondFilterDetail?.caratSizeList,
        clarityList: finalClarityList || state.diamondFilterDetail?.clarityList,
        // tingeList: finalTingeList,
        cutList: finalCutList || state.diamondFilterDetail?.cutList,
        colorWhiteList:
          finalcolorWhiteList || state.diamondFilterDetail?.colorWhiteList,
        polishList: finalPolishList || state.diamondFilterDetail?.polishList,
        symmetryList:
          finaSymmetryList || state.diamondFilterDetail?.symmetryList,
        labList: finaLabList || state.diamondFilterDetail?.labList,
        fluorescenceList:
          finaFluorescenceList || state.diamondFilterDetail?.fluorescenceList,
        // hnaList: finaHnaList,
        // locationList: finaLocationList,
        fancycolorList:
          finaFancyColorList || state.diamondFilterDetail?.fancycolorList,
        fancyintensityList:
          finaFancyIntensityList ||
          state.diamondFilterDetail?.fancyintensityList,
        fancyovertonList:
          finaFancyOvertoneList || state.diamondFilterDetail?.fancyovertonList,
        // gridleConditionList: finaGirdleConditionList,
        // gridleList: finaGirdleList,
        gridleThickList:
          finaGirdleThickList || state.diamondFilterDetail?.gridleThickList,
        // culetConditionList: finaCuletConditionList,
        // culetSizeList: finaCuletSizeList,
        // milkyList: finaMilkyList,
        // shadeList: finalShadeList,
        // eyecleanList: finalEyeCleanList,
        // treatmentList: finalTreatmentList,
        // growthTypeList: finalGrowthTypeList,
        natureOfOrgList:
          natureOfOrgList || state.diamondFilterDetail?.natureOfOrgList,
      };
      state.diamondDetailListLoading = false;
    },
  },
});

export const { showMessage, hideMessage, setDiamondDetailList } =
  commonSlice.actions;
export default commonSlice.reducer;
