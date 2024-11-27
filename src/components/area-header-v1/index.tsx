import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { HeaderV1Wrapper } from '@/components/area-header-v1/style.ts';
import { Link } from 'react-router-dom';

interface Iprops {
    children?: ReactNode;
    title?: string;
    keywords?: string[];
    moreText?: string;
    moreLink?: string;
}

const AreaHeaderV1: FC<Iprops> = (props: Iprops) => {
    const { title = '默认标题', keywords = [], moreText = '更多', moreLink = '' } = props;
    return (
        <HeaderV1Wrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keywords">
                    {keywords.map((item) => (
                        <div className="item" key={item}>
                            <span className={'text'}>{item}</span>
                            <span className="divider">|</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right">
                <Link className={'more'} to={moreLink}>
                    {moreText}
                </Link>

                <i className="icon sprite_02"></i>
            </div>
        </HeaderV1Wrapper>
    );
};

export default memo(AreaHeaderV1);
