import { memo, useRef } from 'react';
import { AlbumWrapper } from '@/views/discover/c-cpns/new-album/style.ts';
import AreaHeaderV1 from '@/components/area-header-v1';
import { Carousel } from 'antd';
import { useAppSelector } from '@/store';
import NewAlbumItem from '@/components/new-album-item';
const NewAlbum = () => {
    const bannerRef = useRef(null);
    // 获取数据
    const { newAlbums } = useAppSelector((state) => ({
        newAlbums: state.recommend.newAlbums
    }));
    // 箭头事件
    function handlePrevClick() {
        bannerRef.current?.prev();
    }
    function handleNextClick() {
        bannerRef.current?.next();
    }
    return (<AlbumWrapper>
            <AreaHeaderV1 title="新碟上架" moreLink={'/discover/album'}/>
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={handlePrevClick}></button>
                <div className="banner">
                    <Carousel ref={bannerRef} dots={false} speed={1500}>
                        {[0, 1].map((item) => {
            return (<div key={item}>
                                    <div className="album-list">
                                        {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((album) => {
                    return (<NewAlbumItem key={album.id} itemData={album}/>);
                })}
                                    </div>
                                </div>);
        })}
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={handleNextClick}></button>
            </div>
        </AlbumWrapper>);
};
export default memo(NewAlbum);
//# sourceMappingURL=index.jsx.map