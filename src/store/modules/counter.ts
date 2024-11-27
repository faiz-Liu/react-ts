import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    count: number;
    msg: string;
    address: string;
    height: number;
    direction: 'left' | 'right' | 'up' | 'down';
    names: string[];
}

const initialState: IState = {
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
        changeMsgAction(state, { payload }: PayloadAction<string>) {
            state.msg = payload;
        }
    }
});
export const { changeMsgAction } = counterSlice.actions;
export default counterSlice.reducer;
