import { memo } from 'react';
import { HeaderLeft, HeaderRight, HeaderWrapper } from '@/components/app-header/style.ts';
import HeaderTitles from '@/assets/data/header-lists.json';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const AppHeader = () => {
    // 定义组件内部状态
    // const [currentIndex, setCurrentIndex] = useState(0);
    // 组件展示逻辑
    function showItem(item) {
        if (item.type === 'path') {
            return (<NavLink to={item.link} className={({ isActive }) => {
                    return isActive ? 'active' : '';
                }}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>);
        }
        else {
            return (<a href={item.link} target={'_blank'} rel={'noreferrer'}>
                    {item.title}
                </a>);
        }
    }
    return (<HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/" className="logo sprite_01">
                        网易云音乐
                    </a>
                    <div className="title-list">
                        {HeaderTitles.map((item) => {
            return (<div className="item" key={item.title}>
                                    {showItem(item)}
                                </div>);
        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <span className="input">
                        <Input placeholder={'音乐/视频/电台/用户'} className="search" prefix={<SearchOutlined />}/>
                    </span>
                    <span className="center">创作者中心</span>
                    <span className="login">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>);
};
export default memo(AppHeader);
//# sourceMappingURL=index.jsx.map