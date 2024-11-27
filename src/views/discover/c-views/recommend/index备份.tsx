import { FC, memo, ReactNode, useEffect, useState } from 'react';
import HYRequest from '@/service';

interface Iprops {
    children?: ReactNode;
}

interface IBannerType {
    adid: null;
    bannerBizType: string;
    exclusive: boolean;
    imageUrl: string;
    scm: string;
    targetId: number;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url: null;
}

const Recommend: FC<Iprops> = () => {
    const [banners, setBanners] = useState<IBannerType[]>([]);
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

    return (
        <div>
            {banners.map((item, index) => {
                return <div key={index}>{item.imageUrl}</div>;
            })}
        </div>
    );
};

export default memo(Recommend);
