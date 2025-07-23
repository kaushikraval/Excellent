import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showMessage } from './common.slice';

const initialState = {
  compareDiamondList: {
    labGrownDiamond: [],
    naturalDiamond: [],
  },
  wishDiamondList: {
    labGrownDiamond: [],
    naturalDiamond: [],
  },
  cartDiamondList: {
    labGrownDiamond: [],
    naturalDiamond: [],
  },
  jewelleryCartListData: [],
  diamondType: 'LABGROWN',
};
const removeiSCheck = arr => {
  if (arr?.length > 0) {
    const dummyArray = arr?.map(item => {
      return { ...item, isCheck: false };
    });
    return dummyArray;
  }
  return [];
};

export const addToWishListInLocalList = createAsyncThunk(
  'add-to-wish-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { diamondType, diamondWishList } = props;
      let [...oldNaturalDiamond] =
        getState().offlineList?.wishDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.wishDiamondList?.labGrownDiamond || [];
      let isAdded = false;
      if (diamondType === 'NATURAL') {
        let newNaturalDiamond = [];
        if (oldNaturalDiamond?.length > 0) {
          diamondWishList?.forEach(item => {
            let isAddedObj = oldNaturalDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newNaturalDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newNaturalDiamond = [...diamondWishList];
        }
        dispatch(
          setWishDiamondList({
            naturalDiamond: removeiSCheck([
              ...oldNaturalDiamond,
              ...newNaturalDiamond,
            ]),
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        let newLabGrownDiamond = [];
        if (oldLabGrownDiamond?.length > 0) {
          diamondWishList?.forEach(item => {
            let isAddedObj = oldLabGrownDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newLabGrownDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newLabGrownDiamond = [...diamondWishList];
        }
        dispatch(
          setWishDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: removeiSCheck([
              ...oldLabGrownDiamond,
              ...newLabGrownDiamond,
            ]),
          }),
        );
      }
      isAdded
        ? dispatch(
            showMessage({
              message: 'Stone added successfully',
              varient: 'success',
            }),
          )
        : dispatch(showMessage({ message: 'Stones are already added' }));
    });
  },
);
export const removFromWishListInLocal = createAsyncThunk(
  'remove-from-wish-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      let [...oldNaturalDiamond] =
        getState().offlineList?.wishDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.wishDiamondList?.labGrownDiamond || [];
      const { diamondType, diamondWishList } = props;
      if (diamondType === 'NATURAL') {
        if (diamondWishList?.length > 0) {
          oldNaturalDiamond = oldNaturalDiamond.filter(
            item1 =>
              !diamondWishList.some(item2 => item1.Stock_ID === item2.Stock_ID),
          );
        }
        dispatch(
          setWishDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        if (diamondWishList?.length > 0) {
          oldLabGrownDiamond = oldLabGrownDiamond.filter(
            item1 =>
              !diamondWishList.some(item2 => item1.Stock_ID === item2.Stock_ID),
          );
        }
        dispatch(
          setWishDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      }
      dispatch(
        showMessage({
          message: 'Stone removed successfully',
          varient: 'success',
        }),
      );
    });
  },
);
export const addToCartListInLocal = createAsyncThunk(
  'add-to-cart-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      let [...oldNaturalDiamond] =
        getState().offlineList?.cartDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.cartDiamondList?.labGrownDiamond || [];
      const { diamondType, diamondCartList } = props;
      let isAdded = false;
      if (diamondType === 'NATURAL') {
        let newNaturalDiamond = [];
        if (oldNaturalDiamond?.length > 0) {
          diamondCartList?.forEach(item => {
            let isAddedObj = oldNaturalDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newNaturalDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newNaturalDiamond = [...diamondCartList];
        }
        dispatch(
          setCartDiamondList({
            naturalDiamond: removeiSCheck([
              ...oldNaturalDiamond,
              ...newNaturalDiamond,
            ]),
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        let newLabGrownDiamond = [];
        if (oldLabGrownDiamond?.length > 0) {
          diamondCartList?.forEach(item => {
            let isAddedObj = oldLabGrownDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newLabGrownDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newLabGrownDiamond = [...diamondCartList];
        }
        dispatch(
          setCartDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: removeiSCheck([
              ...oldLabGrownDiamond,
              ...newLabGrownDiamond,
            ]),
          }),
        );
      }
      isAdded
        ? dispatch(
            showMessage({
              message: 'Stone added successfully',
              varient: 'success',
            }),
          )
        : dispatch(showMessage({ message: 'Stones are already added' }));
    });
  },
);
export const removeFromCartListInLocal = createAsyncThunk(
  'remove-from-cart-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      let [...oldNaturalDiamond] =
        getState().offlineList?.cartDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.cartDiamondList?.labGrownDiamond || [];
      const { diamondType, diamondCartObj } = props;
      if (diamondType === 'NATURAL') {
        let newNaturalDiamond = [];
        if (oldNaturalDiamond?.length > 0) {
          newNaturalDiamond = oldNaturalDiamond.filter(
            item => item.Stock_ID !== diamondCartObj.Stock_ID,
          );
        }
        dispatch(
          setCartDiamondList({
            naturalDiamond: newNaturalDiamond,
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        let newLabGrownDiamond = [];
        if (oldLabGrownDiamond?.length > 0) {
          newLabGrownDiamond = oldLabGrownDiamond.filter(
            item => item.Stock_ID !== diamondCartObj.Stock_ID,
          );
        }
        dispatch(
          setCartDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: newLabGrownDiamond,
          }),
        );
      }
      dispatch(
        showMessage({
          message: 'Stone removed successfully',
          varient: 'success',
        }),
      );
    });
  },
);
export const addToComapareListInLocalList = createAsyncThunk(
  'add-to-compare-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { diamondType, diamondCompareList } = props;
      let [...oldNaturalDiamond] =
        getState().offlineList?.compareDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.compareDiamondList?.labGrownDiamond || [];
      let isAdded = false;
      if (diamondType === 'NATURAL') {
        let newNaturalDiamond = [];
        if (oldNaturalDiamond?.length > 0) {
          diamondCompareList?.forEach(item => {
            let isAddedObj = oldNaturalDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newNaturalDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newNaturalDiamond = [...diamondCompareList];
        }
        dispatch(
          setCompareDiamondList({
            naturalDiamond: [...oldNaturalDiamond, ...newNaturalDiamond],
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        let newLabGrownDiamond = [];
        if (oldLabGrownDiamond?.length > 0) {
          diamondCompareList?.forEach(item => {
            let isAddedObj = oldLabGrownDiamond.find(
              item2 => item.Stock_ID === item2.Stock_ID,
            );
            if (!isAddedObj) {
              isAdded = true;
              newLabGrownDiamond.push(item);
            }
          });
        } else {
          isAdded = true;
          newLabGrownDiamond = [...diamondCompareList];
        }
        dispatch(
          setCompareDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: [...oldLabGrownDiamond, ...newLabGrownDiamond],
          }),
        );
      }
      isAdded
        ? dispatch(
            showMessage({
              message: 'Stone added successfully',
              varient: 'success',
            }),
          )
        : dispatch(showMessage({ message: 'Stones are already added' }));
    });
  },
);

export const removeFromCompareListInLocal = createAsyncThunk(
  'remove-from-compare-list-in-local',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      let [...oldNaturalDiamond] =
        getState().offlineList?.compareDiamondList?.naturalDiamond || [];
      let [...oldLabGrownDiamond] =
        getState().offlineList?.compareDiamondList?.labGrownDiamond || [];
      const { diamondType, diamondCompareObj } = props;
      if (diamondType === 'NATURAL') {
        let newNaturalDiamond = [];
        if (oldNaturalDiamond?.length > 0) {
          newNaturalDiamond = oldNaturalDiamond.filter(
            item => item.Stock_ID !== diamondCompareObj.Stock_ID,
          );
        }
        dispatch(
          setCompareDiamondList({
            naturalDiamond: newNaturalDiamond,
            labGrownDiamond: oldLabGrownDiamond,
          }),
        );
      } else {
        let newLabGrownDiamond = [];
        if (oldLabGrownDiamond?.length > 0) {
          newLabGrownDiamond = oldLabGrownDiamond.filter(
            item => item.Stock_ID !== diamondCompareObj.Stock_ID,
          );
        }
        dispatch(
          setCompareDiamondList({
            naturalDiamond: oldNaturalDiamond,
            labGrownDiamond: newLabGrownDiamond,
          }),
        );
      }
      dispatch(
        showMessage({
          message: 'Stone removed successfully',
          varient: 'success',
        }),
      );
    });
  },
);

export const addToCartListInLocalJewelery = createAsyncThunk(
  'add-to-wish-list-in-local-jewelery',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { jeweleryList } = props;
      let [...jewelleryCartListData] =
        getState().offlineList?.jewelleryCartListData || [];
      let isAdded = false;
      if (jewelleryCartListData?.length === 0) {
        jewelleryCartListData.push(jeweleryList);
        dispatch(setJewelleryCartList(jewelleryCartListData));
        isAdded = true;
      } else {
        let isAvailbleJewelery = jewelleryCartListData.find(
          item => item.Stock_ID === jeweleryList.Stock_ID,
        );
        if (!isAvailbleJewelery) {
          jewelleryCartListData.push(jeweleryList);
          dispatch(setJewelleryCartList(jewelleryCartListData));
          isAdded = true;
        }
      }
      isAdded
        ? dispatch(
            showMessage({
              message: 'Jewellery added successfully',
              varient: 'success',
            }),
          )
        : dispatch(showMessage({ message: 'Jewellery are already added' }));
    });
  },
);

export const removeFromCartListInLocalJewelery = createAsyncThunk(
  'remove-to-wish-list-in-local-jewelery',
  (props, { dispatch, getState }) => {
    return new Promise((resolve, reject) => {
      const { jeweleryObj } = props;
      let [...jewelleryCartListData] =
        getState().offlineList?.jewelleryCartListData || [];
      let newJewelleryCartListData = [];
      if (jewelleryCartListData?.length > 0) {
        newJewelleryCartListData = jewelleryCartListData.filter(
          item => item.Stock_ID !== jeweleryObj.Jewellery_Stock_ID,
        );
        dispatch(setJewelleryCartList(newJewelleryCartListData));
      }
      dispatch(
        showMessage({
          message: 'Stone removed successfully',
          varient: 'success',
        }),
      );
    });
  },
);

export const offlineListSlice = createSlice({
  name: 'offline-list',
  initialState,
  reducers: {
    setDiamondType: (state, action) => {
      state.diamondType = action.payload;
    },
    setWishDiamondList: (state, action) => {
      state.wishDiamondList = action.payload;
    },
    setCartDiamondList: (state, action) => {
      state.cartDiamondList = action.payload;
    },
    setJewelleryCartList: (state, action) => {
      state.jewelleryCartListData = action.payload;
    },
    setCompareDiamondList: (state, action) => {
      state.compareDiamondList = action.payload;
    },
  },
});

export const {
  setDiamondType,
  setWishDiamondList,
  setCartDiamondList,
  setJewelleryCartList,
  setCompareDiamondList,
} = offlineListSlice.actions;

export default offlineListSlice.reducer;
