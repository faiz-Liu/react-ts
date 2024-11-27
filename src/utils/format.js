// 格式化听歌数量
export function formatCount(count) {
    if (count > 100000) {
        return Math.floor(count / 10000) + '万';
    }
    else {
        return count;
    }
}
//格式化图片大小
export function formatImgSize(url, width, height = width) {
    return url + `?param=${width}x${height}`;
}
//# sourceMappingURL=format.js.map