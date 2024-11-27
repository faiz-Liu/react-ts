import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBanners, getHorRecommend, getNewAlbum, getPlaylistDetail } from '@/views/discover/c-views/recommend/service'; // promiseAll
// promiseAll
export const fetchRecommendAction = createAsyncThunk('fetchData', async (_, { dispatch }) => {
    const [banners, hotRecommend, newAlbum] = await Promise.all([
        getBanners(),
        getHorRecommend(),
        getNewAlbum()
    ]);
    dispatch(changeBannersAction(banners.banners));
    dispatch(changeHotRecommendAction(hotRecommend.result));
    dispatch(changeNewAlbumAction(newAlbum.albums));
});
// 获取榜单
const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingDataAction = createAsyncThunk('rankingData', async (_, { dispatch }) => {
    const promises = [];
    for (const id of rankingIds) {
        promises.push(getPlaylistDetail(id));
    }
    Promise.all(promises).then((res) => {
        const playlists = res.map((item) => item.playlist);
        console.log('playlists', playlists);
        dispatch(changeRankingsAction(playlists));
    });
});
const initialState = {
    banners: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: []
};
const recommendSlice = createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }) {
            state.banners = payload;
        },
        changeHotRecommendAction(state, { payload }) {
            state.hotRecommends = payload;
        },
        changeNewAlbumAction(state, { payload }) {
            state.newAlbums = payload;
        },
        changeRankingsAction(state, { payload }) {
            state.rankings = payload;
        }
    }
});
export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction, changeRankingsAction } = recommendSlice.actions;
export default recommendSlice.reducer;
//# sourceMappingURL=index.js.map