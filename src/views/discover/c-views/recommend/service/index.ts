import hyRequest from '@/service';

// 轮播图
export function getBanners() {
    return hyRequest.get({ url: '/api/banner' });
}

// 热门推荐
export function getHorRecommend(limit = 8) {
    return hyRequest.get({ url: '/api/personalized', params: { limit } });
}

// 新碟上架
export function getNewAlbum() {
    return hyRequest.get({ url: '/api/album/newest' });
}

// 榜单
export function getPlaylistDetail(id: number) {
    return hyRequest.get({ url: '/api/playlist/detail', params: { id } });
}
