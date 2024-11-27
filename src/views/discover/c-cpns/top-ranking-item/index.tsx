import { FC, memo, ReactNode } from 'react';
import { RankingItemWrapper } from '@/views/discover/c-cpns/top-ranking-item/style.ts';

interface Iprops {
    children?: ReactNode;
    itemData: any;
}

const TopRankingItem: FC<Iprops> = (props) => {
    const { itemData } = props.itemData;
    return <RankingItemWrapper>TopRankingItem</RankingItemWrapper>;
};

export default memo(TopRankingItem);
