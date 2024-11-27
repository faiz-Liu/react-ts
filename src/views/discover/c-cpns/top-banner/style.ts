import styled from 'styled-components';
import BannerSprite from '@/assets/img/banner_sprite.png';
import Download from '@/assets/img/download.png';

export const BannerWrapper = styled.div`
    .banner {
        height: 270px;
        background-color: red;

        display: flex;
        position: relative;
    }
`;
export const BannerLeft = styled.div`
    position: relative;
    width: 730px;

    .item {
        overflow: hidden;
        height: 270px;

        .image {
            width: 100%;
        }
    }

    .dots {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        > li {
            margin: 0 2px;

            .item {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: url(${BannerSprite}) 3px -343px;
                cursor: pointer;

                &:hover,
                &.active {
                    background-position: -16px -343px;
                }
            }
        }
    }
`;
export const BannerRight = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: '_blank'
})`
    width: 254px;
    height: 270px;
    display: flex;
    background: url(${Download});
    position: relative;

    > p {
        text-align: center;
        color: #8d8d8d;
        font-size: 12px;
        position: absolute;
        bottom: 7px;
        left: 0;
        right: 0;
    }
`;
export const BannerControl = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 63px;

    > button {
        outline: none;
        border: none;
    }

    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${BannerSprite});
        background-color: transparent;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`;
