const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  isLogin: false,
  token: null,
  userId: null,
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
    setUserData: (state, {payload}) => {
      state.token = payload.token;
      state.userId = payload.userid;
    },
  },
});

export const {login, loginOut, setUserData} = authSlice.actions;
export default authSlice.reducer;
