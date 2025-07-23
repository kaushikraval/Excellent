import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from './common.slice';

const initialState = {
  jewelleryBaseMetal: [],
  jewelleryCartList: [],
  jewelleryDetailData: {},
  jewellerySearchStock: [],
  jewelleryCategoryDetail: [],
  jewelleryCartListDetail: {},
  jewelleryParameterDetail: {},
  jewelleryFilterDetailByHeader: {},
  isAddToCartJewellery: false,
  jewelleryDetailLoader: false,
  jewelleryCategoryLoader: false,
  jewelleryBaseMetalLoader: false,
  jewelleryParameterLoader: false,
  jewelleryFilterDataLoader: false,
  isModifySearchForJewellery: false,
};

export const getJewelleryCategoryList = createAsyncThunk(
  'get-jewellery-category-list',
  props => {
    return new Promise((resolve, reject) => {
      axios
        .post('get-jewellery-type-subtype-list-millionhands')
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const getJewelleryBaseMetal = createAsyncThunk(
  'get-jewellery-base-metal',
  props => {
    return new Promise((resolve, reject) => {
      axios
        .post('get-Jewellery-Base-Metal-Purity-And-Color-Rate')
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const getJewelleryCartList = createAsyncThunk(
  'get-jewellery-cart-list',
  userID => {
    return new Promise((resolve, reject) => {
      axios
        .post(`get-jewellery-diamond-cart-list?Cust_ID=${userID}`)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result });
          } else {
            reject(data);
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const addToCartJewellery = createAsyncThunk(
  'add-to-cart-jewellery',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockID: !props?.isOnlyJewellery
          ? props?.Stock_ID
            ? props.Stock_ID
            : ''
          : '',
        Cust_ID: props?.userId ? props.userId : 0,
        DeviceType: 'Web',
        Diamond_Type: props?.Diamond_Type ? props.Diamond_Type : '',
        Jewellery_Stock_ID: props?.Stock_ID ? props.Stock_ID : 0,
        GoldType_Id: props?.Metal_ID ? props.Metal_ID : 0,
        Color_And_Clarity_Id: 0,
        Color_Id: 0,
        Clarity_Id: 0,
        Qty: 1,
        Amount: props?.Sale_Rate ? props.Sale_Rate : 0,
        WithStone: props?.WithStone ? props.WithStone : false,
        Comment: '',
        TotalWeight: props?.Total_Extra_Metal_Weight
          ? props.Total_Extra_Metal_Weight
          : 0,
        Engraving: false,
        PriceType: '',
        Setting_ID: 0,
        Size_ID: 0,
      };
      axios
        .post('jewellery-diamond-add-to-cart-with-setting', obj)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result.rows });
            !props?.isToastDisabled &&
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

export const getJewelleryParameterListByName = createAsyncThunk(
  'get-jewellery-parameter-list-by-name',
  masterType => {
    return new Promise((resolve, reject) => {
      axios
        .post(`get-jewellery-parameter-list-by-name?MasterType=${masterType}`)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const getJewelleryDetailList = createAsyncThunk(
  'get-jewellery-detail-list',
  stockID => {
    const obj = {
      Stock_ID: stockID,
      CustomerId: 0,
    };
    return new Promise((resolve, reject) => {
      axios
        .post('get-JewelleryDetail-list', obj)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result });
          } else {
            reject(data);
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const getJewelleryFilterData = createAsyncThunk(
  'get-jewellery-master-list',
  data => {
    return new Promise((resolve, reject) => {
      const obj = {
        Cust_ID: data?.cust_ID ? data?.cust_ID : 1,
        Product_Type_ID: data?.product_Type_ID ? data?.product_Type_ID : '',
        Category_ID: data?.category_ID ? data?.category_ID : '',
        Type_ID: data?.type_ID ? data?.type_ID : '',
        Sub_Type_ID: data?.sub_Type_ID
          ? data?.sub_Type_ID?.length > 0
            ? data?.sub_Type_ID.toString()
            : ''
          : '',
        Jewellery_For_ID: data?.jewellery_For_ID ? data?.jewellery_For_ID : '',
        Brand_ID: data?.brand_ID ? data?.brand_ID : '',
        Vendor_ID: data?.vendor_ID ? data?.vendor_ID : '',
        Shape_ID: data?.shape_ID
          ? data?.shape_ID?.length > 0
            ? data?.shape_ID.toString()
            : ''
          : '',
        Metal_ID: data?.metal_type
          ? data?.metal_type?.length > 0
            ? data.metal_type.toString()
            : ''
          : '',
        PriceF: data?.priceF ? data?.priceF : 0,
        PriceT: data?.priceT ? data?.priceT : 0,
        WeightF: data?.weightF ? data?.weightF : 0,
        WeightT: data?.weightT ? data?.weightT : 0,
        SearchBy: data?.searchBy ? data?.searchBy : '',
        SortBy: data?.sortBy?.value
          ? data.sortBy.value === 'ASC'
            ? ''
            : data?.sortBy.value
          : '',
      };
      axios
        .post('jewellery-master-list', obj)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const removeJewelleryFromCart = createAsyncThunk(
  'remove-jewellery-from-cart',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        Cart_ID: data?.cartIDs ? data.cartIDs.toString() : '',
        JewellCartID: data?.Jewellery_Stock_ID
          ? data?.Jewellery_Stock_ID.toString()
          : '',
        Type: data?.type ? data.type : '',
        Customer_ID: data?.UserID ? data.UserID : 0,
      };
      axios
        .post('remove-cart-Jewellery-Diamond-WithSetting', obj)
        .then(({ data }) => {
          if (data.IsSuccess) {
            resolve({ data: data.Result });
            dispatch(
              showMessage({ message: data.Message, varient: 'success' }),
            );
          } else {
            dispatch(showMessage({ message: data.Message }));
            reject(data);
          }
        });
    });
  },
);

export const jewellerySlice = createSlice({
  name: 'jewellery',
  initialState,
  reducers: {
    setJewelleryDetailData: (state, action) => {
      state.jewelleryDetailData = action.payload;
    },
    setIsModifySearchForJewellery: (state, action) => {
      state.isModifySearchForJewellery = action.payload;
    },
    setJewelleryFilterDetailByHeader: (state, action) => {
      state.jewelleryFilterDetailByHeader = action.payload;
    },
    setIsAddToCartJewellery: (state, action) => {
      state.isAddToCartJewellery = action.payload;
    },
    setJewellerySearchStock: (state, action) => {
      state.jewellerySearchStock = action.payload;
    },
  },
  extraReducers: {
    [getJewelleryCategoryList.pending]: (state, action) => {
      state.jewelleryCategoryLoader = true;
      state.jewelleryCategoryDetail = [];
    },
    [getJewelleryCategoryList.rejected]: (state, action) => {
      state.jewelleryCategoryLoader = false;
      state.jewelleryCategoryDetail = [];
    },
    [getJewelleryCategoryList.fulfilled]: (state, action) => {
      state.jewelleryCategoryDetail =
        action?.payload?.data?.length > 0 ? [...action.payload.data] : [];
      state.jewelleryCategoryLoader = false;
    },
    [getJewelleryBaseMetal.pending]: (state, action) => {
      state.jewelleryBaseMetalLoader = true;
      state.jewelleryBaseMetal = [];
    },
    [getJewelleryBaseMetal.rejected]: (state, action) => {
      state.jewelleryBaseMetalLoader = false;
      state.jewelleryBaseMetal = [];
    },
    [getJewelleryBaseMetal.fulfilled]: (state, action) => {
      state.jewelleryBaseMetal =
        action?.payload?.data?.length > 0 ? [...action.payload.data] : [];
      state.jewelleryBaseMetalLoader = false;
    },
    [getJewelleryParameterListByName.pending]: (state, action) => {
      state.jewelleryParameterLoader = true;
      state.jewelleryParameterDetail = {};
    },
    [getJewelleryParameterListByName.rejected]: (state, action) => {
      state.jewelleryParameterLoader = false;
      state.jewelleryParameterDetail = {};
    },
    [getJewelleryParameterListByName.fulfilled]: (state, action) => {
      state.jewelleryParameterLoader = false;
      state.jewelleryParameterDetail = {
        shapeList:
          action?.payload?.data?.MasterList?.length > 0
            ? [...action.payload.data.MasterList]
            : [],
      };
    },
    [getJewelleryDetailList.pending]: (state, action) => {
      state.jewelleryDetailLoader = true;
      state.jewelleryDetailData = {};
    },
    [getJewelleryDetailList.rejected]: (state, action) => {
      state.jewelleryDetailLoader = false;
      state.jewelleryDetailData = {};
    },
    [getJewelleryDetailList.fulfilled]: (state, action) => {
      state.jewelleryDetailLoader = false;
      state.jewelleryDetailData = action?.payload?.data || {};
    },
    [getJewelleryCartList.pending]: (state, action) => {
      state.jewelleryDetailLoader = true;
      state.jewelleryCartList = [];
    },
    [getJewelleryCartList.rejected]: (state, action) => {
      state.jewelleryDetailLoader = false;
      state.jewelleryCartList = [];
    },
    [getJewelleryCartList.fulfilled]: (state, action) => {
      state.jewelleryDetailLoader = false;
      state.jewelleryCartList = action.payload?.data?._CartList || [];
      state.jewelleryCartListDetail = action.payload?.data || {};
    },
    [addToCartJewellery.pending]: (state, action) => {
      state.isAddToCartJewellery = false;
    },
    [addToCartJewellery.rejected]: (state, action) => {
      state.isAddToCartJewellery = false;
    },
    [addToCartJewellery.fulfilled]: (state, action) => {
      state.isAddToCartJewellery = true;
    },
    [removeJewelleryFromCart.pending]: (state, action) => {
      state.isAddToCartJewellery = false;
    },
    [removeJewelleryFromCart.rejected]: (state, action) => {
      state.isAddToCartJewellery = false;
    },
    [removeJewelleryFromCart.fulfilled]: (state, action) => {
      state.isAddToCartJewellery = true;
    },
    [getJewelleryFilterData.pending]: (state, action) => {
      state.jewelleryFilterDataLoader = true;
      state.jewellerySearchStock = [];
    },
    [getJewelleryFilterData.rejected]: (state, action) => {
      state.jewelleryFilterDataLoader = false;
      state.jewellerySearchStock = [];
    },
    [getJewelleryFilterData.fulfilled]: (state, action) => {
      state.jewelleryFilterDataLoader = false;
      state.jewellerySearchStock =
        action?.payload?.data?.length > 0 ? [...action.payload.data] : [];
    },
  },
});

export const {
  setJewelleryDetailData,
  setIsAddToCartJewellery,
  setIsModifySearchForJewellery,
  setJewelleryFilterDetailByHeader,
  setJewellerySearchStock,
} = jewellerySlice.actions;
export default jewellerySlice.reducer;
