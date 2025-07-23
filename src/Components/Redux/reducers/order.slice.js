import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  myOrderListLoading: false,
  myOrderList: [],
  myOrderDetail: [],
  myOrderDetailList: [],
  totalOrders: 0,
  totalPendingOrder: 0,
  totaldeliverdOrder: 0,
  totalapprovedOrder: 0,
  totalcanceledOrder: 0,
};

export const getMyOrderList = createAsyncThunk(
  'get-my-order-list',
  myOrderFilter => {
    return new Promise((resolve, reject) => {
      axios
        .post('get-order-list', myOrderFilter)
        .then(({ data }) => {
          if (data?.Result?.rows?.length > 0) {
            resolve({ data: data?.Result?.rows });
          } else {
            resolve({ data: [] });
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);
export const getMyOrderDetail = createAsyncThunk(
  'getMyOrderDetail',
  myOrderFilter => {
    return new Promise((resolve, reject) => {
      axios
        .post('get-order-detail-by-order-id', myOrderFilter)
        .then(({ data }) => {
          if (data?.Result) {
            resolve({ data: data?.Result });
          } else {
            resolve({ data: [] });
          }
        })
        .catch(errors => {
          reject(errors);
        });
    });
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: {
    [getMyOrderList.pending]: (state, action) => {
      state.myOrderList = [];
      state.myOrderListLoading = true;
      state.totalPendingOrder = 0;
      state.totaldeliverdOrder = 0;
      state.totalapprovedOrder = 0;
      state.totalcanceledOrder = 0;
    },
    [getMyOrderList.rejected]: (state, action) => {
      state.myOrderList = [];
      state.totalOrders = 0;
      state.totalPendingOrder = 0;
      state.totaldeliverdOrder = 0;
      state.totalapprovedOrder = 0;
      state.totalcanceledOrder = 0;
      state.myOrderListLoading = false;
    },
    [getMyOrderList.fulfilled]: (state, action) => {
      state.myOrderList = action.payload.data;
      action.payload.data.map(item => {
        if (item.WebOrder_Status === 'PENDING') {
          state.totalPendingOrder = state.totalPendingOrder + 1;
        } else if (item.WebOrder_Status === 'DELIVERED') {
          state.totaldeliverdOrder = state.totaldeliverdOrder + 1;
        } else if (item.WebOrder_Status === 'APPROVED') {
          state.totalapprovedOrder = state.totalapprovedOrder + 1;
        } else if (item.WebOrder_Status === 'CANCELED') {
          state.totalcanceledOrder = state.totalcanceledOrder + 1;
        }
      });
      state.totalOrders = action.payload.data.length;
      state.myOrderListLoading = false;
    },
    [getMyOrderDetail.pending]: (state, action) => {
      state.myOrderListLoading = true;
    },
    [getMyOrderDetail.rejected]: (state, action) => {
      state.myOrderDetail = [];
      state.myOrderListLoading = false;
    },
    [getMyOrderDetail.fulfilled]: (state, action) => {
      state.myOrderDetail = action.payload.data._OrderDetail;
      state.myOrderDetailList = action.payload.data._OrderDetailList;
      state.myOrderListLoading = false;
    },
  },
});

export default orderSlice.reducer;
