import { FC, memo, ReactNode } from 'react';
import { RankingWrapper } from '@/views/discover/c-cpns/top-ranking/style.ts';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import TopRankingItem from '@/views/discover/c-cpns/top-ranking-item';

interface Iprops {
    children?: ReactNode;
}

const TopRanking: FC<Iprops> = () => {
    const { rankings } = useAppSelector((state) => ({
        rankings: state.recommend.rankings
    }));
    return (
        <RankingWrapper>
            <AreaHeaderV1 title="榜单" moreLink={'/discover/ranking'} />
            <div className={'content'}>
                {rankings.map((item) => {
                    return <TopRankingItem key={item.id} itemData={item} />;
                })}
            </div>
        </RankingWrapper>
    );
};

export default memo(TopRanking);
