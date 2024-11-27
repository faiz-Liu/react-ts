import { memo } from 'react';
import { RecommendWrapper } from '@/views/discover/styled.ts';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import SongsMenuItem from '@/components/songs-menu-item';
const HotRecommend = () => {
    const { hotRecommend } = useAppSelector((state) => ({
        hotRecommend: state.recommend.hotRecommends
    }));
    return (<RecommendWrapper>
            <AreaHeaderV1 title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣']} moreLink={'/discover/songs'}/>
            <div className="recommend-list">
                {hotRecommend.map((item) => {
            return <SongsMenuItem key={item.id} itemData={item}/>;
        })}
            </div>
        </RecommendWrapper>);
};
export default memo(HotRecommend);
//# sourceMappingURL=index.jsx.map