import { memo, useRef, useState } from 'react';
import { useAppSelector, useAppShallowEqual } from '@/store';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from '@/views/discover/c-cpns/top-banner/style.ts';
import { Carousel } from 'antd';
const TopBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 从store获取数据
    const banners = useAppSelector((state) => state.recommend.banners, useAppShallowEqual);
    const carouselRef = useRef(null);
    // 获取背景图片
    const bgImageUrl = currentIndex >= 0 && banners.length > 0
        ? banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
        : '';
    function handleBeforeChange(from, to) {
        setCurrentIndex(to - 1);
    }
    return (<BannerWrapper style={{
            background: `url(${bgImageUrl}) center center / 6000px`
        }}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay ref={carouselRef} effect={'fade'} waitForAnimate={true} 
    // beforeChange={handleBeforeChange}
    afterChange={(current) => setCurrentIndex(current)}>
                        {banners.map((item) => (<div key={item.imageUrl} className="item">
                                <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                            </div>))}
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={() => carouselRef?.current.prev()}></button>
                    <button className="btn right" onClick={() => carouselRef?.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>);
};
export default memo(TopBanner);
//# sourceMappingURL=index.jsx.map