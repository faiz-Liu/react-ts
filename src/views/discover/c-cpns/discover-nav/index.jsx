import { memo } from 'react';
import { NavWrapper } from '@/views/discover/c-cpns/discover-nav/style.ts';
import { discoverMenu } from '@/assets/data/local-data.ts';
import { NavLink } from 'react-router-dom';
const NabBar = () => {
    return (<NavWrapper>
            <div className="nav wrap-v1">
                {discoverMenu.map((item) => {
            return (<div className="item" key={item.link}>
                            <NavLink to={item.link} className={({ isActive }) => {
                    return isActive ? 'active' : '';
                }}>
                                {item.title}
                            </NavLink>
                        </div>);
        })}
            </div>
        </NavWrapper>);
};
export default memo(NabBar);
//# sourceMappingURL=index.jsx.map