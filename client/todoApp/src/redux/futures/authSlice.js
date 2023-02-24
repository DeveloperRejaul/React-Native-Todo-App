const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    loginOut: state => {
      state.isLogin = false;
    },
  },
});

export const {login, loginOut} = authSlice.actions;
export default authSlice.reducer;
