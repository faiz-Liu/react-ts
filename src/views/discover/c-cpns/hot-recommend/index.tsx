import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { RecommendWrapper } from '@/views/discover/styled.ts';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import SongsMenuItem from '@/components/songs-menu-item';

interface Iprops {
    children?: ReactNode;
    title?: string;
    moreLink?: string;
    keywords?: string[];
}

interface IHotRecommend {
    id: number;
    name: string;
}

const HotRecommend: FC<Iprops> = () => {
    const { hotRecommend } = useAppSelector((state) => ({
        hotRecommend: state.recommend.hotRecommends as IHotRecommend[]
    }));
    return (
        <RecommendWrapper>
            <AreaHeaderV1
                title="热门推荐"
                keywords={['华语', '流行', '摇滚', '民谣']}
                moreLink={'/discover/songs'}
            />
            <div className="recommend-list">
                {hotRecommend.map((item) => {
                    return <SongsMenuItem key={item.id} itemData={item} />;
                })}
            </div>
        </RecommendWrapper>
    );
};

export default memo(HotRecommend);
