import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { AlbumItemWrapper } from '@/components/new-album-item/style.ts';
import { formatImgSize } from '@/utils/format.ts';

interface Iprops {
    children?: ReactNode;
    itemData: any;
}

const NewAlbumItem: FC<Iprops> = (props) => {
    const { itemData } = props;
    return (
        <AlbumItemWrapper>
            <div className={'top'}>
                <img src={formatImgSize(itemData.picUrl, 100)} alt="" />
                <a href="" className={'cover sprite_cover'}></a>
            </div>
            <div className={'bottom'}>
                <div className={'name'}>{itemData.name}</div>
                <div className={'artist'}>{itemData.artist.name}</div>
            </div>
        </AlbumItemWrapper>
    );
};

export default memo(NewAlbumItem);
