// 格式化听歌数量
export function formatCount(count: number) {
    if (count > 100000) {
        return Math.floor(count / 10000) + '万';
    } else {
        return count;
    }
}

//格式化图片大小
export function formatImgSize(url: string, width: number, height: number = width) {
    return url + `?param=${width}x${height}`;
}
