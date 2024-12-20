import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { MenuItemWrapper } from './style';
import { formatCount, formatImgSize } from '@/utils/format.ts';

interface IProps {
    children?: ReactNode;
    itemData: any;
}

const SongMenuItem: FC<IProps> = (props) => {
    const { itemData } = props;
    return (
        <MenuItemWrapper>
            <div className="top">
                <img src={formatImgSize(itemData.picUrl, 140)} alt="" />
                <div className="cover sprite_cover">
                    <div className="info sprite_cover">
                        <span>
                            <i className="sprite_icon headset"></i>
                            <span className="count">{formatCount(itemData.playCount)}</span>
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="bottom">{itemData.name}</div>
        </MenuItemWrapper>
    );
};

export default memo(SongMenuItem);
