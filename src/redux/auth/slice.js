import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [signUp, logIn, logOut, refreshUser];

const thunkType = type => arrThunks.map(element => element[type]);

const handlePending = state => {
  state.isRefreshing = true;
  state.isLoading = true;
};
const handleRejected = state => {
  state.isRefreshing = false;
  state.isLoading = false;
};
const handleFulfilledEnter = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const handleFulfilledLogOut = state => {
  state.user = { email: '', name: '', password: '' };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};
const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

const initialState = {
  user: { email: '', name: '', password: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, handleFulfilledEnter)
      .addCase(logIn.fulfilled, handleFulfilledEnter)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addMatcher(isAnyOf(...thunkType(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkType(STATUS.REJECTED)), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
