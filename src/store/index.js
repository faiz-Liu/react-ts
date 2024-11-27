import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/modules/counter';
import recommendReducer from '../views/discover/c-views/recommend/store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer
    }
});
// 函数签名
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
export const useAppShallowEqual = shallowEqual;
export default store;
//# sourceMappingURL=index.js.map