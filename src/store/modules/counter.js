import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 1,
    msg: 'hello world',
    address: 'false',
    height: 1.88,
    direction: 'left',
    names: ['123']
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeMsgAction(state, { payload }) {
            state.msg = payload;
        }
    }
});
export const { changeMsgAction } = counterSlice.actions;
export default counterSlice.reducer;
//# sourceMappingURL=counter.js.map