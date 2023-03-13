const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  splass: false,
};

export const splassSlice = createSlice({
  name: 'splass',
  initialState,
  reducers: {
    handleSplass: state => {
      state.splass = true;
    },
  },
});

export const {handleSplass} = splassSlice.actions;
export default splassSlice.reducer;
