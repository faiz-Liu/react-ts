import { memo, useEffect, useState } from 'react';
import HYRequest from '@/service';
const Recommend = () => {
    const [banners, setBanners] = useState([]);
    // 测试网络请求
    useEffect(() => {
        HYRequest.request({
            url: '/api/banner'
        }).then((res) => {
            console.log(res);
            setBanners(res.banners);
            console.log(banners);
        });
    }, [banners]);
    return (<div>
            {banners.map((item, index) => {
            return <div key={index}>{item.imageUrl}</div>;
        })}
        </div>);
};
export default memo(Recommend);
//# sourceMappingURL=index%E5%A4%87%E4%BB%BD.jsx.map