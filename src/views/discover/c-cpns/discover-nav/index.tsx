import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { NavWrapper } from '@/views/discover/c-cpns/discover-nav/style.ts';
import { discoverMenu } from '@/assets/data/local-data.ts';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

interface Iprops {
    children?: ReactNode;
}

interface Iitem {
    title: string;
    link: string;
}

const NabBar: FC<Iprops> = () => {
    return (
        <NavWrapper>
            <div className="nav wrap-v1">
                {discoverMenu.map((item: Iitem) => {
                    return (
                        <div className="item" key={item.link}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }: NavLinkRenderProps) => {
                                    return isActive ? 'active' : '';
                                }}
                            >
                                {item.title}
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </NavWrapper>
    );
};

export default memo(NabBar);
