import { memo } from 'react';
import { AlbumItemWrapper } from '@/components/new-album-item/style.ts';
import { formatImgSize } from '@/utils/format.ts';
const NewAlbumItem = (props) => {
    const { itemData } = props;
    return (<AlbumItemWrapper>
            <div className={'top'}>
                <img src={formatImgSize(itemData.picUrl, 100)} alt=""/>
                <a href="" className={'cover sprite_cover'}></a>
            </div>
            <div className={'bottom'}>
                <div className={'name'}>{itemData.name}</div>
                <div className={'artist'}>{itemData.artist.name}</div>
            </div>
        </AlbumItemWrapper>);
};
export default memo(NewAlbumItem);
//# sourceMappingURL=index.jsx.map