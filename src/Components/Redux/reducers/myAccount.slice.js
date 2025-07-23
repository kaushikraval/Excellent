import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from './common.slice';

const initialState = {
  editAdditionalInfoLoading: false,
  editMyProfileLoading: false,
  isProfileEdit: false,
  isAdditionalInfoEdit: false,
  myProfileDetailLoading: false,
  myProfileDetailList: {},
  myHoldStockListLoading: false,
  myHoldStockList: [],
  myHoldTotalRows: 0,
  getSearchStockCommonList: [],
  getSearchStockLoading: false,
  exportStockDataLoading: false,
  isExportStock: false,
  exportStockData: [],
  isAddToWatchList: false,
  watchStockLoading: false,
  watchStockList: [],
  countOfWatchList: 0,
  totalwatchStockListRecords: 0,
  totalwatchStockListRows: 0,
  currentPageMyHold: 0,
  myHoldMinPageLimit: 0,
  myHoldMaxPageLimit: 5,
  currentPageWatchList: 0,
  watchListMinPageLimit: 0,
  watchListMaxPageLimit: 5,
  isAddToCartList: false,
  isAddToCompareList: false,
  isRemoveFromHold: false,
  isExportForMail: false,
  isAddToHoldList: false,
  compareStockList: [],
  compareListLoading: false,
  isPasswordChanged: false,
};
export const changePassword = createAsyncThunk(
  'change-password',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post('change-password', props)
        .then(({ data }) => {
          if (data?.IsSuccess) {
            resolve({ data: data.Result });
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
export const getMyProfileDetail = createAsyncThunk(
  'get-my-profile-detail',
  data => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: data.UserID,
      };
      axios
        .post('get-my-profile-detail', obj)
        .then(({ data }) => {
          if (data?.IsSuccess) {
            resolve({ data: data.Result });
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const editMyProfileDetail = createAsyncThunk(
  'editprofile',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post('edit-my-profile-excellent', props)
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
        })
        .catch(errors => {
          reject(errors);
          console.log(errors);
        });
    });
  },
);
export const editAdditionalInfo = createAsyncThunk(
  'editadditionalDetail',
  (props, { dispatch }) => {
    return new Promise((resolve, reject) => {
      axios
        .post('edit-additional-info', props)
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
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const getMyHoldStockList = createAsyncThunk('myHoldStockList', data => {
  return new Promise((resolve, reject) => {
    const obj = {
      UserID: data.UserID,
      Diamond_Type: data.diamondType,
    };
    axios
      .post('get-stock-hold', obj)
      .then(({ data }) => {
        resolve({ data: data.Result });
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const getSearchStockCommon = createAsyncThunk(
  'getSearchStockCommon',
  data => {
    return new Promise((resolve, reject) => {
      let newFinalObject = {
        StoneNumber: data.StoneNo,
        UserID: data.UserID ? data.UserID : 0,
        BackEndClientId: 0,
      };
      axios
        .post('get-stock-detail-common', newFinalObject)
        .then(({ data }) => {
          resolve({ data: data.Result });
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const addToWatchList = createAsyncThunk(
  'add-to-watchList',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('add-to-watch-list', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data });
              dispatch(
                showMessage({
                  message: 'Add to Watchlist Sucessfully.',
                  varient: 'success',
                }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const getWatchStockList = createAsyncThunk(
  'get-to-watchList',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: data.userId,
        Diamond_Type: data.diamondType,
      };
      axios
        .post('get-stock-watchlist', obj)
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
export const getWatchStockListCount = createAsyncThunk(
  'get-to-watchList-count',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: data.UserID,
        /*  pagesize: data.pageSize,
        pagenum: data.currentPage, */
        Diamond_Type: '',
      };
      axios
        .post('watchlist-count', obj)
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
export const removeToWatchList = createAsyncThunk(
  'remove-to-watchList',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('remove-from-watch-list', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data });
              dispatch(
                showMessage({
                  message: 'Remove to Watchlist Sucessfully.',
                  varient: 'success',
                }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const addToHoldList = createAsyncThunk(
  'add-to-hold-list',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('add-to-hold', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data.Result.rows });
              dispatch(
                showMessage({ message: data.Message, varient: 'success' }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const addToCartList = createAsyncThunk(
  'add-to-cart-list',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('add-to-cart', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data.Result.rows });
              dispatch(
                showMessage({ message: data.Message, varient: 'success' }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const removeFromCart = createAsyncThunk(
  'remove-from-cart',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        cartIDs: data.cartIDs.toString(),
        UserID: data.UserID,
      };
      axios
        .post('remove-cart-item-by-cartids', obj)
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
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const addToCompareList = createAsyncThunk(
  'add-to-compare-list',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('add-to-compare', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data.Result.rows });

              dispatch(
                showMessage({ message: data.Message, varient: 'success' }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const removeToCompareList = createAsyncThunk(
  'remove-to-compare-list',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('remove-from-compare-list', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data.Result.rows });
              dispatch(
                showMessage({ message: data.Message, varient: 'success' }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const removeFromHold = createAsyncThunk(
  'remove-from-hold-api',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        StockIDs: data.StockIDs,
        CustomerID: data.CustomerID,
        Diamond_Type: data.diamondType,
        SellerId: 0,
        DeviceType: 'Web',
        BackEndClientId: 0,
        Remark: '',
      };
      axios
        .post('remove-from-hold', obj)
        .then(({ data }) => {
          if (obj.StockIDs === '') {
            dispatch(showMessage({ message: 'Please select stone' }));
            reject(data);
          } else {
            if (data.IsSuccess) {
              resolve({ data: data.Result.rows });
              dispatch(
                showMessage({ message: data.Message, varient: 'success' }),
              );
            } else {
              dispatch(showMessage({ message: data.Message }));
              reject(data);
            }
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const stockExcelSendMail = createAsyncThunk(
  'stockExcelSendMail',
  (data, { dispatch }) => {
    return new Promise((resolve, reject) => {
      const obj = {
        UserID: data.UserID ? data.UserID : 0,
        EmailID: data.emailId ? data.emailId : '',
        Full_Name: data.fullName ? data.fullName : '',
        Subject: data.subject ? data.subject : '',
        Message: data.message ? data.message : '',
        BackEndClientId: data.backEndClientId ? data.backEndClientId : 0,
      };
      axios
        .post('stock-excel-send-mail', obj)
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
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const getCompareList = createAsyncThunk('get-compare-list-api', data => {
  return new Promise((resolve, reject) => {
    axios
      .post('get-compare-list', data)
      .then(({ data }) => {
        resolve({ data: data.Result });
      })
      .catch(errors => {
        reject(errors);
      });
  });
});
export const myAccountSlice = createSlice({
  name: 'my-account',
  initialState,
  reducers: {
    setCurrentPageWatchList: (state, action) => {
      state.currentPageWatchList = action.payload;
    },
    setWatchListMinPageLimit: (state, action) => {
      state.watchListMinPageLimit = action.payload;
    },
    setWatchListMaxPageLimit: (state, action) => {
      state.watchListMaxPageLimit = action.payload;
    },
    setCurrentPageMyHold: (state, action) => {
      state.currentPageMyHold = action.payload;
    },
    setMyHoldMinPageLimit: (state, action) => {
      state.myHoldMinPageLimit = action.payload;
    },
    setMyHoldMaxPageLimit: (state, action) => {
      state.myHoldMaxPageLimit = action.payload;
    },
    setIsAddToCartList: (state, action) => {
      state.isAddToCartList = action.payload;
    },
    setIsAddToWatchList: (state, action) => {
      state.isAddToWatchList = action.payload;
    },
    setIsAddToCompareList: (state, action) => {
      state.isAddToCompareList = action.payload;
    },
    setIsRemoveFromHold: (state, action) => {
      state.isRemoveFromHold = action.payload;
    },
    setIsExportForMail: (state, action) => {
      state.isExportForMail = action.payload;
    },
    setIsProfileEdit: (state, action) => {
      state.isProfileEdit = action.payload;
    },
    setIsPasswordChanged: (state, action) => {
      state.isPasswordChanged = action.payload;
    },
  },
  extraReducers: {
    [getMyProfileDetail.pending]: (state, action) => {
      state.myProfileDetailLoading = true;
    },
    [getMyProfileDetail.rejected]: (state, action) => {
      state.myProfileDetailList = {};
      state.myProfileDetailLoading = false;
    },
    [getMyProfileDetail.fulfilled]: (state, action) => {
      state.myProfileDetailList = action.payload.data || {};
      state.myProfileDetailLoading = false;
    },
    [editMyProfileDetail.pending]: (state, action) => {
      state.editMyProfileLoading = true;
      state.isProfileEdit = false;
    },
    [editMyProfileDetail.fulfilled]: (state, action) => {
      state.editMyProfileLoading = false;
      state.isProfileEdit = true;
    },
    [editMyProfileDetail.rejected]: (state, action) => {
      state.editMyProfileLoading = false;
      state.isProfileEdit = false;
    },
    [changePassword.pending]: (state, action) => {
      state.editMyProfileLoading = true;
      state.isPasswordChanged = false;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.editMyProfileLoading = false;
      state.isPasswordChanged = true;
    },
    [changePassword.rejected]: (state, action) => {
      state.editMyProfileLoading = false;
      state.isPasswordChanged = false;
    },
    [editAdditionalInfo.pending]: (state, action) => {
      state.editAdditionalInfoLoading = true;
      state.isAdditionalInfoEdit = false;
    },
    [editAdditionalInfo.fulfilled]: (state, action) => {
      state.editAdditionalInfoLoading = false;
      state.isAdditionalInfoEdit = true;
    },
    [editAdditionalInfo.rejected]: (state, action) => {
      state.editAdditionalInfoLoading = false;
      state.isAdditionalInfoEdit = false;
    },
    [getMyHoldStockList.pending]: (state, action) => {
      state.myHoldStockList = [];
      state.myHoldStockListLoading = true;
    },
    [getMyHoldStockList.rejected]: (state, action) => {
      state.myHoldStockList = [];
      state.myHoldStockListLoading = false;
    },
    [getMyHoldStockList.fulfilled]: (state, action) => {
      state.myHoldStockList = action.payload.data?.rows || [];
      state.myHoldTotalRows = action.payload.data?.total || 0;
      state.myHoldStockListLoading = false;
    },
    [getSearchStockCommon.pending]: (state, action) => {
      state.getSearchStockCommonList = [];
      state.getSearchStockLoading = true;
    },
    [getSearchStockCommon.fulfilled]: (state, action) => {
      state.getSearchStockCommonList = action.payload.data;
      state.getSearchStockLoading = false;
    },
    [getSearchStockCommon.rejected]: (state, action) => {
      state.getSearchStockCommonList = [];
      state.getSearchStockLoading = false;
    },
    [addToWatchList.pending]: (state, action) => {
      state.isAddToWatchList = false;
    },
    [addToWatchList.rejected]: (state, action) => {
      state.isAddToWatchList = false;
    },
    [addToWatchList.fulfilled]: (state, action) => {
      state.isAddToWatchList = true;
    },
    [removeToWatchList.pending]: (state, action) => {
      state.isAddToWatchList = false;
    },
    [removeToWatchList.rejected]: (state, action) => {
      state.isAddToWatchList = false;
    },
    [removeToWatchList.fulfilled]: (state, action) => {
      state.isAddToWatchList = true;
    },
    [addToHoldList.pending]: (state, action) => {
      state.isAddToHoldList = false;
    },
    [addToHoldList.rejected]: (state, action) => {
      state.isAddToHoldList = false;
    },
    [addToHoldList.fulfilled]: (state, action) => {
      state.isAddToHoldList = true;
    },
    [addToCartList.pending]: (state, action) => {
      state.isAddToCartList = false;
    },
    [addToCartList.rejected]: (state, action) => {
      state.isAddToCartList = false;
    },
    [addToCartList.fulfilled]: (state, action) => {
      state.isAddToCartList = true;
    },
    [removeFromCart.pending]: (state, action) => {
      state.isAddToCartList = false;
    },
    [removeFromCart.rejected]: (state, action) => {
      state.isAddToCartList = false;
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.isAddToCartList = true;
    },
    [addToCompareList.pending]: (state, action) => {
      state.isAddToCompareList = false;
    },
    [addToCompareList.rejected]: (state, action) => {
      state.isAddToCompareList = false;
    },
    [addToCompareList.fulfilled]: (state, action) => {
      state.isAddToCompareList = true;
    },
    [removeToCompareList.pending]: (state, action) => {
      state.isAddToCompareList = false;
    },
    [removeToCompareList.rejected]: (state, action) => {
      state.isAddToCompareList = false;
    },
    [removeToCompareList.fulfilled]: (state, action) => {
      state.isAddToCompareList = true;
    },
    [removeFromHold.pending]: (state, action) => {
      state.isRemoveFromHold = false;
    },
    [removeFromHold.rejected]: (state, action) => {
      state.isRemoveFromHold = false;
    },
    [removeFromHold.fulfilled]: (state, action) => {
      state.isRemoveFromHold = true;
    },
    [getCompareList.pending]: (state, action) => {
      state.compareStockList = [];
      state.compareListLoading = true;
    },
    [getCompareList.rejected]: (state, action) => {
      state.compareStockList = [];
      state.compareListLoading = false;
    },
    [getCompareList.fulfilled]: (state, action) => {
      state.compareStockList = action.payload.data;
      state.compareListLoading = false;
    },
    [getWatchStockList.pending]: (state, action) => {
      state.watchStockLoading = true;
      state.watchStockList = [];
    },
    [getWatchStockList.rejected]: (state, action) => {
      state.watchStockList = [];
      state.watchStockLoading = false;
      state.totalwatchStockListRecords = 0;
      state.totalwatchStockListRows = 0;
    },
    [getWatchStockList.fulfilled]: (state, action) => {
      state.watchStockList = action.payload.data?.rows;
      state.watchStockLoading = false;
      state.totalwatchStockListRecords = action.payload?.data?.TotalRows;
      state.totalwatchStockListRows = action.payload?.data?.total;
    },
    [getWatchStockListCount.pending]: (state, action) => {},
    [getWatchStockListCount.rejected]: (state, action) => {
      state.countOfWatchList = 0;
    },
    [getWatchStockListCount.fulfilled]: (state, action) => {
      state.countOfWatchList = action.payload?.data?.TotalCount;
    },
  },
});
export const {
  setCurrentPageWatchList,
  setWatchListMinPageLimit,
  setWatchListMaxPageLimit,
  setCurrentPageMyHold,
  setMyHoldMinPageLimit,
  setMyHoldMaxPageLimit,
  setIsAddToCartList,
  setIsAddToWatchList,
  setIsProfileEdit,
  setIsPasswordChanged,
  setIsAddToCompareList,
  setIsRemoveFromHold,
  setIsExportForMail,
} = myAccountSlice.actions;

export default myAccountSlice.reducer;
