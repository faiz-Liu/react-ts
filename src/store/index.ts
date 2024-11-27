import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/modules/counter';
import recommendReducer from '../views/discover/c-views/recommend/store';

import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer
    }
});
export type IRootState = ReturnType<typeof store.getState>;
// 函数签名
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppShallowEqual = shallowEqual;
export default store;
