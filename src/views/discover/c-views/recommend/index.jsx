import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/store';
import { fetchRankingDataAction, fetchRecommendAction } from '@/views/discover/c-views/recommend/store';
import TopBanner from '@/views/discover/c-cpns/top-banner';
import { RecommendLeft, RecommendRight, RecommendSection, RecommendWrapper } from '@/views/discover/styled.ts';
import HotRecommend from '@/views/discover/c-cpns/hot-recommend';
import NewAlbum from '@/views/discover/c-cpns/new-album';
import TopRanking from '@/views/discover/c-cpns/top-ranking';
const Recommend = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchRecommendAction());
        dispatch(fetchRankingDataAction());
    }, []);
    return (<RecommendWrapper>
            {/*轮播图*/}
            <TopBanner />
            {/*推荐内容*/}
            <RecommendSection className="content wrap-v2">
                <RecommendLeft className="left">
                    {/*热门推荐*/}
                    <HotRecommend />
                    {/*新碟上架*/}
                    <NewAlbum />
                    {/*排行榜*/}
                    <TopRanking />
                    left
                </RecommendLeft>
                {/*每日推荐右*/}
                <RecommendRight className="right">right</RecommendRight>
            </RecommendSection>
        </RecommendWrapper>);
};
export default memo(Recommend);
//# sourceMappingURL=index.jsx.map